from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse

def user_home(request):
    return JsonResponse({"message": "Welcome User!"})

