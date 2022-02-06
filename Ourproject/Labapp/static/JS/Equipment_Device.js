$(document).ready(function(){
  const setup = [];
      
      var setup1 = parseInt(document.getElementById("numl1").value);
      var tb1 = document.getElementById("tbl_lab1");
      if (setup1 > 0){
          $("#table1").show();
          $("#slct1").click(function(){
              var r1 = $('#tbl_lab1 input:checkbox').length;
              for (var i=0; i<r1; i++){
                  $('#tbl_lab1 input:checkbox')[i].checked = true;
                  }
          })
      }
      else {
          var opts = document.getElementById("options");
          document.getElementsByClassName("btn")[8].click();
          $("#table1").hide();
          alert("Please setup first to start.");
          document.getElementById("numl1").addEventListener("keyup", e => {
              if (e.target.value == "") {
                  document.getElementById("m1").disabled = true;
              }
              else {
                  document.getElementById("m1").disabled = false;
              }
              
          });
          $("#s1").click(function(){
              var r1 = $('#tbl_lab1 tr').length;
              alert(r1-2);
          })
          
      
          $("#m1").click(function(){
  
              ///var parent = document.getElementById("tbl_lab1");
              ///var child = document.getElementById("tbody1");
              ///parent.removeChild(child);
              for(i=2; i<=$('#numl1').val(); i++){
                  $('#row_data1').clone(true).appendTo($('#tbody1'),('tbody'));
                  $("#table1").show();
                  }
                  $("#slct1").click(function(){
                      var r1 = $('#tbl_lab1 input:checkbox').length;
                      for (var i=0; i<r1; i++){
                          $('#tbl_lab1 input:checkbox')[i].checked = true;
                          }
                  })
          })
          
      document.getElementById("h1").disabled = true;
      }
  
      $("#h1").click(function(){
          var setup1 = parseInt(document.getElementById("numl1").value);
          if (setup1 > 0){
              $("#table1").show();
              $("#slct1").click(function(){
                  var r1 = $('#tbl_lab1 input:checkbox').length;
                  for (var i=0; i<r1; i++){
                      $('#tbl_lab1 input:checkbox')[i].checked = true;
                      }
              })
          }
          else {
              $("#table1").hide();
              alert("Please setup first to start.")
              document.getElementsByClassName("btn")[8].click();
                      $("#m1").click(function(){
              for(i=1; i<=$('#numl1').val(); i++){
                  $('#row_data1').clone(true).appendTo($('#tbody1'),('tbody'));
                  $("#table1").show();
                  $("#slct1").click(function(){
                      var r1 = $('#tbl_lab1 input:checkbox').length;
                      for (var i=0; i<r1; i++){
                          $('#tbl_lab1 input:checkbox')[i].checked = true;
                          }
                  })
                  }
  
  
          })
              
          }
          $("#edata1").show();
          $("#edata2").hide();
          $("#edata3").hide();
          $("#edata4").hide();
  
          document.getElementById("h1").disabled = true;
          document.getElementById("h2").disabled = false;
          document.getElementById("h3").disabled = false;
          document.getElementById("h4").disabled = false;
          
      });
      $("#h2").click(function(){
          var setup2 = parseInt(document.getElementById("numl2").value);
          if (setup2 > 0){
              $("#table2").show();
              $("#slct2").click(function(){
                  var r1 = $('#tbl_lab2 input:checkbox').length;
                  for (var i=0; i<r1; i++){
                      $('#tbl_lab2 input:checkbox')[i].checked = true;
                      }
              })
          }
          else {
              $("#table2").hide();
              alert("Please setup first to start.")
              document.getElementsByClassName("btn")[10].click();
              document.getElementById("numl2").addEventListener("keyup", b => {
                  if (b.target.value == "") {
                      document.getElementById("m2").disabled = true;
                  }
                  else {
                      document.getElementById("m2").disabled = false;
                  }
                  
              });
                  
              $("#m2").click(function(){
      
                  ///var parent = document.getElementById("tbl_lab1");
                  ///var child = document.getElementById("tbody1");
                  ///parent.removeChild(child);
                  for(i=1; i<$('#numl2').val(); i++){
                      $('#row_data2').clone(true).appendTo($('#tbody2'),('tbody'));
                      $("#table2").show();
                      $("#slct2").click(function(){
                          var r1 = $('#tbl_lab2 input:checkbox').length;
                          for (var i=0; i<r1; i++){
                              $('#tbl_lab2 input:checkbox')[i].checked = true;
                              }
                      })
                  }
              })
          }
  
          $("#edata1").hide();
          $("#edata2").show();
          $("#edata3").hide();
          $("#edata4").hide();
  
          
          document.getElementById("h1").disabled = false;
          document.getElementById("h2").disabled = true;
          document.getElementById("h3").disabled = false;
          document.getElementById("h4").disabled = false;
  
      });
      $("#h3").click(function(){
          var setup3 = parseInt(document.getElementById("numl3").value);
          if (setup3 > 0){
              $("#table3").show();
              $("#slct3").click(function(){
                  var r1 = $('#tbl_lab3 input:checkbox').length;
                  for (var i=0; i<r1; i++){
                      $('#tbl_lab3 input:checkbox')[i].checked = true;
                      }
              })
          }
          else {
              $("#table3").hide();
              alert("Please setup first to start.")
              document.getElementsByClassName("btn")[12].click();
              document.getElementById("numl3").addEventListener("keyup", e => {
                  if (e.target.value == "") {
                      document.getElementById("m3").disabled = true;
                  }
                  else {
                      document.getElementById("m3").disabled = false;
                  }
                  
              });
                  
              $("#m3").click(function(){
      
                  ///var parent = document.getElementById("tbl_lab1");
                  ///var child = document.getElementById("tbody1");
                  ///parent.removeChild(child);
                  for(i=1; i<$('#numl3').val(); i++){
                      $('#row_data3').clone(true).appendTo($('#tbody3'),('tbody'));
                      $("#table3").show();
                      $("#slct3").click(function(){
                          var r1 = $('#tbl_lab3 input:checkbox').length;
                          for (var i=0; i<r1; i++){
                              $('#tbl_lab3 input:checkbox')[i].checked = true;
                              }
                      })
                      
                  }
      
      
              })
          }
          $("#edata1").hide();
          $("#edata2").hide();
          $("#edata3").show();
          $("#edata4").hide();
  
          document.getElementById("h1").disabled = false;
          document.getElementById("h2").disabled = false;
          document.getElementById("h3").disabled = true;
          document.getElementById("h4").disabled = false;
  
      });
      $("#h4").click(function(){
          var setup4 = parseInt(document.getElementById("numl4").value);
          if (setup4 > 0){
              $("#table4").show();
              $("#slct4").click(function(){
                  var r1 = $('#tbl_lab4 input:checkbox').length;
                  for (var i=0; i<r1; i++){
                      $('#tbl_lab4 input:checkbox')[i].checked = true;
                      }
              })
          }
          else {
              $("#table4").hide();
              alert("Please setup first to start.")
              document.getElementsByClassName("btn")[14].click();
              document.getElementById("numl4").addEventListener("keyup", a => {
                  if (a.target.value == "") {
                      document.getElementById("m4").disabled = true;
                  }
                  else {
                      document.getElementById("m4").disabled = false;
                  }
                  
              });
                  
              $("#m4").click(function(){
      
                  ///var parent = document.getElementById("tbl_lab1");
                  ///var child = document.getElementById("tbody1");
                  ///parent.removeChild(child);
                  for(i=1; i<$('#numl4').val(); i++){
                      $('#row_data4').clone(true).appendTo($('#tbody4'),('tbody'));
                      $("#table4").show();
                      $("#slct4").click(function(){
                          var r1 = $('#tbl_lab4 input:checkbox').length;
                          for (var i=0; i<r1; i++){
                              $('#tbl_lab4 input:checkbox')[i].checked = true;
                              }
                      })
      
                      }
                  })
          }
          $("#edata1").hide();
          $("#edata2").hide();
          $("#edata3").hide();
          $("#edata4").show();
  
          
          document.getElementById("h1").disabled = false;
          document.getElementById("h2").disabled = false;
          document.getElementById("h3").disabled = false;
          document.getElementById("h4").disabled = true;
  
      });
  })