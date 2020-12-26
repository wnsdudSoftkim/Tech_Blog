from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=64,verbose_name="제목",null=True)
    body = models.CharField(max_length=64,verbose_name="Body",null=True)

    def __str__(self):
        return 'Title={0}'.format(self.title)
