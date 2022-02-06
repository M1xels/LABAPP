from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render, redirect
from .models import *
from django.contrib.auth.models import User, auth
from django.contrib.auth import authenticate


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


def equipmentdevice(request):
    if request.method=='POST':
        pcnum = request.POST.get('pc_num'),
        sys_unit = request.POST.get('system_unit'),
        mntr = request.POST.get('monitor'),
        kbrd = request.POST.get('kboard'),
        ms = request.POST.get('mouse'),
        Avr = request.POST.get('avr'),
        Remarks = request.POST.get('rmrks')
        data = equipmentdevicel1.objects.create(pc_num=pcnum, system_unit=sys_unit, monitor=mntr, keyboard=kbrd, mouse=ms, avr=Avr, remarks=Remarks)
        data.save()
        return render(request, 'activities/EQUIPMENT_DEVICE.html')

def performrequest(request):
    return render(request, 'activities/PERFORM_REQUEST.html')

def records(request):
    return render(request, 'activities/RECORDS.html')
