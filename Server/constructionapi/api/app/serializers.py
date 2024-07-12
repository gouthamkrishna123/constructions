from rest_framework import serializers
from .models import construction
from .models import contact
from .models import appointment
from django.contrib.auth.models import User

class ConstructionSerializer(serializers.ModelSerializer):
    class Meta:
        model=construction
        fields='__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta :
        model=contact
        fields='__all__'

class ConstructionloginSerializer(serializers.ModelSerializer):
    class Meta:
        model=construction
        fields=('username','password')
        # extra_kwargs = {'password': {'write_only': True}}
        # def create(self, validated_data):
        #     user = User.objects.create_user(
        #     username=validated_data['username'],
        #     password=validated_data['password'])
        #     user.set_password(validated_data['password'])
        #     user.save()
        #     return user



class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=appointment
        fields='__all__'
        