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


@method_decorator(csrf_exempt,name='dispatch')
def PostBook(request):
    if request.method =="GET":
        return PostListView.as_view()(request)
    elif request.method =="POST":
        req = json.loads(request.body.decode('utf-8'))
        title = req['title']
        body = req['body']
        thumbnail = req['thumbnail']
      
        if title!="None":
            print("POST 데이터를 정상적으로 입력받았습니다")
            poster= Post(title=title,body=body,thumbnail=thumbnail)
            poster.save()
            return HttpResponse(simplejson.dumps({"response":"Good"}))
        else:
            print("POST 데이터를 찾을 수 없습니다")
            return HttpResponse(simplejson.dumps({"response":"Fail"}))     
@register.filter
def get_item(dictionary,key):
    return dictionary.get(key)

