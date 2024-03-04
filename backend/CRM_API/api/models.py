from django.db import models

# Create your models here.
class Ticket(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=300)
    priority = models.IntegerField()