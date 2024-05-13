from django.shortcuts import render

# Create your views here.

def home(request):
  return render(request, "pages/Home_page.html")

def adminlogin(request):
  return render(request, "pages/Admin_login.html")

def adminsignup(request):
  return render(request, "pages/admin_signup.html")


def admin(request):
  return render(request, "pages/Admin.html")
  
