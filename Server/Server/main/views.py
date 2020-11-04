from django.shortcuts import render
from rest_framework import generics,serializers
from rest_framework.response import Response
from .models import *
from .Serializer import *
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json
import simplejson

# Create your views here.
@method_decorator(csrf_exempt,name='dispatch')
def MyUser(request):
    if request.method =="GET":
        return UserListView.as_view()(request)
    elif request.method =="POST":
        req = json.loads(request.body.decode('utf-8'))
        email = req['email']
        password = req['password']
        author = req['author']
        print('email',email,'password',password,'author',author)
        user = User(email=email,password=password,author=author)
        user.save()
        return HttpResponse(simplejson.dumps({"aa":"Good"}))

