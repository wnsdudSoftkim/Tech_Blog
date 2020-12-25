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
def PostBook(request):
    if request.method =="GET":
        return PostListView.as_view()(request)
    elif request.method =="POST":
        req = json.loads(request.body.decode('utf-8'))
        title = req['title']
        body = req['body']
        mytitle=get_item(title,'title')
        mybody=get_item(body,'body')
        if Post.objects.filter(title=title).exists():
            return HttpResponse(simplejson.dumps({"response":"exist"}))
        else:
            poster= Post(title=mytitle,body=mybody)
            poster.save()
            return HttpResponse(simplejson.dumps({"response":"good"}))     
@register.filter
def get_item(dictionary,key):
    return dictionary.get(key)

