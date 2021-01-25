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
from django.template.defaulttags import register


@method_decorator(csrf_exempt,name='dispatch')
def commentPost(request):
    if request.method =="GET":
        return CommentListView.as_view()(request)
    elif request.method =="POST":
        req = json.loads(request.body.decode('utf-8'))
        print(req)
        name = req['name']
        check = req['check']
        body = req['body']
        my_id = req['my_id']
        if name!="None":
            print("POST 데이터를 정상적으로 입력받았습니다")
            commend= Comment(name=name,check=check,body=body,my_id=my_id)
            commend.save()
            return HttpResponse(simplejson.dumps({"response":"Good"}))
        else:
            print("POST 데이터를 찾을 수 없습니다")
            return HttpResponse(simplejson.dumps({"response":"Fail"}))     
@register.filter
def get_item(dictionary,key):
    return dictionary.get(key)

