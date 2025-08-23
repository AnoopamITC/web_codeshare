from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('dashboard/', views.admin_dashboard),
    path("admin-login/", views.admin_login),
    path("add-internship/", views.add_internship, name="add_internship"),
    path("get-internships/", views.get_internships, name="get_internships"),
]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)