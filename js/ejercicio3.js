var titulo = document.getElementById("title");
titulo.innerHTML = "Bienvenido a mi página";

var plataforma = document.getElementById("platform");
plataforma.innerHTML = navigator.userAgent;

if (confirm("Quieres continuar?")) {
    alert("Continuamos...");
}

