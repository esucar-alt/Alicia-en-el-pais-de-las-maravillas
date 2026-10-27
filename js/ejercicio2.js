// Función propia para calcular el costo de la merienda con switch
function calcularMerienda(bebida, tazas) {
    var precioUnitario = 0;
    var nombreBebida = "";

    // Estructura de selección múltiple (switch)
    switch (bebida) {
        case "te-maravillas":
            precioUnitario = 3.00;
            nombreBebida = "Té de las Maravillas";
            break;
        case "cafe-sombrerero":
            precioUnitario = 4.50;
            nombreBebida = "Café del Sombrerero";
            break;
        case "infusion-lirion":
            precioUnitario = 2.50;
            nombreBebida = "Infusión de Lirón";
            break;
        case "jugo-oruga":
            precioUnitario = 5.00;
            nombreBebida = "Jugo Mágico de la Oruga";
            break;
        default:
            precioUnitario = 0;
            nombreBebida = "Desconocida";
    }

    var subtotal = precioUnitario * tazas;
    var descuento = 0;

    // Condicional explícito: descuento del 10% si el subtotal supera los $15
    if (subtotal > 15) {
        descuento = subtotal * 0.10;
    }

    var total = subtotal - descuento;

    return {
        nombreBebida: nombreBebida,
        precioUnitario: precioUnitario,
        subtotal: subtotal,
        descuento: descuento,
        total: total
    };
}

// Evento submit para el Ejercicio 2
document.getElementById("form-ejercicio2").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita recargar la página

    var invitado = document.getElementById("nombre-invitado").value.trim();
    var bebida = document.getElementById("tipo-bebida").value;
    var inputTazas = document.getElementById("cantidad-tazas").value;
    var divResultado = document.getElementById("resultado-ej2");

    var tazas = parseInt(inputTazas, 10);

    // Validaciones
    if (invitado === "") {
        divResultado.textContent = "Error: Ingrese el nombre del invitado.";
        divResultado.className = "caja-resultado error";
        divResultado.style.display = "block";
        return;
    }

    if (bebida === "") {
        divResultado.textContent = "Error: Debe seleccionar un tipo de bebida.";
        divResultado.className = "caja-resultado error";
        divResultado.style.display = "block";
        return;
    }

    if (inputTazas === "" || isNaN(tazas) || tazas <= 0 || tazas > 20) {
        divResultado.textContent = "Error: Ingrese un número entero de tazas válido (entre 1 y 20).";
        divResultado.className = "caja-resultado error";
        divResultado.style.display = "block";
        return;
    }

    // Calcular ticket
    var ticket = calcularMerienda(bebida, tazas);

    // Formatear salida del texto
    var detalle = "Resumen de la orden de " + invitado + ":\n" +
        "- Bebida: " + ticket.nombreBebida + "\n" +
        "- Cantidad: " + tazas + " tazas\n" +
        "- Precio unitario: $" + ticket.precioUnitario.toFixed(2) + "\n" +
        "- Subtotal: $" + ticket.subtotal.toFixed(2) + "\n" +
        "- Descuento (10% si subtotal > $15): $" + ticket.descuento.toFixed(2) + "\n" +
        "- Total a pagar: $" + ticket.total.toFixed(2);

    divResultado.textContent = detalle;
    divResultado.className = "caja-resultado exito";
    divResultado.style.whiteSpace = "pre-line"; // Mantiene los saltos de línea
    divResultado.style.display = "block";
});