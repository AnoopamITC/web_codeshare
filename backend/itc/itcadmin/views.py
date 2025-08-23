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
        


@csrf_exempt
def add_internship(request):
    if request.method == "POST":
        try:
            title = request.POST.get("title")
            description = request.POST.get("description")
            duration = request.POST.get("duration")
            fees = request.POST.get("fees")
            eligibility = request.POST.get("eligibility")
            mode = request.POST.get("mode")
            status = request.POST.get("status") == "true"

            image = request.FILES.get("image")  # ✅ Handle uploaded image

            internship = Internship.objects.create(
                title=title,
                description=description,
                duration=duration,
                fees=fees,
                eligibility=eligibility,
                mode=mode,
                status=status,
                image=image,
            )

            return JsonResponse({
                "message": "Internship created successfully",
                "id": internship.id,
                "image_url": internship.image.url if internship.image else None
            }, status=201)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

    return JsonResponse({"error": "Invalid request method"}, status=405)


@csrf_exempt
def get_internships(request):
    if request.method == "GET":
        internships = list(Internship.objects.values())
        # Add image URLs
        for i in internships:
            from django.conf import settings
            if i["image"]:
                i["image"] = f"{settings.MEDIA_URL}{i['image']}"
        return JsonResponse({"internships": internships}, safe=False)

    return JsonResponse({"error": "Invalid request method"}, status=405)