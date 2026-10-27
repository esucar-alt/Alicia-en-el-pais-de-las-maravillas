// Función propia para analizar las cartas de la Reina con bucle for
function analizarCartas(totalCartas) {
    var conteoPares = 0;
    var sumaPares = 0;
    var conteoImpares = 0;
    var sumaImpares = 0;
    var secuencia = "";

    // Recorrido con bucle for del 1 al total de cartas
    for (var i = 1; i <= totalCartas; i++) {
        secuencia += i;
        if (i < totalCartas) {
            secuencia += ", ";
        }

        // Clasificación de pares e impares
        if (i % 2 === 0) {
            conteoPares++;
            sumaPares += i;
        } else {
            conteoImpares++;
            sumaImpares += i;
        }
    }

    // Determinar el grupo con mayor suma
    var comparacion = "";
    if (sumaPares > sumaImpares) {
        comparacion = "El grupo de las cartas PARES tiene la mayor suma (" + sumaPares + " vs " + sumaImpares + ").";
    } else if (sumaImpares > sumaPares) {
        comparacion = "El grupo de las cartas IMPARES tiene la mayor suma (" + sumaImpares + " vs " + sumaPares + ").";
    } else {
        comparacion = "¡Existe un EMPATE entre las sumas de pares e impares! (" + sumaPares + ").";
    }

    return {
        secuencia: secuencia,
        conteoPares: conteoPares,
        sumaPares: sumaPares,
        conteoImpares: conteoImpares,
        sumaImpares: sumaImpares,
        comparacion: comparacion
    };
}

// Evento submit para el Ejercicio 3
document.getElementById("form-ejercicio3").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita recargar la página

    var inputCartas = document.getElementById("cantidad-cartas").value;
    var divResultado = document.getElementById("resultado-ej3");

    var numCartas = parseInt(inputCartas, 10);

    // Validación del valor ingresado
    if (inputCartas === "" || isNaN(numCartas) || numCartas <= 0 || numCartas > 50) {
        divResultado.textContent = "Error: Por favor ingrese un entero positivo entre 1 y 50 cartas.";
        divResultado.className = "caja-resultado error";
        divResultado.style.display = "block";
        return;
    }

    // Procesar con la función propia
    var reporte = analizarCartas(numCartas);

    // Formatear resultado
    var salida = "Análisis de las Cartas de la Reina:\n" +
        "- Secuencia analizada: [" + reporte.secuencia + "]\n" +
        "- Cartas Pares: " + reporte.conteoPares + " cartas | Suma total: " + reporte.sumaPares + "\n" +
        "- Cartas Impares: " + reporte.conteoImpares + " cartas | Suma total: " + reporte.sumaImpares + "\n" +
        "- Veredicto: " + reporte.comparacion;

    divResultado.textContent = salida;
    divResultado.className = "caja-resultado exito";
    divResultado.style.whiteSpace = "pre-line"; // Mantiene saltos de línea
    divResultado.style.display = "block";
});