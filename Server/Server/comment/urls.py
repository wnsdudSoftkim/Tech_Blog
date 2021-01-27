from django.urls import path
from . import views


urlpatterns = [
    path('',views.commentPost, name='commentpost'),
    path('fetchcomment',views.fetchComment, name="fetchcomment"),
     path('deletecomment',views.deleteComment, name="deletecomment")
]