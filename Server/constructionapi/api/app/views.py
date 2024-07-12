from django.shortcuts import render

# Create your views here.
from .models import construction
from .serializers import ConstructionSerializer
from .serializers import ConstructionloginSerializer
from .serializers import AppointmentSerializer
from .models import contact
from .serializers import ContactSerializer
from .models import appointment
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate
from django.http import HttpResponse
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.shortcuts import render, redirect
from rest_framework.authtoken.models import Token


@api_view(['POST'])
def register(request):
    if request.method=='POST':
        serializer=ConstructionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'saved successfully','data':serializer.data})

@api_view(['GET'])
def display(request):
# def display(request,id):
    if request.method=='GET':
        data=construction.objects.all()
        serializer=ConstructionSerializer(data,many=True,context={'request':request})
        return Response(serializer.data)
    

    
@api_view(['POST'])
def reg(request):
    if request.method=='POST':
        serializer=ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'saved successfully','data':serializer.data})
            #return redirect ('http://localhost:3000/login') 

@api_view(['POST'])
def appo(request):
    if request.method=='POST':
        serializer=AppointmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'saved successfully','data':serializer.data})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
@api_view(['DELETE'])
def delete(request,id):
    try:
        instance=construction.objects.get(id=id)
    except construction.DoesNotExist:
        return Response({"error":"Not Found"},status=status.HTTP_404_NOT_FOUND)
    if request.method=="DELETE":
        instance.delete()
        return Response({"data":"deleted"})
    
@api_view(['DELETE'])
def delete1(request,id):
    try:
        instance=contact.objects.get(id=id)
    except contact.DoesNotExist:
        return Response({"error":"Not Found"},status=status.HTTP_404_NOT_FOUND)
    if request.method=="DELETE":
        instance.delete()
        return Response({"data":"deleted"})

@api_view(['GET'])
def one(request):
    if request.method=='GET':
        data=contact.objects.all()
        serializer=ContactSerializer(data,many=True,context={'request':request})
        return Response(serializer.data)
    
@api_view(['GET'])
def two(request):
    if request.method=='GET':
        data=appointment.objects.all()
        serializer=AppointmentSerializer(data,many=True,context={'request':request})
        return Response(serializer.data)
    
@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        username = request.data.get('username')
        password = request.data.get('password')
        user = construction.objects.filter(username=username, password=password)
        print(user)
        if user:
            

            return Response({'message':"login successfull"})
        else:
           
            return Response({'error': 'Invalid credentials'})
        


    
