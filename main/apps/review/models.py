from django.db import models
import re
from datetime import datetime
import bcrypt
from ..products.model import *
# Create your models here.
class Review(models.Model):
    text     = models.TextField()
    user_id    = models.ForeignKey(User, related_name="user_id",null=True, blank=True)
    product_id    = models.OneToManyField(Product, related_name="product_id",null=True, blank=True)
    created_at    = models.DateTimeField(auto_now_add=True)
    updated_at    = models.DateTimeField(auto_now_add=True)