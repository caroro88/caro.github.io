
document.getElementById('boton-dir').onclick = function () {
    console.log("Capturar el evento click");
    document.getElementById("boton-dir").innerHTML = "1234, Abcdefg Hijklmn";
}

document.getElementById('boton-tel').onclick = function () {
    console.log("Capturar el evento click");
    document.getElementById("boton-tel").innerHTML = "1234 56789";
}

document.getElementById('boton-mail').onclick = function () {
    console.log("Capturar el evento click");
    document.getElementById("boton-mail").innerHTML = "mail@mail.com";
}




/** 
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

document.getElementById('myNavbar').onclick = function () {
    document.getElementById('myNavbar').innerHTML = "1234";
}
*/