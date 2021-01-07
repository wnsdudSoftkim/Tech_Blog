from django.db import models

# Create your models here.
class User(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.CharField(max_length=64,verbose_name="이메일",null=True)
    password = models.CharField(max_length=64,verbose_name="패스워드",null=True)
    author = models.CharField(max_length=64,verbose_name="사용자 이름",null=True)

    def __str__(self):
        return 'Email={0}'.format(self.email)
