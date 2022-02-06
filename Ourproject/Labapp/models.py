from pickle import TRUE
from sqlite3 import Date
from django.db import models
from django.db.models import Model

class register(Model):
    Email_data = models.EmailField(max_length = 254, primary_key= True)
    User_name = models.CharField(max_length= 50)
    Password_input = models.CharField(default= "", max_length =40)
    Job_description = models.BooleanField()
    Contact_num = models.DecimalField(max_digits=11, decimal_places=0, default="")
    

class login(Model):
    User_name = models.CharField(max_length= 50, primary_key= True)
    Password_data =models.CharField(default= "", max_length =40)


class homepage(Model):
    Section_name= models.CharField(max_length= 50)
    Date = models.DateField(primary_key= True)
    Time_in = models.TimeField()
    Time_out = models.TimeField()
    Status = models.BooleanField()
   
    

class hardware_reports(Model):
    Lab_num = models.BooleanField()
    Pc_num = models.BigAutoField(primary_key = True)
    System_unit = models.BooleanField()
    Mouse = models.BooleanField()
    Avr = models.BooleanField()
    Monitor = models.BooleanField()
    Comments = models.CharField(max_length=50)

class hardware_reports(Model):
    User_name = models.CharField(max_length=50, primary_key = True)
    Type_concern = models.BigAutoField()
    Lab_num = models.BigAutoField()
    Pc_num = models.BigAutoField()
    Message = models.CharField(max_length=256)
   

