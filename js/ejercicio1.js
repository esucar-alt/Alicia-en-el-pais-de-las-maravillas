// Función propia para procesar la poción de Alicia
function procesarPocion(alturaInicial, pocion) {
    var alturaPuerta = 30; // Altura fija de la puerta en cm

    // Regla matemática: Cada ml consumido reduce 0.5 cm
    var reduccion = pocion * 0.5;
    var nuevaAltura = alturaInicial - reduccion;

    var mensaje = "";
    var claseEstilo = "";

    if (nuevaAltura <= 0) {
        mensaje = "¡Alicia se ha encogido demasiado o desapareció! La nueva altura calculada es " + nuevaAltura.toFixed(1) + " cm. Revisa las cantidades.";
        claseEstilo = "alerta";
    } else if (nuevaAltura <= alturaPuerta) {
        mensaje = "¡Éxito! La nueva altura de Alicia es " + nuevaAltura.toFixed(1) + " cm. ¡Es lo suficientemente pequeña para pasar la puerta de " + alturaPuerta + " cm!";
        claseEstilo = "exito";
    } else {
        mensaje = "Alicia mide ahora " + nuevaAltura.toFixed(1) + " cm. Todavía es demasiado grande para atravesar la puerta de " + alturaPuerta + " cm. Necesita más poción.";
        claseEstilo = "alerta";
    }

    return {
        texto: mensaje,
        clase: claseEstilo
    };
}

// Evento submit para el Ejercicio 1
document.getElementById("form-ejercicio1").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita recargar la página

    var inputAltura = document.getElementById("altura-inicial").value;
    var inputPocion = document.getElementById("cantidad-pocion").value;
    var divResultado = document.getElementById("resultado-ej1");

    // Conversión a números
    var altura = parseFloat(inputAltura);
    var pocion = parseFloat(inputPocion);

    // Validación de entradas
    if (inputAltura === "" || inputPocion === "" || isNaN(altura) || isNaN(pocion)) {
        divResultado.textContent = "Error: Por favor complete todos los campos con números válidos.";
        divResultado.className = "caja-resultado error";
        divResultado.style.display = "block";
        return;
    }

    if (altura <= 0) {
        divResultado.textContent = "Error: La altura inicial de Alicia debe ser mayor a 0 cm.";
        divResultado.className = "caja-resultado error";
        divResultado.style.display = "block";
        return;
    }

    if (pocion < 0 || pocion > 200) {
        divResultado.textContent = "Error: La cantidad de poción debe estar en el rango de 0 a 200 ml.";
        divResultado.className = "caja-resultado error";
        divResultado.style.display = "block";
        return;
    }

    // Procesar datos mediante la función
    var resultado = procesarPocion(altura, pocion);

    // Mostrar el resultado en pantalla
    divResultado.textContent = resultado.texto;
    divResultado.className = "caja-resultado " + resultado.clase;
    divResultado.style.display = "block";
});