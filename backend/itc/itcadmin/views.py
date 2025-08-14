from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
import json
from django.contrib.auth.hashers import check_password
from .models import *
from django.views.decorators.csrf import csrf_exempt

def admin_dashboard(request):
    return JsonResponse({"message": "Welcome Admin!"})

@csrf_exempt
def admin_login(request):
    if request.method == "POST":
        print("Request received:", request.body)
        data = json.loads(request.body)
        admin_id = data.get("adminId")
        password = data.get("password")

        try:
            admin = AdminUser.objects.get(admin_id = admin_id)
            if password == admin.password:
                return JsonResponse({"success": True, "token": "dummy-token"})
            else:
                return JsonResponse({"success": False, "error": "Wrong password"})
        except AdminUser.DoesNotExist:
            return JsonResponse({"success": False, "error": "Admin not Found"})