from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import *

def user_home(request):
    return JsonResponse({"message": "Welcome User!"})

@csrf_exempt
def apply_internship(request):
    if request.method == "POST":
        try:
            # Normal text fields
            name = request.POST.get("name")
            gender = request.POST.get("gender")
            college = request.POST.get("college")
            internshipType = request.POST.get("internshipType")
            durationFrom = request.POST.get("durationFrom")
            durationTo = request.POST.get("durationTo")
            yearOfStudy = request.POST.get("yearOfStudy")
            email = request.POST.get("email")
            mobile = request.POST.get("mobile")
            timing = request.POST.get("timing")
            inTime = request.POST.get("inTime")
            outTime = request.POST.get("outTime")
            areaOfInterest = request.POST.get("areaOfInterest")
            paymentOption = request.POST.get("paymentOption")

            # File uploads
            resume = request.FILES.get("resume")
            recommendation = request.FILES.get("recommendation")
            progressReport = request.FILES.get("progressReport")
            sampleCertificate = request.FILES.get("sampleCertificate")

            # Save to DB
            InternshipApplication.objects.create(
                name=name,
                gender=gender,
                college=college,
                internshipType=internshipType,
                durationFrom=durationFrom,
                durationTo=durationTo,
                yearOfStudy=yearOfStudy,
                email=email,
                mobile=mobile,
                timing=timing,
                inTime=inTime,
                outTime=outTime,
                areaOfInterest=areaOfInterest,
                paymentOption=paymentOption,
                resume=resume,
                recommendation=recommendation,
                progressReport=progressReport,
                sampleCertificate=sampleCertificate,
            )

            return JsonResponse({"message": "Application submitted successfully!"}, status=201)

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

    return JsonResponse({"error": "Invalid request method"}, status=405)


@csrf_exempt
def list_internships(request):
    if request.method == "GET":
        data = []
        for app in InternshipApplication.objects.all().order_by("-submitted_at"):
            data.append({
                "id": app.id,
                "name": app.name,
                "college": app.college,
                "email": app.email,
                "mobile": app.mobile,
                "timing": app.timing,
                "paymentOption": app.paymentOption,
                "submitted_at": app.submitted_at.strftime("%Y-%m-%d %H:%M"),
            })
        return JsonResponse(data, safe=False)
    return JsonResponse({"error": "Invalid request method"}, status=405)
