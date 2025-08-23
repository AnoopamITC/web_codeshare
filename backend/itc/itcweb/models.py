from django.db import models

class InternshipApplication(models.Model):
    name = models.CharField(max_length=200)
    gender = models.CharField(max_length=20)
    college = models.CharField(max_length=250)
    resume = models.FileField(upload_to="resumes/")
    recommendation = models.FileField(upload_to="recommendations/", blank=True, null=True)
    progressReport = models.FileField(upload_to="progress_reports/", blank=True, null=True)
    internshipType = models.CharField(max_length=100, blank=True, null=True)
    durationFrom = models.DateField()
    durationTo = models.DateField()
    yearOfStudy = models.CharField(max_length=50)
    email = models.EmailField()
    mobile = models.CharField(max_length=15)
    timing = models.CharField(max_length=20)
    inTime = models.TimeField()
    outTime = models.TimeField()
    sampleCertificate = models.FileField(upload_to="certificates/", blank=True, null=True)
    areaOfInterest = models.CharField(max_length=255)
    paymentOption = models.CharField(max_length=20)
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.college}"