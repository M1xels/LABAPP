from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
   return render(request, 'pages/LOG.html')

def register(request):
   return render(request, 'pages/REGISTER.html')   
   
def homepage(request):
   return render(request, 'pages/HOMEPAGE.html')

def hardware(request):
   return render(request, 'pages/HARDWARE.html')

def software(request):
   return render(request, 'pages/SOFTWARE.html')


