document.addEventListener("DOMContentLoaded",function horaActual() {
    const boton = document.getElementById("mostrarHora");

    boton.addEventListener("click", function() {

        const fecha = new Date();
        /*
        const anioActual = fecha.getFullYear();
        const mesActual = fecha.getMonth();
        const diaActual = fecha.getDate();
        const fechaActual = `${diaActual} de ${mesActual} de ${anioActual}`;
        */
        alert("La hora actual es: " + fecha.toDateString());
    });
});