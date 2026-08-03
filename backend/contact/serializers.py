from rest_framework import serializers


class ContactFormSerializer(serializers.Serializer):
    name = serializers.CharField(trim_whitespace=True, max_length=150)
    email = serializers.EmailField()
    topic = serializers.CharField(trim_whitespace=True, max_length=100)
    message = serializers.CharField(trim_whitespace=True, min_length=5)

    def to_internal_value(self, data):
        if isinstance(data, dict):
            normalized_data = dict(data)
            if 'name' not in normalized_data and ('firstName' in normalized_data or 'lastName' in normalized_data):
                first_name = str(normalized_data.get('firstName', '')).strip()
                last_name = str(normalized_data.get('lastName', '')).strip()
                normalized_data['name'] = ' '.join(part for part in [first_name, last_name] if part)
            return super().to_internal_value(normalized_data)
        return super().to_internal_value(data)
