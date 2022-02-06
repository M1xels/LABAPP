/*enable button*////////////////


 /*card and button hide and show*/

$(document).ready(function(){
    $("#b1").click(function(){
        $("#fdata1").show();
        $("#fdata2").hide();
        $("#fdata3").hide();
        $("#fdata4").hide();
        
    });
    $("#b2").click(function(){
        $("#fdata1").hide();
        $("#fdata2").show();
        $("#fdata3").hide();
        $("#fdata4").hide();
       
    });
    $("#b3").click(function(){
        $("#fdata1").hide();
        $("#fdata2").hide();
        $("#fdata3").show();
        $("#fdata4").hide();
        
    });
    $("#b4").click(function(){
        $("#fdata1").hide();
        $("#fdata2").hide();
        $("#fdata3").hide();
        $("#fdata4").show();
        
    });
});
/*YES1 button*////////////////



    
    






function yes1(){
    
    var fname11 = document.getElementById("t11");
    var ddate12 = document.getElementById("t12");
    var timeIN13 = document.getElementById("t13");
    if (fname11.value == "" || ddate12.value == ""  || timeIN13.value == "" ){
        alert("please complete the fill up");
        
    }
        
    else{
        console.log("hahahahah");
        let O1 = "Laboratory 1 \n is Occupied by Class \n ";
        let V1 =  document.getElementById("t11") .value;

        var A1 = O1 + V1;


        document.getElementById("b1").innerText = A1;
        document.getElementById("s11").removeAttribute("disabled");
        document.getElementById("t14").removeAttribute("disabled");
        document.getElementById("to1").style.opacity = 1;

        document.getElementById("s12").setAttribute("disabled","disabled");
        document.getElementById("s13").setAttribute("disabled","disabled");
        modalob2.style.display = "block";
        
    }

    
    
    

    
}
/*document.getElementById("b2").innerHTML = '<img class="pic" src="desktop-computer.png" alt="image" ><br><h6 class="f">Lab1</h6>;*/
function yes2(){


    var fname21 = document.getElementById("t21");
    var ddate22 = document.getElementById("t22");
    var timeIN23 = document.getElementById("t23");
    if (fname21.value == "" || ddate22.value == ""  || timeIN23.value == "" ){
        alert("please complete the fill up");
        
    }
        
    else{
        console.log("hahahahah");
        let O2 = "Laboratory 2 \n is Occupied by Class \n ";
        let V2 =  document.getElementById("t21") .value;

        var A2 = O2 + V2;


        document.getElementById("b2").innerText = A2;
        document.getElementById("s21").removeAttribute("disabled");
        document.getElementById("t24").removeAttribute("disabled");
        document.getElementById("to2").style.opacity = 1;

        document.getElementById("s22").setAttribute("disabled","disabled");
        document.getElementById("s23").setAttribute("disabled","disabled");
    }
    

    
}
function yes3(){
    var fname31 = document.getElementById("t31");
    var ddate32 = document.getElementById("t32");
    var timeIN33 = document.getElementById("t33");
    if (fname31.value == "" || ddate32.value == ""  || timeIN33.value == "" ){
        alert("please complete the fill up");
        
    }
        
    else{
        console.log("hahahahah");
            
        let O3 = "Laboratory 3 \n is Occupied by Class \n ";
        let V3 =  document.getElementById("t31") .value;

        var A3 = O3 + V3;


        document.getElementById("b3").innerText = A3;
        document.getElementById("s31").removeAttribute("disabled");
        document.getElementById("t34").removeAttribute("disabled");
        document.getElementById("to3").style.opacity = 1;

        document.getElementById("s32").setAttribute("disabled","disabled");
        document.getElementById("s33").setAttribute("disabled","disabled");
    }
    
    
}
function yes4(){
    var fname41 = document.getElementById("t41");
    var ddate42 = document.getElementById("t42");
    var timeIN43 = document.getElementById("t43");
    if (fname41.value == "" || ddate42.value == ""  || timeIN43.value == "" ){
        alert("please complete the fill up");
        
    }
        
    else{
        console.log("hahahahah");
            
        let O4 = "Laboratory 4 \n is Occupied by Class \n ";
        let V4 =  document.getElementById("t41") .value;
        

        var A4 = O4 + V4;


        document.getElementById("b4").innerText = A4;
        document.getElementById("s41").removeAttribute("disabled");
        document.getElementById("t44").removeAttribute("disabled");
        document.getElementById("to4").style.opacity = 1;

        document.getElementById("s42").setAttribute("disabled","disabled");
        document.getElementById("s43").setAttribute("disabled","disabled");
    }
    
    
}
/////////////////////////////////////////////////////////////////////////////////////////////////*after the last submit*//////////////////////////////////////////////////////////////////////////////////
function sey1(){
    var timeout1 =  document.getElementById("t14");
    if(timeout1.value == ""){
        alert("please complete the fill up");
    }
    else{
        
        document.getElementById("b1").innerHTML = '<img class="pic" src="desktop-computer.png" alt="image" ><br><h6 class="f">Laboratory 1</h6>';
        document.getElementById("s11").setAttribute("disabled","disabled");
        
        document.getElementById("t14").setAttribute("disabled","disabled");
        document.getElementById("to1").style.opacity = 0.1;
        document.getElementById("t11").value ='';
        document.getElementById("t12").value ='';
        document.getElementById("t13").value ='';
        document.getElementById("t14").value ='';
/////////////////////////////////////////////////////////////////////////////////////////////////*default return*//////////////////////////////////////////////////////////////////////////////////
        document.getElementById("ta1").value ='default'
        document.getElementById("ta2").value ='default'
        document.getElementById("ta3").value ='default'
        document.getElementById("ta4").value ='default'
        document.getElementById("ta5").value ='default'
        document.getElementById("ta6").value ='default'
        document.getElementById("ta7").value ='default'
        document.getElementById("ta8").value ='default'
        document.getElementById("ta9").value ='default'
        document.getElementById("ta10").value ='default'
        document.getElementById("ta11").value ='default'
        document.getElementById("ta12").value ='default'
        document.getElementById("ta13").value ='default'
        document.getElementById("ta14").value ='default'
        document.getElementById("ta15").value ='default'
        document.getElementById("ta16").value ='default'
        document.getElementById("ta17").value ='default'
        document.getElementById("ta18").value ='default'
        document.getElementById("ta19").value ='default'
        document.getElementById("ta20").value ='default'
        document.getElementById("ta21").value ='default'
        document.getElementById("ta22").value ='default'
        document.getElementById("ta23").value ='default'
        document.getElementById("ta24").value ='default'
        document.getElementById("ta25").value ='default'
        document.getElementById("ta26").value ='default'
        document.getElementById("ta27").value ='default'
        document.getElementById("ta28").value ='default'
        document.getElementById("ta29").value ='default'
        document.getElementById("ta30").value ='default'
        document.getElementById("ta31").value ='default'
        document.getElementById("ta32").value ='default'
        document.getElementById("ta33").value ='default'
        document.getElementById("ta34").value ='default'
        document.getElementById("ta35").value ='default'
        document.getElementById("ta36").value ='default'
        document.getElementById("ta37").value ='default'
        document.getElementById("ta38").value ='default'
        document.getElementById("ta39").value ='default'
        document.getElementById("ta40").value ='default'
        document.getElementById("ta41").value ='default'
        document.getElementById("ta42").value ='default'
        document.getElementById("ta43").value ='default'
        document.getElementById("ta44").value ='default'
        document.getElementById("ta45").value ='default'
        document.getElementById("ta46").value ='default'
        document.getElementById("ta47").value ='default'
        document.getElementById("ta48").value ='default'
        document.getElementById("ta49").value ='default'
        document.getElementById("ta50").value ='default'


    /////////////////////////////////////////////////////////////////////////////////////////////////*disabling*//////////////////////////////////////////////////////////////////////////////////



        document.getElementById("ta1").setAttribute("disabled","disabled");
        document.getElementById("ta2").setAttribute("disabled","disabled");
        document.getElementById("ta3").setAttribute("disabled","disabled");
        document.getElementById("ta4").setAttribute("disabled","disabled");
        document.getElementById("ta5").setAttribute("disabled","disabled");
        document.getElementById("ta6").setAttribute("disabled","disabled");
        document.getElementById("ta7").setAttribute("disabled","disabled");
        document.getElementById("ta8").setAttribute("disabled","disabled");
        document.getElementById("ta9").setAttribute("disabled","disabled");
        document.getElementById("ta10").setAttribute("disabled","disabled");
        document.getElementById("ta11").setAttribute("disabled","disabled");
        document.getElementById("ta12").setAttribute("disabled","disabled");
        document.getElementById("ta13").setAttribute("disabled","disabled");
        document.getElementById("ta14").setAttribute("disabled","disabled");
        document.getElementById("ta15").setAttribute("disabled","disabled");
        document.getElementById("ta16").setAttribute("disabled","disabled");
        document.getElementById("ta17").setAttribute("disabled","disabled");
        document.getElementById("ta18").setAttribute("disabled","disabled");
        document.getElementById("ta19").setAttribute("disabled","disabled");
        document.getElementById("ta20").setAttribute("disabled","disabled");
        document.getElementById("ta21").setAttribute("disabled","disabled");
        document.getElementById("ta22").setAttribute("disabled","disabled");
        document.getElementById("ta23").setAttribute("disabled","disabled");
        document.getElementById("ta24").setAttribute("disabled","disabled");
        document.getElementById("ta25").setAttribute("disabled","disabled");
        document.getElementById("ta26").setAttribute("disabled","disabled");
        document.getElementById("ta27").setAttribute("disabled","disabled");
        document.getElementById("ta28").setAttribute("disabled","disabled");
        document.getElementById("ta29").setAttribute("disabled","disabled");
        document.getElementById("ta30").setAttribute("disabled","disabled");
        document.getElementById("ta31").setAttribute("disabled","disabled");
        document.getElementById("ta32").setAttribute("disabled","disabled");
        document.getElementById("ta33").setAttribute("disabled","disabled");
        document.getElementById("ta34").setAttribute("disabled","disabled");
        document.getElementById("ta35").setAttribute("disabled","disabled");
        document.getElementById("ta36").setAttribute("disabled","disabled");
        document.getElementById("ta37").setAttribute("disabled","disabled");
        document.getElementById("ta38").setAttribute("disabled","disabled");
        document.getElementById("ta39").setAttribute("disabled","disabled");
        document.getElementById("ta40").setAttribute("disabled","disabled");
        document.getElementById("ta41").setAttribute("disabled","disabled");
        document.getElementById("ta42").setAttribute("disabled","disabled");
        document.getElementById("ta43").setAttribute("disabled","disabled");
        document.getElementById("ta44").setAttribute("disabled","disabled");
        document.getElementById("ta45").setAttribute("disabled","disabled");
        document.getElementById("ta46").setAttribute("disabled","disabled");
        document.getElementById("ta47").setAttribute("disabled","disabled");
        document.getElementById("ta48").setAttribute("disabled","disabled");
        document.getElementById("ta49").setAttribute("disabled","disabled");
        document.getElementById("ta50").setAttribute("disabled","disabled");



        document.getElementById("table1").style.opacity = 0.7;
    }
    
    
    

}
function sey2(){
    var timeout2 =  document.getElementById("t24");
    if(timeout2.value == ""){
        alert("please complete the fill up");
    }
    else{
        document.getElementById("b2").innerHTML = '<img class="pic" src="desktop-computer.png" alt="image" ><br><h6 class="f">Laboratory 2</h6>';

        document.getElementById("s21").setAttribute("disabled","disabled");
        
        document.getElementById("t24").setAttribute("disabled","disabled");
        document.getElementById("to2").style.opacity = 0.1;
        document.getElementById("t21").value ='';
        document.getElementById("t22").value ='';
        document.getElementById("t23").value ='';
        document.getElementById("t24").value ='';
/////////////////////////////////////////////////////////////////////////////////////////////////*default return*//////////////////////////////////////////////////////////////////////////////////
        document.getElementById("tb1").value ='default'
        document.getElementById("tb2").value ='default'
        document.getElementById("tb3").value ='default'
        document.getElementById("tb4").value ='default'
        document.getElementById("tb5").value ='default'
        document.getElementById("tb6").value ='default'
        document.getElementById("tb7").value ='default'
        document.getElementById("tb8").value ='default'
        document.getElementById("tb9").value ='default'
        document.getElementById("tb10").value ='default'
        document.getElementById("tb11").value ='default'
        document.getElementById("tb12").value ='default'
        document.getElementById("tb13").value ='default'
        document.getElementById("tb14").value ='default'
        document.getElementById("tb15").value ='default'
        document.getElementById("tb16").value ='default'
        document.getElementById("tb17").value ='default'
        document.getElementById("tb18").value ='default'
        document.getElementById("tb19").value ='default'
        document.getElementById("tb20").value ='default'
        document.getElementById("tb21").value ='default'
        document.getElementById("tb22").value ='default'
        document.getElementById("tb23").value ='default'
        document.getElementById("tb24").value ='default'
        document.getElementById("tb25").value ='default'
        document.getElementById("tb26").value ='default'
        document.getElementById("tb27").value ='default'
        document.getElementById("tb28").value ='default'
        document.getElementById("tb29").value ='default'
        document.getElementById("tb30").value ='default'
        document.getElementById("tb31").value ='default'
        document.getElementById("tb32").value ='default'
        document.getElementById("tb33").value ='default'
        document.getElementById("tb34").value ='default'
        document.getElementById("tb35").value ='default'
        document.getElementById("tb36").value ='default'
        document.getElementById("tb37").value ='default'
        document.getElementById("tb38").value ='default'
        document.getElementById("tb39").value ='default'
        document.getElementById("tb40").value ='default'
        document.getElementById("tb41").value ='default'
        document.getElementById("tb42").value ='default'
        document.getElementById("tb43").value ='default'
        document.getElementById("tb44").value ='default'
        document.getElementById("tb45").value ='default'
        document.getElementById("tb46").value ='default'
        document.getElementById("tb47").value ='default'
        document.getElementById("tb48").value ='default'
        document.getElementById("tb49").value ='default'
        document.getElementById("tb50").value ='default'


        /////////////////////////////////////////////////////////////////////////////////////////////////*disabling*//////////////////////////////////////////////////////////////////////////////////

        document.getElementById("tb1").setAttribute("disabled","disabled");
        document.getElementById("tb2").setAttribute("disabled","disabled");
        document.getElementById("tb3").setAttribute("disabled","disabled");
        document.getElementById("tb4").setAttribute("disabled","disabled");
        document.getElementById("tb5").setAttribute("disabled","disabled");
        document.getElementById("tb6").setAttribute("disabled","disabled");
        document.getElementById("tb7").setAttribute("disabled","disabled");
        document.getElementById("tb8").setAttribute("disabled","disabled");
        document.getElementById("tb9").setAttribute("disabled","disabled");
        document.getElementById("tb10").setAttribute("disabled","disabled");
        document.getElementById("tb11").setAttribute("disabled","disabled");
        document.getElementById("tb12").setAttribute("disabled","disabled");
        document.getElementById("tb13").setAttribute("disabled","disabled");
        document.getElementById("tb14").setAttribute("disabled","disabled");
        document.getElementById("tb15").setAttribute("disabled","disabled");
        document.getElementById("tb16").setAttribute("disabled","disabled");
        document.getElementById("tb17").setAttribute("disabled","disabled");
        document.getElementById("tb18").setAttribute("disabled","disabled");
        document.getElementById("tb19").setAttribute("disabled","disabled");
        document.getElementById("tb20").setAttribute("disabled","disabled");
        document.getElementById("tb21").setAttribute("disabled","disabled");
        document.getElementById("tb22").setAttribute("disabled","disabled");
        document.getElementById("tb23").setAttribute("disabled","disabled");
        document.getElementById("tb24").setAttribute("disabled","disabled");
        document.getElementById("tb25").setAttribute("disabled","disabled");
        document.getElementById("tb26").setAttribute("disabled","disabled");
        document.getElementById("tb27").setAttribute("disabled","disabled");
        document.getElementById("tb28").setAttribute("disabled","disabled");
        document.getElementById("tb29").setAttribute("disabled","disabled");
        document.getElementById("tb30").setAttribute("disabled","disabled");
        document.getElementById("tb31").setAttribute("disabled","disabled");
        document.getElementById("tb32").setAttribute("disabled","disabled");
        document.getElementById("tb33").setAttribute("disabled","disabled");
        document.getElementById("tb34").setAttribute("disabled","disabled");
        document.getElementById("tb35").setAttribute("disabled","disabled");
        document.getElementById("tb36").setAttribute("disabled","disabled");
        document.getElementById("tb37").setAttribute("disabled","disabled");
        document.getElementById("tb38").setAttribute("disabled","disabled");
        document.getElementById("tb39").setAttribute("disabled","disabled");
        document.getElementById("tb40").setAttribute("disabled","disabled");
        document.getElementById("tb41").setAttribute("disabled","disabled");
        document.getElementById("tb42").setAttribute("disabled","disabled");
        document.getElementById("tb43").setAttribute("disabled","disabled");
        document.getElementById("tb44").setAttribute("disabled","disabled");
        document.getElementById("tb45").setAttribute("disabled","disabled");
        document.getElementById("tb46").setAttribute("disabled","disabled");
        document.getElementById("tb47").setAttribute("disabled","disabled");
        document.getElementById("tb48").setAttribute("disabled","disabled");
        document.getElementById("tb49").setAttribute("disabled","disabled");
        document.getElementById("tb50").setAttribute("disabled","disabled");

        document.getElementById("table2").style.opacity = 0.7;
    }

}
function sey3(){
    var timeout3 =  document.getElementById("t34");
    if(timeout3.value == ""){
        alert("please complete the fill up");
    }
    else{
        document.getElementById("b3").innerHTML = '<img class="pic" src="desktop-computer.png" alt="image" ><br><h6 class="f">Laboratory 3</h6>';

        document.getElementById("s31").setAttribute("disabled","disabled");
        
        document.getElementById("t34").setAttribute("disabled","disabled");
        document.getElementById("to3").style.opacity = 0.1;
        document.getElementById("t31").value ='';
        document.getElementById("t32").value ='';
        document.getElementById("t33").value ='';
        document.getElementById("t34").value ='';


/////////////////////////////////////////////////////////////////////////////////////////////////*default return*//////////////////////////////////////////////////////////////////////////////////


        document.getElementById("tc1").value ='default'
        document.getElementById("tc2").value ='default'
        document.getElementById("tc3").value ='default'
        document.getElementById("tc4").value ='default'
        document.getElementById("tc5").value ='default'
        document.getElementById("tc6").value ='default'
        document.getElementById("tc7").value ='default'
        document.getElementById("tc8").value ='default'
        document.getElementById("tc9").value ='default'
        document.getElementById("tc10").value ='default'
        document.getElementById("tc11").value ='default'
        document.getElementById("tc12").value ='default'
        document.getElementById("tc13").value ='default'
        document.getElementById("tc14").value ='default'
        document.getElementById("tc15").value ='default'
        document.getElementById("tc16").value ='default'
        document.getElementById("tc17").value ='default'
        document.getElementById("tc18").value ='default'
        document.getElementById("tc19").value ='default'
        document.getElementById("tc20").value ='default'
        document.getElementById("tc21").value ='default'
        document.getElementById("tc22").value ='default'
        document.getElementById("tc23").value ='default'
        document.getElementById("tc24").value ='default'
        document.getElementById("tc25").value ='default'
        document.getElementById("tc26").value ='default'
        document.getElementById("tc27").value ='default'
        document.getElementById("tc28").value ='default'
        document.getElementById("tc29").value ='default'
        document.getElementById("tc30").value ='default'
        document.getElementById("tc31").value ='default'
        document.getElementById("tc32").value ='default'
        document.getElementById("tc33").value ='default'
        document.getElementById("tc34").value ='default'
        document.getElementById("tc35").value ='default'
        document.getElementById("tc36").value ='default'
        document.getElementById("tc37").value ='default'
        document.getElementById("tc38").value ='default'
        document.getElementById("tc39").value ='default'
        document.getElementById("tc40").value ='default'
        document.getElementById("tc41").value ='default'
        document.getElementById("tc42").value ='default'
        document.getElementById("tc43").value ='default'
        document.getElementById("tc44").value ='default'
        document.getElementById("tc45").value ='default'
        document.getElementById("tc46").value ='default'
        document.getElementById("tc47").value ='default'
        document.getElementById("tc48").value ='default'
        document.getElementById("tc49").value ='default'
        document.getElementById("tc50").value ='default'

/////////////////////////////////////////////////////////////////////////////////////////////////*disabling*//////////////////////////////////////////////////////////////////////////////////

        document.getElementById("tc1").setAttribute("disabled","disabled");
        document.getElementById("tc2").setAttribute("disabled","disabled");
        document.getElementById("tc3").setAttribute("disabled","disabled");
        document.getElementById("tc4").setAttribute("disabled","disabled");
        document.getElementById("tc5").setAttribute("disabled","disabled");
        document.getElementById("tc6").setAttribute("disabled","disabled");
        document.getElementById("tc7").setAttribute("disabled","disabled");
        document.getElementById("tc8").setAttribute("disabled","disabled");
        document.getElementById("tc9").setAttribute("disabled","disabled");
        document.getElementById("tc10").setAttribute("disabled","disabled");
        document.getElementById("tc11").setAttribute("disabled","disabled");
        document.getElementById("tc12").setAttribute("disabled","disabled");
        document.getElementById("tc13").setAttribute("disabled","disabled");
        document.getElementById("tc14").setAttribute("disabled","disabled");
        document.getElementById("tc15").setAttribute("disabled","disabled");
        document.getElementById("tc16").setAttribute("disabled","disabled");
        document.getElementById("tc17").setAttribute("disabled","disabled");
        document.getElementById("tc18").setAttribute("disabled","disabled");
        document.getElementById("tc19").setAttribute("disabled","disabled");
        document.getElementById("tc20").setAttribute("disabled","disabled");
        document.getElementById("tc21").setAttribute("disabled","disabled");
        document.getElementById("tc22").setAttribute("disabled","disabled");
        document.getElementById("tc23").setAttribute("disabled","disabled");
        document.getElementById("tc24").setAttribute("disabled","disabled");
        document.getElementById("tc25").setAttribute("disabled","disabled");
        document.getElementById("tc26").setAttribute("disabled","disabled");
        document.getElementById("tc27").setAttribute("disabled","disabled");
        document.getElementById("tc28").setAttribute("disabled","disabled");
        document.getElementById("tc29").setAttribute("disabled","disabled");
        document.getElementById("tc30").setAttribute("disabled","disabled");
        document.getElementById("tc31").setAttribute("disabled","disabled");
        document.getElementById("tc32").setAttribute("disabled","disabled");
        document.getElementById("tc33").setAttribute("disabled","disabled");
        document.getElementById("tc34").setAttribute("disabled","disabled");
        document.getElementById("tc35").setAttribute("disabled","disabled");
        document.getElementById("tc36").setAttribute("disabled","disabled");
        document.getElementById("tc37").setAttribute("disabled","disabled");
        document.getElementById("tc38").setAttribute("disabled","disabled");
        document.getElementById("tc39").setAttribute("disabled","disabled");
        document.getElementById("tc40").setAttribute("disabled","disabled");
        document.getElementById("tc41").setAttribute("disabled","disabled");
        document.getElementById("tc42").setAttribute("disabled","disabled");
        document.getElementById("tc43").setAttribute("disabled","disabled");
        document.getElementById("tc44").setAttribute("disabled","disabled");
        document.getElementById("tc45").setAttribute("disabled","disabled");
        document.getElementById("tc46").setAttribute("disabled","disabled");
        document.getElementById("tc47").setAttribute("disabled","disabled");
        document.getElementById("tc48").setAttribute("disabled","disabled");
        document.getElementById("tc49").setAttribute("disabled","disabled");
        document.getElementById("tc50").setAttribute("disabled","disabled");

        document.getElementById("table3").style.opacity = 0.7;
    }

}
function sey4(){
    var timeout4 =  document.getElementById("t44");
    if(timeout4.value == ""){
        alert("please complete the fill up");
    }
    else{
        document.getElementById("b4").innerHTML = '<img class="pic" src="desktop-computer.png" alt="image" ><br><h6 class="f">Laboratory 4</h6>';

        
        document.getElementById("s41").setAttribute("disabled","disabled");
        
        document.getElementById("t44").setAttribute("disabled","disabled");
        document.getElementById("to4").style.opacity = 0.1;
        document.getElementById("t41").value ='';
        document.getElementById("t42").value ='';
        document.getElementById("t43").value ='';
        document.getElementById("t44").value ='';
/////////////////////////////////////////////////////////////////////////////////////////////////*default return*//////////////////////////////////////////////////////////////////////////////////
        document.getElementById("td1").value ='default'
        document.getElementById("td2").value ='default'
        document.getElementById("td3").value ='default'
        document.getElementById("td4").value ='default'
        document.getElementById("td5").value ='default'
        document.getElementById("td6").value ='default'
        document.getElementById("td7").value ='default'
        document.getElementById("td8").value ='default'
        document.getElementById("td9").value ='default'
        document.getElementById("td10").value ='default'
        document.getElementById("td11").value ='default'
        document.getElementById("td12").value ='default'
        document.getElementById("td13").value ='default'
        document.getElementById("td14").value ='default'
        document.getElementById("td15").value ='default'
        document.getElementById("td16").value ='default'
        document.getElementById("td17").value ='default'
        document.getElementById("td18").value ='default'
        document.getElementById("td19").value ='default'
        document.getElementById("td20").value ='default'
        document.getElementById("td21").value ='default'
        document.getElementById("td22").value ='default'
        document.getElementById("td23").value ='default'
        document.getElementById("td24").value ='default'
        document.getElementById("td25").value ='default'
        document.getElementById("td26").value ='default'
        document.getElementById("td27").value ='default'
        document.getElementById("td28").value ='default'
        document.getElementById("td29").value ='default'
        document.getElementById("td30").value ='default'
        document.getElementById("td31").value ='default'
        document.getElementById("td32").value ='default'
        document.getElementById("td33").value ='default'
        document.getElementById("td34").value ='default'
        document.getElementById("td35").value ='default'
        document.getElementById("td36").value ='default'
        document.getElementById("td37").value ='default'
        document.getElementById("td38").value ='default'
        document.getElementById("td39").value ='default'
        document.getElementById("td40").value ='default'
        document.getElementById("td41").value ='default'
        document.getElementById("td42").value ='default'
        document.getElementById("td43").value ='default'
        document.getElementById("td44").value ='default'
        document.getElementById("td45").value ='default'
        document.getElementById("td46").value ='default'
        document.getElementById("td47").value ='default'
        document.getElementById("td48").value ='default'
        document.getElementById("td49").value ='default'
        document.getElementById("td50").value ='default'

/////////////////////////////////////////////////////////////////////////////////////////////////*disabling*//////////////////////////////////////////////////////////////////////////////////

        document.getElementById("td1").setAttribute("disabled","disabled");
        document.getElementById("td2").setAttribute("disabled","disabled");
        document.getElementById("td3").setAttribute("disabled","disabled");
        document.getElementById("td4").setAttribute("disabled","disabled");
        document.getElementById("td5").setAttribute("disabled","disabled");
        document.getElementById("td6").setAttribute("disabled","disabled");
        document.getElementById("td7").setAttribute("disabled","disabled");
        document.getElementById("td8").setAttribute("disabled","disabled");
        document.getElementById("td9").setAttribute("disabled","disabled");
        document.getElementById("td10").setAttribute("disabled","disabled");
        document.getElementById("td11").setAttribute("disabled","disabled");
        document.getElementById("td12").setAttribute("disabled","disabled");
        document.getElementById("td13").setAttribute("disabled","disabled");
        document.getElementById("td14").setAttribute("disabled","disabled");
        document.getElementById("td15").setAttribute("disabled","disabled");
        document.getElementById("td16").setAttribute("disabled","disabled");
        document.getElementById("td17").setAttribute("disabled","disabled");
        document.getElementById("td18").setAttribute("disabled","disabled");
        document.getElementById("td19").setAttribute("disabled","disabled");
        document.getElementById("td20").setAttribute("disabled","disabled");
        document.getElementById("td21").setAttribute("disabled","disabled");
        document.getElementById("td22").setAttribute("disabled","disabled");
        document.getElementById("td23").setAttribute("disabled","disabled");
        document.getElementById("td24").setAttribute("disabled","disabled");
        document.getElementById("td25").setAttribute("disabled","disabled");
        document.getElementById("td26").setAttribute("disabled","disabled");
        document.getElementById("td27").setAttribute("disabled","disabled");
        document.getElementById("td28").setAttribute("disabled","disabled");
        document.getElementById("td29").setAttribute("disabled","disabled");
        document.getElementById("td30").setAttribute("disabled","disabled");
        document.getElementById("td31").setAttribute("disabled","disabled");
        document.getElementById("td32").setAttribute("disabled","disabled");
        document.getElementById("td33").setAttribute("disabled","disabled");
        document.getElementById("td34").setAttribute("disabled","disabled");
        document.getElementById("td35").setAttribute("disabled","disabled");
        document.getElementById("td36").setAttribute("disabled","disabled");
        document.getElementById("td37").setAttribute("disabled","disabled");
        document.getElementById("td38").setAttribute("disabled","disabled");
        document.getElementById("td39").setAttribute("disabled","disabled");
        document.getElementById("td40").setAttribute("disabled","disabled");
        document.getElementById("td41").setAttribute("disabled","disabled");
        document.getElementById("td42").setAttribute("disabled","disabled");
        document.getElementById("td43").setAttribute("disabled","disabled");
        document.getElementById("td44").setAttribute("disabled","disabled");
        document.getElementById("td45").setAttribute("disabled","disabled");
        document.getElementById("td46").setAttribute("disabled","disabled");
        document.getElementById("td47").setAttribute("disabled","disabled");
        document.getElementById("td48").setAttribute("disabled","disabled");
        document.getElementById("td49").setAttribute("disabled","disabled");
        document.getElementById("td50").setAttribute("disabled","disabled");

        document.getElementById("table4").style.opacity = 0.7;
    }

}




/********************************************************************enabling button in disable function *************************************************************************************************************/



function disable1()
{   
    document.getElementById("s12").removeAttribute("disabled");
    document.getElementById("s13").removeAttribute("disabled");


    document.getElementById("ta1").removeAttribute("disabled");
    document.getElementById("ta2").removeAttribute("disabled");
    document.getElementById("ta3").removeAttribute("disabled");
    document.getElementById("ta4").removeAttribute("disabled");
    document.getElementById("ta5").removeAttribute("disabled");
    document.getElementById("ta6").removeAttribute("disabled");
    document.getElementById("ta7").removeAttribute("disabled");
    document.getElementById("ta8").removeAttribute("disabled");
    document.getElementById("ta9").removeAttribute("disabled");
    document.getElementById("ta10").removeAttribute("disabled");
    document.getElementById("ta11").removeAttribute("disabled");
    document.getElementById("ta12").removeAttribute("disabled");
    document.getElementById("ta13").removeAttribute("disabled");
    document.getElementById("ta14").removeAttribute("disabled");
    document.getElementById("ta15").removeAttribute("disabled");
    document.getElementById("ta16").removeAttribute("disabled");
    document.getElementById("ta17").removeAttribute("disabled");
    document.getElementById("ta18").removeAttribute("disabled");
    document.getElementById("ta19").removeAttribute("disabled");
    document.getElementById("ta20").removeAttribute("disabled");
    document.getElementById("ta21").removeAttribute("disabled");
    document.getElementById("ta22").removeAttribute("disabled");
    document.getElementById("ta23").removeAttribute("disabled");
    document.getElementById("ta24").removeAttribute("disabled");
    document.getElementById("ta25").removeAttribute("disabled");
    document.getElementById("ta26").removeAttribute("disabled");
    document.getElementById("ta27").removeAttribute("disabled");
    document.getElementById("ta28").removeAttribute("disabled");
    document.getElementById("ta29").removeAttribute("disabled");
    document.getElementById("ta30").removeAttribute("disabled");
    document.getElementById("ta31").removeAttribute("disabled");
    document.getElementById("ta32").removeAttribute("disabled");
    document.getElementById("ta33").removeAttribute("disabled");
    document.getElementById("ta34").removeAttribute("disabled");
    document.getElementById("ta35").removeAttribute("disabled");
    document.getElementById("ta36").removeAttribute("disabled");
    document.getElementById("ta37").removeAttribute("disabled");
    document.getElementById("ta38").removeAttribute("disabled");
    document.getElementById("ta39").removeAttribute("disabled");
    document.getElementById("ta40").removeAttribute("disabled");
    document.getElementById("ta41").removeAttribute("disabled");
    document.getElementById("ta42").removeAttribute("disabled");
    document.getElementById("ta43").removeAttribute("disabled");
    document.getElementById("ta44").removeAttribute("disabled");
    document.getElementById("ta45").removeAttribute("disabled");
    document.getElementById("ta46").removeAttribute("disabled");
    document.getElementById("ta47").removeAttribute("disabled");
    document.getElementById("ta48").removeAttribute("disabled");
    document.getElementById("ta49").removeAttribute("disabled");
    document.getElementById("ta50").removeAttribute("disabled");
    

    
    document.getElementById("table1").style.opacity = 1;

}

function disable2()
{   
    document.getElementById("s22").removeAttribute("disabled");
    document.getElementById("s23").removeAttribute("disabled");


    document.getElementById("tb1").removeAttribute("disabled");
    document.getElementById("tb2").removeAttribute("disabled");
    document.getElementById("tb3").removeAttribute("disabled");
    document.getElementById("tb4").removeAttribute("disabled");
    document.getElementById("tb5").removeAttribute("disabled");
    document.getElementById("tb6").removeAttribute("disabled");
    document.getElementById("tb7").removeAttribute("disabled");
    document.getElementById("tb8").removeAttribute("disabled");
    document.getElementById("tb9").removeAttribute("disabled");
    document.getElementById("tb10").removeAttribute("disabled");
    document.getElementById("tb11").removeAttribute("disabled");
    document.getElementById("tb12").removeAttribute("disabled");
    document.getElementById("tb13").removeAttribute("disabled");
    document.getElementById("tb14").removeAttribute("disabled");
    document.getElementById("tb15").removeAttribute("disabled");
    document.getElementById("tb16").removeAttribute("disabled");
    document.getElementById("tb17").removeAttribute("disabled");
    document.getElementById("tb18").removeAttribute("disabled");
    document.getElementById("tb19").removeAttribute("disabled");
    document.getElementById("tb20").removeAttribute("disabled");
    document.getElementById("tb21").removeAttribute("disabled");
    document.getElementById("tb22").removeAttribute("disabled");
    document.getElementById("tb23").removeAttribute("disabled");
    document.getElementById("tb24").removeAttribute("disabled");
    document.getElementById("tb25").removeAttribute("disabled");
    document.getElementById("tb26").removeAttribute("disabled");
    document.getElementById("tb27").removeAttribute("disabled");
    document.getElementById("tb28").removeAttribute("disabled");
    document.getElementById("tb29").removeAttribute("disabled");
    document.getElementById("tb30").removeAttribute("disabled");
    document.getElementById("tb31").removeAttribute("disabled");
    document.getElementById("tb32").removeAttribute("disabled");
    document.getElementById("tb33").removeAttribute("disabled");
    document.getElementById("tb34").removeAttribute("disabled");
    document.getElementById("tb35").removeAttribute("disabled");
    document.getElementById("tb36").removeAttribute("disabled");
    document.getElementById("tb37").removeAttribute("disabled");
    document.getElementById("tb38").removeAttribute("disabled");
    document.getElementById("tb39").removeAttribute("disabled");
    document.getElementById("tb40").removeAttribute("disabled");
    document.getElementById("tb41").removeAttribute("disabled");
    document.getElementById("tb42").removeAttribute("disabled");
    document.getElementById("tb43").removeAttribute("disabled");
    document.getElementById("tb44").removeAttribute("disabled");
    document.getElementById("tb45").removeAttribute("disabled");
    document.getElementById("tb46").removeAttribute("disabled");
    document.getElementById("tb47").removeAttribute("disabled");
    document.getElementById("tb48").removeAttribute("disabled");
    document.getElementById("tb49").removeAttribute("disabled");
    document.getElementById("tb50").removeAttribute("disabled");
    

    
    document.getElementById("table2").style.opacity = 1;

}
function disable3()
{   
    document.getElementById("s32").removeAttribute("disabled");
    document.getElementById("s33").removeAttribute("disabled");

    document.getElementById("tc1").removeAttribute("disabled");
    document.getElementById("tc2").removeAttribute("disabled");
    document.getElementById("tc3").removeAttribute("disabled");
    document.getElementById("tc4").removeAttribute("disabled");
    document.getElementById("tc5").removeAttribute("disabled");
    document.getElementById("tc6").removeAttribute("disabled");
    document.getElementById("tc7").removeAttribute("disabled");
    document.getElementById("tc8").removeAttribute("disabled");
    document.getElementById("tc9").removeAttribute("disabled");
    document.getElementById("tc10").removeAttribute("disabled");
    document.getElementById("tc11").removeAttribute("disabled");
    document.getElementById("tc12").removeAttribute("disabled");
    document.getElementById("tc13").removeAttribute("disabled");
    document.getElementById("tc14").removeAttribute("disabled");
    document.getElementById("tc15").removeAttribute("disabled");
    document.getElementById("tc16").removeAttribute("disabled");
    document.getElementById("tc17").removeAttribute("disabled");
    document.getElementById("tc18").removeAttribute("disabled");
    document.getElementById("tc19").removeAttribute("disabled");
    document.getElementById("tc20").removeAttribute("disabled");
    document.getElementById("tc21").removeAttribute("disabled");
    document.getElementById("tc22").removeAttribute("disabled");
    document.getElementById("tc23").removeAttribute("disabled");
    document.getElementById("tc24").removeAttribute("disabled");
    document.getElementById("tc25").removeAttribute("disabled");
    document.getElementById("tc26").removeAttribute("disabled");
    document.getElementById("tc27").removeAttribute("disabled");
    document.getElementById("tc28").removeAttribute("disabled");
    document.getElementById("tc29").removeAttribute("disabled");
    document.getElementById("tc30").removeAttribute("disabled");
    document.getElementById("tc31").removeAttribute("disabled");
    document.getElementById("tc32").removeAttribute("disabled");
    document.getElementById("tc33").removeAttribute("disabled");
    document.getElementById("tc34").removeAttribute("disabled");
    document.getElementById("tc35").removeAttribute("disabled");
    document.getElementById("tc36").removeAttribute("disabled");
    document.getElementById("tc37").removeAttribute("disabled");
    document.getElementById("tc38").removeAttribute("disabled");
    document.getElementById("tc39").removeAttribute("disabled");
    document.getElementById("tc40").removeAttribute("disabled");
    document.getElementById("tc41").removeAttribute("disabled");
    document.getElementById("tc42").removeAttribute("disabled");
    document.getElementById("tc43").removeAttribute("disabled");
    document.getElementById("tc44").removeAttribute("disabled");
    document.getElementById("tc45").removeAttribute("disabled");
    document.getElementById("tc46").removeAttribute("disabled");
    document.getElementById("tc47").removeAttribute("disabled");
    document.getElementById("tc48").removeAttribute("disabled");
    document.getElementById("tc49").removeAttribute("disabled");
    document.getElementById("tc50").removeAttribute("disabled");
    

    
    document.getElementById("table3").style.opacity = 1;

}



function disable4()
{   
    document.getElementById("s42").removeAttribute("disabled");
    document.getElementById("s43").removeAttribute("disabled");

    document.getElementById("td1").removeAttribute("disabled");
    document.getElementById("td2").removeAttribute("disabled");
    document.getElementById("td3").removeAttribute("disabled");
    document.getElementById("td4").removeAttribute("disabled");
    document.getElementById("td5").removeAttribute("disabled");
    document.getElementById("td6").removeAttribute("disabled");
    document.getElementById("td7").removeAttribute("disabled");
    document.getElementById("td8").removeAttribute("disabled");
    document.getElementById("td9").removeAttribute("disabled");
    document.getElementById("td10").removeAttribute("disabled");
    document.getElementById("td11").removeAttribute("disabled");
    document.getElementById("td12").removeAttribute("disabled");
    document.getElementById("td13").removeAttribute("disabled");
    document.getElementById("td14").removeAttribute("disabled");
    document.getElementById("td15").removeAttribute("disabled");
    document.getElementById("td16").removeAttribute("disabled");
    document.getElementById("td17").removeAttribute("disabled");
    document.getElementById("td18").removeAttribute("disabled");
    document.getElementById("td19").removeAttribute("disabled");
    document.getElementById("td20").removeAttribute("disabled");
    document.getElementById("td21").removeAttribute("disabled");
    document.getElementById("td22").removeAttribute("disabled");
    document.getElementById("td23").removeAttribute("disabled");
    document.getElementById("td24").removeAttribute("disabled");
    document.getElementById("td25").removeAttribute("disabled");
    document.getElementById("td26").removeAttribute("disabled");
    document.getElementById("td27").removeAttribute("disabled");
    document.getElementById("td28").removeAttribute("disabled");
    document.getElementById("td29").removeAttribute("disabled");
    document.getElementById("td30").removeAttribute("disabled");
    document.getElementById("td31").removeAttribute("disabled");
    document.getElementById("td32").removeAttribute("disabled");
    document.getElementById("td33").removeAttribute("disabled");
    document.getElementById("td34").removeAttribute("disabled");
    document.getElementById("td35").removeAttribute("disabled");
    document.getElementById("td36").removeAttribute("disabled");
    document.getElementById("td37").removeAttribute("disabled");
    document.getElementById("td38").removeAttribute("disabled");
    document.getElementById("td39").removeAttribute("disabled");
    document.getElementById("td40").removeAttribute("disabled");
    document.getElementById("td41").removeAttribute("disabled");
    document.getElementById("td42").removeAttribute("disabled");
    document.getElementById("td43").removeAttribute("disabled");
    document.getElementById("td44").removeAttribute("disabled");
    document.getElementById("td45").removeAttribute("disabled");
    document.getElementById("td46").removeAttribute("disabled");
    document.getElementById("td47").removeAttribute("disabled");
    document.getElementById("td48").removeAttribute("disabled");
    document.getElementById("td49").removeAttribute("disabled");
    document.getElementById("td50").removeAttribute("disabled");
    

    
    document.getElementById("table4").style.opacity = 1;

}

                                          