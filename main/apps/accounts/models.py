from django.db import models
import re
from datetime import datetime
import bcrypt
from ..products.model import *
# Create your models here.

class UserManager(models.Manager):
    def register(self, firstName, lastName, password, confirm):
        response = {
            "valid": True,
            "errors": [],
            "user": None
        }
        if len(firstName) < 1:
            response["errors"].append("Name is required")
        elif len(firstName) < 3:
            response["errors"].append("Name must be 3 characters or longer")
        if len(lastName) < 1:
            response["errors"].append("lastName is required")
        elif len(lastName) < 3:
            response["errors"].append("lastName must be 3 characters or longer")
        else:
            lastName_list = User.objects.filter(lastName = lastName.lower())
            if(len(lastName_list) > 0):
                response["errors"].append("lastName is already in use")
        if len(password) < 1:
            response["errors"].append("Password is required")
        elif len(password) < 5:
            response["errors"].append("Password must be 5 characters or longer")

        if len(confirm) < 1:
            response["errors"].append("Confirm Password is required")
        elif confirm != password:
            response["errors"].append("Confirm Password must match Password")

        if len(response["errors"]) > 0:
            response["valid"] = False
        else:
            response["user"] = User.objects.create(
                firstName=firstName,
                lastName=lastName.lower(),
                password=bcrypt.hashpw(password.encode(), bcrypt.gensalt())
            )
        return response
    # using lastName for login change it to email
    def login(self, lastName, password):
        response = {
            "valid": True,
            "errors": [],
            "user": None
        }
        if len(lastName) < 1:
            response["errors"].append("Username is required")
        else:
            username_list = User.objects.filter(lastName=lastName.lower())
            if len(username_list) == 0:
                response["errors"].append("Username not found")
        if len(password) < 1:
            response["errors"].append("Password is required")
        elif len(password) < 5:
            response["errors"].append("Password must be 5 characters or longer")
        if len(response["errors"]) == 0:
            hashed_pw = username_list[0].password
            if bcrypt.checkpw(password.encode(), hashed_pw.encode()):
                response["user"] = username_list[0]
            else:
                response["errors"].append("Incorrect Password")
        if len(response["errors"]) > 0:
            response["valid"] = False
        return response

class Address(models.Model):
    street_address_1 = models.CharField(max_length=256, blank=True)
    street_address_2 = models.CharField(max_length=256, blank=True)
    city = models.CharField(max_length=256, blank=True)
    city_area = models.CharField(max_length=128, blank=True)
    postal_code = models.CharField(max_length=20, blank=True)
    country = CountryField()
    country_area = models.CharField(max_length=128, blank=True)
    phone = PossiblePhoneNumberField(blank=True, default='')
    def __repr__(self):
        return (
            'Address(first_name=%r, last_name=%r, company_name=%r, '
            'street_address_1=%r, street_address_2=%r, city=%r, '
            'postal_code=%r, country=%r, country_area=%r, phone=%r)' % (
                self.street_address_1, self.street_address_2, self.city,
                self.postal_code, self.country, self.country_area,
                self.phone))

class User(models.Model):
    firstName     = models.CharField(max_length=255)
    lastName      = models.CharField(max_length=255)
    email         = models.EmailField(unique=True)
    password      = models.CharField(max_length=255)
    userLevel     = models.CharField(max_length=255)
    streetAddress = models.CharField(max_length=256, blank=True)
    created_at    = models.DateTimeField(auto_now_add=True)
    updated_at    = models.DateTimeField(auto_now_add=True)
    objects = UserManager()
    def __repr__(self):
        return "<User object: {}>".format(self.lastName)