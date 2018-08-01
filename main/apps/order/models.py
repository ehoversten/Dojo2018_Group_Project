from django.db import models
from ..accounts.model import *
import re
from datetime import datetime
import bcrypt
from ..products.model import *

# Create your models here.

# class OrderManager(models.Manager):
class OrderManager(models.Manager):
    def get_queryset(self):
        return OrderManagerQuerySet(self.model, using=self._db)

    def by_request(self, request):
        return self.get_queryset().by_request(request)

    def new_or_get(self, billing_profile, cart_obj):
        created = False
        order = self.get_queryset().filter(
                billing_profile=billing_profile, 
                cart=cart_obj, 
                active=True, 
                status='created'
            )
        if order.count() == 1:
            obj = order.first()
        else:
            obj = self.model.objects.create(
                    billing_profile=billing_profile, 
                    cart=cart_obj)
            created = True
        return obj, created

class Order(models.Model):
    billing_profile     = models.ForeignKey(BillingProfile, null=True, blank=True)
    order_id            = models.CharField(max_length=120, blank=True) 
    shipping_address    = models.ForeignKey(User, related_name="shipping_address",null=True, blank=True)
    billing_address     = models.ForeignKey(User, related_name="billing_address", null=True, blank=True)
    shipping_address_final    = models.TextField(blank=True, null=True)
    billing_address_final     = models.TextField(blank=True, null=True)
    # cart                = models.ForeignKey(Cart)
    status              = models.CharField(max_length=120, default='created', choices=ORDER_STATUS_CHOICES)
    shipping_total      = models.DecimalField(default=5.99, max_digits=100, decimal_places=2)
    total               = models.DecimalField(default=0.00, max_digits=100, decimal_places=2)
    active              = models.BooleanField(default=True)
    updated             = models.DateTimeField(auto_now=True)
    timestamp           = models.DateTimeField(auto_now_add=True)
    user_id             = models.ForeignKey(User, related_name="user_id",null=True, blank=True)
    product_id          = models.OneToManyField(User, related_name="product_id",null=True, blank=True)
    def __str__(self):
        return self.order_id

    objects = OrderManager()
