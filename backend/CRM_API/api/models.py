from django.db import models
import uuid

# Create your models here.
class Ticket(models.Model):
    id = models.CharField(primary_key=True, max_length=36, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=50)
    description = models.TextField(max_length=300)
    priority = models.IntegerField()
    category = models.CharField(max_length=50, default="")