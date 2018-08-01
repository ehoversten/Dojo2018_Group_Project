from django.db import models
import re
from datetime import datetime
import bcrypt
from ..accounts.model import *
# Create image download price brand description
class ProductManager(models.Manager):
    def get_queryset(self):
        return ProductQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().active()

    def featured(self): #Product.objects.featured() 
        return self.get_queryset().featured()

    def get_by_id(self, id): # search feature
        qs = self.get_queryset().filter(id=id)
        if qs.count() == 1:
            return qs.first()
        return None

    def search(self, query):
        return self.get_queryset().active().search(query)
    # need to fix add item
    def addItem(self, item, creator):
        response = {
            "valid": True,
            "errors": [],
            "item": None
        }
        if len(item) < 3:
            response["errors"].append("Item is required")       
        if(len(response["errors"]) == 0):
            today = datetime.now()            
        if len(response["errors"]) > 0:
            response["valid"] = False
        else:
            response["item"] = Item.objects.create(
                name=item,
                creator_id = creator,
            )
            response["item"].user.add(User.objects.get(id = creator))
        return response

class Product(models.Model):
    title           = models.CharField(max_length=120)
    brand           = models.CharField(max_length=120)
    description     = models.TextField()
    price           = models.DecimalField(decimal_places=2, max_digits=20, default=10.99)
    image           = models.ImageField(upload_to=upload_image_path, null=True, blank=True)
    created_at      = models.DateTimeField(auto_now_add=True)
    updated_at      = models.DateTimeField(auto_now_add=True)
    featured        = models.BooleanField(default=False)
    active          = models.BooleanField(default=True)
    timestamp       = models.DateTimeField(auto_now_add=True)
    user_id         = models.ForeignKey(User, related_name="user_id",null=True, blank=True)
    review          = models.OneToManyField(Review, related_name="product_id",null=True, blank=True)
    objects = ProductManager()