from django.shortcuts import render, HttpResponse, redirect
from .models import *

# Create your views here.
def index(request):
    return render(request, 'index.html')
