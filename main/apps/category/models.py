from django.db import models

# Create your models here.
class Category(models.Model):
    name          = models.CharField(max_length=120)
    product_id    = models.ManyToManyField(Product, related_name="product_id",null=True, blank=True)
    created_at    = models.DateTimeField(auto_now_add=True)
    updated_at    = models.DateTimeField(auto_now_add=True)