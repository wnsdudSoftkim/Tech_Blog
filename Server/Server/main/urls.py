from django.urls import path
from . import views


urlpatterns = [
    path('',views.MyUser, name='main'),
    path('login',views.login,name='login')
]