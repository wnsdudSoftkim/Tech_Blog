from django.db import models

# Create your models here.
class Post(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.TextField(verbose_name="title")
    body = models.TextField(verbose_name="Body")
    thumbnail=models.TextField(verbose_name="thumbnail")
    user_date = models.DateField(auto_now_add=True)
    my_id = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'Title={0}'.format(self.title)
