from django.urls import path
from . import views


urlpatterns = [
    path('',views.PostBook, name='post'),
]