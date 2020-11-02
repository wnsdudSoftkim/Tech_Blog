from django.db import models

# Create your models here.
class User(models.Model):
    email = models.CharField(max_length=64,verbose_name="이메일")
    password = models.CharField(max_length=64,verbose_name="패스워드")
    author = models.CharField(max_length=64,verbose_name="사용자 이름")

    def __str__(self):
        return self.email
