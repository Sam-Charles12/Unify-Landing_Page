from django.urls import path

from .views import SubmitContactFormView

urlpatterns = [
    path('contact/', SubmitContactFormView.as_view(), name='submit-contact-form'),
]