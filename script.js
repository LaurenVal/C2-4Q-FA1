function blurEvent(event) {
  var x = event.target.value;
  if (x == '') {
    event.target.style.border = "2px solid red";
  } else {
    event.target.style.border = "2px solid green";
  }
}

function focusEvent(event) {
  event.target.style.border = "1px solid black";
}

function info() {
  var name = document.getElementById("name").value;
  var gender = document.getElementById("gender").value;
  var user = document.getElementById("user").value;
  var password = document.getElementById("password").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var interests = document.getElementById("interests").value;

  document.getElementById("info").innerHTML = "Name: "+name+" <br> Gender: "+gender+" <br> Preferred Username: "+user+" <br> Password: "+password+" <br> Email Address: "+email+" <br> Home Address: "+address+" <br> Interests: "+interests+"";

  return false;
}

function resetInfo() {
  document.getElementById("info").innerHTML = " "
}