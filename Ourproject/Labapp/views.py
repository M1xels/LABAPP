from django.http import HttpResponse
from django.shortcuts import render, redirect
from .models import register1, software_reports
from .models import equipmentdevicel1
from django.contrib.auth.models import User
from django.contrib.auth.models import User, auth
from django.contrib.auth import authenticate
import mysql.connector as sql



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
def delete(request):
    datasr = software_reports.objects.all()
    
    return redirect('/performrequest')

def softwaredata(request):
    if request.method=='POST':
        Uname = request.POST.get('Username')
        TypeofC = request.POST.get('TypeofConcern')
        Labno = request.POST.get('Labnum')
        Pcno = request.POST.get('Pcnum')
        Mess = request.POST.get('Message')
        
        data = software_reports.objects.create(Username=Uname, Typeconcern=TypeofC, Labnum=Labno, Pcnum=Pcno, Message=Mess )
        data.save()
        return render(request, 'pages/HOMEPAGE.html')





def login(request):
    if request.method=="POST":
        m=sql.connect(host="localhost",user="root",password="",database='lablab')
        cursor=m.cursor()
        d=request.POST
        for key,value in d.items():
            if key=="email":
                email=value
            if key=="password":
                password=value
        
        c="select * from labapp_register1 where email='{}' and password='{}'".format(email,password)
        
        cursor.execute(c)
        t=tuple(cursor.fetchall())
        if t==():
            return render(request, 'pages/LOG.html')
            
        else:
            data = register1.objects.filter(Email=email)
          
            return render(request, 'pages/HOMEPAGE.html', {'data':data})

    return render(request, 'pages/LOG.html')
 
