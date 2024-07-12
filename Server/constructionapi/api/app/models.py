from django.db import models

# Create your models here.
class construction(models.Model):
    username=models.CharField(max_length=30)
    email=models.CharField(max_length=30)
    password=models.CharField(max_length=30)
    
class contact(models.Model):
    name=models.CharField(max_length=30)
    email=models.CharField(max_length=30)
    subject=models.CharField(max_length=50)
    message=models.CharField(max_length=100)

class appointment(models.Model):
    CHOICES=[('Site Plan','Site Plan'),('Interiors Design','Interiors Design'),('Renovation','Renovation')]
    name=models.CharField(max_length=30)
    email=models.CharField(max_length=30)
    phone_number=models.CharField(max_length=15)
    place=models.CharField(max_length=30)
    choose=models.CharField(max_length=16, choices=CHOICES)
    squre=models.CharField(max_length=10)
    message = models.TextField()



