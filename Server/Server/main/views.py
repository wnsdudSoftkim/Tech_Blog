from django.shortcuts import render
from rest_framework import generics,serializers
from rest_framework.response import Response
from .models import *
from .Serializer import *

# Create your views here.
def MyUser(request):
    if request.method =="GET":
        return UserListView.as_view()(request)
