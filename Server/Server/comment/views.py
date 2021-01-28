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

#댓글을 입력받는 창
@method_decorator(csrf_exempt,name='dispatch')
def commentPost(request):
    if request.method =="GET":
        return CommentListView.as_view()(request)
    elif request.method =="POST":
        req = json.loads(request.body.decode('utf-8'))
    
        name = req['name']
        check = req['check']
        body = req['body']
        my_id = req['my_id']
        my_date= req['my_date']
        if name!="None":
            print("comment 데이터를 정상적으로 입력받았습니다")
            commend= Comment(name=name,check=check,body=body,my_id=my_id,my_date=my_date)
            commend.save()
            return HttpResponse(simplejson.dumps({"response":"Good"}))
        else:
            print("comment 데이터를 찾을 수 없습니다")
            return HttpResponse(simplejson.dumps({"response":"Fail"})) 

#단일 포스트 접속시 id 비교하여 뿌려주는 역활
@method_decorator(csrf_exempt,name='dispatch')
def fetchComment(request):
    if request.method=="GET":
        return CommentListView.as_view()(request)  
    elif request.method=="POST":
        req = json.loads(request.body.decode('utf-8'))
       
        my_id = req["my_id"]
        if Comment.objects.filter(my_id=my_id).exists():
         
            #쿼리셋을 json으로 바꿔준다
            my_response = list(Comment.objects.filter(my_id=my_id).values())
            #JsonREsponse 한거랑 밑에 처럼 한거랑 똑같다.
           
            return HttpResponse(simplejson.dumps(my_response))
        else :
            return HttpResponse("N")
        
@method_decorator(csrf_exempt,name='dispatch')
def deleteComment(request):
    if request.method=="GET":
        return CommentListView.as_view()(request)
    elif request.method=="POST":
        req = json.loads(request.body.decode('utf-8'))
      
        my_id = req["my_id"]
        name=req["name"]
        check = req["check"]
        Comment.objects.filter(my_id=my_id,name=name,check=check).delete()
        return HttpResponse(simplejson.dumps({"response":"Good"}))
@register.filter
def get_item(dictionary,key):
    return dictionary.get(key)

