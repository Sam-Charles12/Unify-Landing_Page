from django.conf import settings
from django.core.mail import BadHeaderError, EmailMessage
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import ContactFormSerializer


@method_decorator(csrf_exempt, name='dispatch')
class SubmitContactFormView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = ContactFormSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(
                {'error': 'Please provide a valid name, email, topic, and message.'},
                status=status.HTTP_400_BAD_REQUEST,
            )

        data = serializer.validated_data
        subject = f"New contact request: {data['topic']}"
        message = (
            f"Name: {data['name']}\n"
            f"Email: {data['email']}\n"
            f"Topic: {data['topic']}\n\n"
            f"Message:\n{data['message']}"
        )

        email = EmailMessage(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            [settings.ADMIN_EMAIL],
            reply_to=[data['email']],
        )

        try:
            email.send(fail_silently=False)
        except BadHeaderError:
            return Response(
                {'error': 'The message could not be sent because it contained invalid header values.'},
                status=status.HTTP_400_BAD_REQUEST,
            )
        except Exception:
            return Response(
                {'error': 'The message could not be sent right now. Please try again later.'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

        return Response(
            {'success': True, 'message': 'Your message has been sent successfully.'},
            status=status.HTTP_201_CREATED,
        )
