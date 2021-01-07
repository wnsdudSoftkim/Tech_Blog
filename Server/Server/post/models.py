from django.db import models

# Create your models here.
class Post(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=64,verbose_name="제목",null=True)
    body = models.CharField(max_length=64,verbose_name="Body",null=True)
    user_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'Title={0}'.format(self.title)
