from django.test import SimpleTestCase
from django.urls import reverse
from rest_framework.test import APIClient


class ContactFormTests(SimpleTestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = reverse('submit-contact-form')

    def test_contact_form_requires_valid_payload(self):
        response = self.client.post(self.url, {}, format='json')

        self.assertEqual(response.status_code, 400)
        self.assertIn('error', response.json())
