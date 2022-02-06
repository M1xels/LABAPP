from pickle import TRUE
from sqlite3 import Date
from django.db import models
from django.db.models import Model

class register(models.Model):
    Email_data = models.EmailField(max_length = 254, primary_key= True, null=False)
    User_name = models.CharField(max_length= 50, null=False)
    Password_input = models.CharField(default= "", max_length =40, null=False)
    Job_description = models.BooleanField(null=False)
    Contact_num = models.DecimalField(max_digits=11, decimal_places=0, default="", null=False)

    class Meta:
        db_table = "reg1"
    
    

class index(models.Model):
    User_name = models.CharField(max_length= 50, primary_key= True, null=False)
    Password_data =models.CharField(default= "", max_length =40, null=False)

    class Meta:
        db_table = "i1"
    


class homepage(models.Model):

    Availability = [
        ('AVAILABLE ', 'AVAILABLE '),
        ('OCCUPIED ', 'OCCUPIED '),

        ]
    Section_name= models.CharField(max_length= 50, null=False)
    Date = models.DateField(primary_key= True, null=False)
    Time_in = models.TimeField(null=False)
    Time_out = models.TimeField(null=False)
    Status = models.CharField(max_length=50, choices = Availability, null=False)

    class Meta:
        db_table = "hp1"
    
    
    

class hardware_reports(models.Model):
    Laboratories = [
        ('LABORATORY 1', 'LABORATORY 1'),
        ('LABORATORY 2', 'LABORATORY 2'),
        ('LABORATORY 3', 'LABORATORY 3'),
        ('LABORATORY 4', 'LABORATORY 4'),
        ]
    Lab_num = models.CharField(max_length=50, choices = Laboratories, null=False)
    Pc_num = models.IntegerField(primary_key = True, null=False)
    System_unit = models.BooleanField()
    Mouse = models.BooleanField()
    Avr = models.BooleanField()
    Monitor = models.BooleanField()
    Comments = models.CharField(max_length=50)

    class Meta:
        db_table = "hr1"

    

class software_reports(models.Model):
    Laboratory_num = [
        ('LABORATORY 1', 'LABORATORY 1'),
        ('LABORATORY 2', 'LABORATORY 2'),
        ('LABORATORY 3', 'LABORATORY 3'),
        ('LABORATORY 4', 'LABORATORY 4'),
        ]
    Concern = [
        ('Request', 'Request'),
        ('Complain', 'Complain'),
        ('Suggest', 'Suggest'),
        ('Others', 'Others'),
        ]
    User_name = models.CharField(max_length=50, primary_key = True, null=False)
    Type_concern = models.CharField(max_length=50, choices = Concern, null=False)
    Lab_num = models.CharField(max_length=50, choices = Laboratory_num, null=False)
    Pc_num = models.IntegerField(null=False)
    Message = models.CharField(max_length=256, null=False)

    class Meta:
        db_table = "sr1"

class equipmentdevicel1(models.Model):
    pc_num = models.BigAutoField(primary_key = True)
    system_unit = models.BooleanField()
    monitor = models.BooleanField()
    keyboard = models.BooleanField()
    mouse = models.BooleanField()
    avr = models.BooleanField()
    remarks = models.CharField(max_length=20)

    class Meta:
        db_table = "eql1"
        

class equipmentdevicel2(models.Model):
    pc_num = models.BigAutoField(primary_key = True)
    system_unit = models.BooleanField()
    monitor = models.BooleanField()
    keyboard = models.BooleanField()
    mouse = models.BooleanField()
    avr = models.BooleanField()
    remarks = models.CharField(max_length=20)

    class Meta:
        db_table = "eql2"

class equipmentdevicel3(models.Model):
    pc_num = models.BigAutoField(primary_key = True)
    system_unit = models.BooleanField()
    monitor = models.BooleanField()
    keyboard = models.BooleanField()
    mouse = models.BooleanField()
    avr = models.BooleanField()
    remarks = models.CharField(max_length=20)
    class Meta:
        db_table = "eql3"


class equipmentdevicel4(models.Model):
    pc_num = models.BigAutoField(primary_key = True)
    system_unit = models.BooleanField()
    monitor = models.BooleanField()
    keyboard = models.BooleanField()
    mouse = models.BooleanField()
    avr = models.BooleanField()
    remarks = models.CharField(max_length=20)
    class Meta:
        db_table = "eql4"

class perform_request(models.Model):
    date = models.DateField(primary_key = True)
    name = models.CharField(max_length=100)
    Lab_num = models.PositiveIntegerField()
    Pc_num = models.PositiveIntegerField()
    Type_report = models.CharField(max_length=100)
    remarks = models.CharField(max_length=20)
    status = models.CharField(max_length=30)
    class Meta:
        db_table = "per_req"
   

