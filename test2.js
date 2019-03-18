

/*$(document).ready(function(){
  console.log("yolo");

  $.ajax(settings);
  var settings = {
    url: "http://api.vivostate.net/portalusers?username=matthewj",
    type: "GET",
    timeout: 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  /*var request = new XMLHttpRequest();

  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', "http://api.vivostate.io/portalusers?username=matthewj", true);
  request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  request.setRequestHeader("Access-Control-Allow-Origin", "*");
  

  // Send request
  request.send();
  console.log();*/
//});

/*var myHeaders = new Headers();
myHeaders.set('Content-Type', 'application/json');*/

$(document).ready(function(){
  $.getJSON("profile.json", function(json) {
    document.getElementById("comp").innerHTML = json["records"][0]["company"];
    document.getElementById("fname").value = json["records"][0]["first_name"];
    document.getElementById("lname").value = json["records"][0]["last_name"];
    document.getElementById("role").innerHTML = json["records"][0]["role"];
    document.getElementById("phone").value = json["records"][0]["phone_number"];
    document.getElementById("email").innerHTML = json["records"][0]["email"];
  });
  console.log("here");
  var settings = {
    url: "http://api.vivostate.net/portalusers?username=matthewj",
    type: "GET"
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
});
