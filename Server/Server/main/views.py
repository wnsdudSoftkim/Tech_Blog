from django.shortcuts import render
from rest_framework import generics,serializers
from rest_framework.response import Response
from .models import *
from .Serializer import *
from django.contrib.auth.hashers import make_password,check_password
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json
import simplejson
from django.template.defaulttags import register

# 회원가입
@method_decorator(csrf_exempt,name='dispatch')
def MyUser(request):
    if request.method =="GET":
        return UserListView.as_view()(request)
    elif request.method =="POST":
        req = json.loads(request.body.decode('utf-8'))
        email = req['email']
        password = req['password']
        author = req['author']
        myemail=get_item(email,'email')
        mypassword=get_item(password,'password')
        myauthor=get_item(author,'author')
        
        if User.objects.filter(email=email).exists():
            return HttpResponse(simplejson.dumps({"response":"exist"}))
        else:
            user = User(email=myemail,password=mypassword,author=myauthor)
            user.save()
            return HttpResponse(simplejson.dumps({"response":"good"}))
    
#로그인
@method_decorator(csrf_exempt,name='dispatch')
def login(request):
    if request.method=="GET":
         return UserListView.as_view()(request)
    elif request.method=="POST":
        req = json.loads(request.body.decode('utf-8'))
        email=req['email']
        password=req['password']
        myemail=get_item(email,'email')
        mypassword=get_item(password,'password')
     
        if User.objects.filter(email=myemail).exists():
            myuser = User.objects.get(email=myemail)
            if mypassword==myuser.password:
                return HttpResponse(simplejson.dumps({"response":"good"}))
            else:
                return HttpResponse(simplejson.dumps({"response":"fail"}))
        else:
            return HttpResponse(simplejson.dumps({"response":"null"}))
            
@register.filter
def get_item(dictionary,key):
    return dictionary.get(key)

