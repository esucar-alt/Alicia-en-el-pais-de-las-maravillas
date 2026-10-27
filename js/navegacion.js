// Función para cambiar de sección/pestana sin recargar la página
function mostrarSeccion(idSeccion) {
    // Lista de secciones
    var secciones = ["ejercicio1", "ejercicio2", "ejercicio3"];
    var botones = ["nav-ej1", "nav-ej2", "nav-ej3"];

    for (var i = 0; i < secciones.length; i++) {
        var sec = document.getElementById(secciones[i]);
        var btn = document.getElementById(botones[i]);

        if (secciones[i] === idSeccion) {
            sec.style.display = "block";
            btn.className = "active";
        } else {
            sec.style.display = "none";
            btn.className = "";
        }
    }
}