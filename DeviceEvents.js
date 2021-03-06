var Btn1 = "My Device ID";
var Btn2 = "Model Number";
var Btn3 = "Heartbeat Age";
var Btn4 = "Status ID";
var Drop1 = "Product";
var Drop2 = "Serial Number";
var Drop3 = "Last Heartbeat";

$(document).ready(function(){
    setup();
  });
function check(phrase){
  if (phrase=="My Device ID"){
    return "device_id";
  }
  else if (phrase=="Model Number"){
    return "dev_model_num";
  }
  else if (phrase=="Last Heartbeat"){
    return "created";
  }
  else if (phrase=="Serial Number"){
    return "dev_serial_num";
  }
  else if (phrase=="Product"){
    return "product";
  }
  else if (phrase=="Heartbeat Age"){
    return "agent_uptime";
  }
  else if (phrase=="Status ID"){
    return "status_id";
  }
}
function setup(){
  var a = check(Drop1);
  var b = check(Drop2);
  var c = check(Drop3);
  $.getJSON("events.json", function(json) {
    var st;
    for (var i = 0; i < json["records"].length; i++) {
      st = (i+1).toString();
      var x = document.createElement("TR");
      x.setAttribute("id", "myTr" + st);
      document.getElementById("tbody1").appendChild(x);
      var y = document.createElement("TD");
      y.setAttribute("id", st+"_1");
      document.getElementById("myTr"+st).appendChild(y);
      document.getElementById(st+"_1").innerHTML= output(json["records"][i][a]);
      y = document.createElement("TD");
      y.setAttribute("id", st+"_2");
      document.getElementById("myTr"+st).appendChild(y);
      document.getElementById(st+"_2").innerHTML= output(json["records"][i][b]);
      y = document.createElement("TD");
      y.setAttribute("id", st+"_3");
      document.getElementById("myTr"+st).appendChild(y);
      document.getElementById(st+"_3").innerHTML= output(json["records"][i][c]);
    }
  });
}
function output(out){
  if (out){
    return out;
  }
  return "N/A";
}
function reset(num, Drop){
  var a = check(Drop);
  $.getJSON("events.json", function(json) {
    var st;
    for (var i = 0; i < json["records"].length; i++) {
      st = (i+1).toString() + "_" + (num).toString();
      document.getElementById(st).innerHTML= output(json["records"][i][a]);
    }
  });
}
function update(){
  document.getElementById("tbody1").innerHTML = "";
  setup();
}
//redraws the inputed row 'num' and puts all the data from the first button in the dropdown in that column
  function reDraw1(num){
    if (num==1){
      $(btn1_1).text(Drop1);
      $(btn2_1).text(Drop1);
      $(btn3_1).text(Drop1);
      $(drop1).text(Btn1);
      var temp = Drop1;
      Drop1=Btn1;
      Btn1= temp;
      reset(1, Drop1);
    }
    else if(num==2){
      $(btn1_1).text(Drop2);
      $(btn2_1).text(Drop2);
      $(btn3_1).text(Drop2);
      $(drop2).text(Btn1);
      var temp = Drop2;
      Drop2=Btn1;
      Btn1= temp;
      reset(2, Drop2);
    }
    else if(num==3){
      $(btn1_1).text(Drop3);
      $(btn2_1).text(Drop3);
      $(btn3_1).text(Drop3);
      $(drop3).text(Btn1);
      var temp = Drop3;
      Drop3=Btn1;
      Btn1= temp;
      reset(3, Drop3);
    }
  }
  //redraws the inputed row 'num' and puts all the data from the second button in the dropdown in that column
  function reDraw2(num){
    if (num==1){
      $(btn1_2).text(Drop1);
      $(btn2_2).text(Drop1);
      $(btn3_2).text(Drop1);
      $(drop1).text(Btn2);
      var temp = Drop1;
      Drop1=Btn2;
      Btn2= temp;
      reset(1, Drop1);
    }
    else if(num==2){
      $(btn1_2).text(Drop2);
      $(btn2_2).text(Drop2);
      $(btn3_2).text(Drop2);
      $(drop2).text(Btn2);
      var temp = Drop2;
      Drop2=Btn2;
      Btn2= temp;
      reset(2, Drop2);
    }
    else if(num==3){
      $(btn1_2).text(Drop3);
      $(btn2_2).text(Drop3);
      $(btn3_2).text(Drop3);
      $(drop3).text(Btn2);
      var temp = Drop3;
      Drop3=Btn2;
      Btn2= temp;
      reset(3, Drop3);
    }
  }
  //redraws the inputed row 'num' and puts all the data from the third button in the dropdown in that column
  function reDraw3(num){
    if (num==1){
      $(btn1_3).text(Drop1);
      $(btn2_3).text(Drop1);
      $(btn3_3).text(Drop1);
      $(drop1).text(Btn3);
      var temp = Drop1;
      Drop1=Btn3;
      Btn3= temp;
      reset(1, Drop1);
    }
    else if(num==2){
      $(btn1_3).text(Drop2);
      $(btn2_3).text(Drop2);
      $(btn3_3).text(Drop2);
      $(drop2).text(Btn3);
      var temp = Drop2;
      Drop2=Btn3;
      Btn3= temp;
      reset(2, Drop2);
    }
    else if(num==3){
      $(btn1_3).text(Drop3);
      $(btn2_3).text(Drop3);
      $(btn3_3).text(Drop3);
      $(drop3).text(Btn3);
      var temp = Drop3;
      Drop3=Btn3;
      Btn3= temp;
      reset(3, Drop3);
    }
  }
  //redraws the inputed row 'num' and puts all the data from the fourth button in the dropdown in that column
  function reDraw4(num){
    if (num==1){
      $(btn1_4).text(Drop1);
      $(btn2_4).text(Drop1);
      $(btn3_4).text(Drop1);
      $(drop1).text(Btn4);
      var temp = Drop1;
      Drop1=Btn4;
      Btn4= temp;
      reset(1, Drop1);
    }
    else if(num==2){
      $(btn1_4).text(Drop2);
      $(btn2_4).text(Drop2);
      $(btn3_4).text(Drop2);
      $(drop2).text(Btn4);
      var temp = Drop2;
      Drop2=Btn4;
      Btn4= temp;
      reset(2, Drop2);
    }
    else if(num==3){
      $(btn1_4).text(Drop3);
      $(btn2_4).text(Drop3);
      $(btn3_4).text(Drop3);
      $(drop3).text(Btn4);
      var temp = Drop3;
      Drop3=Btn4;
      Btn4= temp;
      reset(3, Drop3);
    }
  }
