from django.db import models

# Create your models here.
class Comment(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField(verbose_name="name")
    check = models.TextField(verbose_name="check")
    body=models.TextField(verbose_name="body")
    my_id = models.TextField(verbose_name="my_id")
    my_date=models.TextField(verbose_name="my_date")

    def __str__(self):
        return 'Name={0}'.format(self.name)
