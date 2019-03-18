

function longlat() {
    if (navigator.geolocation){
        console.log(navigator.geolocation.getCurrentPosition(success, error, options));
    }
    else{
        console.log("Browser does not support web api geolocation");
    }
}
function success(pos){
    var crds = pos.coords;

    document.getElementById("longID").value = crds.longitude;
    document.getElementById("latID").value = crds.latitude;
}

function error(err){
    console.warn("ERROR(${err.code}): ${err.message}")
}
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };