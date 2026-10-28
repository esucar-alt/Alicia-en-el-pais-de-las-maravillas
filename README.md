# Alicia en el País de las Maravillas - Actividad Práctica

**Asignatura:** Programación Web I  
**Estudiante:** EDILSON BEIMAR SUCA ROMAN  

---

## 🔗 Enlaces Obligatorios de Entrega

* 🌐 **Página Web Publicada:** https://esucar-alt.github.io/Alicia-en-el-pais-de-las-maravillas/
* 📁 **Repositorio Git:** https://github.com/esucar-alt/Alicia-en-el-pais-de-las-maravillas.git
* 🎥 **Video Explicativo (≤ 3 min):** https://drive.google.com/drive/folders/13wU6kno71qCITPB7R-2jlT4U9uhygC7l?usp=sharing

---

## 📜 Descripción del Proyecto

Este proyecto consiste en una aplicación web interactiva inspirada en *Alicia en el País de las Maravillas*, desarrollada con HTML5, CSS3 y JavaScript nativo (vanilla JS). La plataforma permite resolver tres problemas lógicos presentados en una interfaz navegable por pestañas sin recargar la página.

### Ejercicios Incluidos:
1. **La Poción Mágica de Alicia:** Control de tamaño mediante estructuras condicionales (`if / else`).
2. **La Merienda del Sombrerero Loco:** Cálculo de compras y descuentos usando selección múltiple (`switch`).
3. **El Desafío de la Reina de Corazones:** Clasificación y suma de números pares e impares con bucles (`for`).

---

## 🛠️ Explicación Técnica y Conceptos de JavaScript

### 1. Variables y Ámbito (`let` vs `const` vs `var`)
* **`var` / `let`:** Se utilizan para declarar variables cuyos valores cambian durante la ejecución (ej. totales, conteos, nueva altura de Alicia).
* **`const`:** Se emplea para definir valores fijos o constantes que no deben mutar durante el programa (ej. la altura de la puerta fija de 30 cm o los precios unitarios).

### 2. Estructuras de Control
* **`if / else if / else`:** Evalúan condiciones lógicas secuenciales. Se utilizan para validar si los datos de entrada son correctos y si Alicia logra atravesar la puerta según su nueva altura.
* **`switch`:** Estructura de selección múltiple empleada en el Ejercicio 2 para asignar el precio unitario exacto y el nombre del producto según la opción seleccionada en la lista desplegable.
* **`for`:** Bucle de iteración utilizado en el Ejercicio 3 para recorrer secuencialmente los números desde 1 hasta $N$ (cantidad de cartas) e ir acumulando conteos y sumas.

### 3. Funciones Nativas del DOM y Eventos
* **`document.getElementById(id)`:** Selecciona un elemento del HTML mediante su identificador único para capturar su valor o modificar su contenido.
* **`.value`:** Obtiene o asigna el valor albergado en un campo de entrada (`<input>` o `<select>`).
* **`.textContent`:** Permite escribir o actualizar texto de forma segura dentro de un elemento HTML sin interpretar etiquetas externas.
* **`addEventListener("submit", callback)`:** Escucha el evento de envío del formulario para desencadenar la función de procesamiento sin necesidad de usar atributos HTML como `onclick`.
* **`event.preventDefault()`:** Detiene la acción por defecto del formulario (que reanudaría/recargaría la página), logrando la actualización dinámica del DOM.

---

## 🧪 Casos de Prueba (5 por Ejercicio)

### Ejercicio 1: La Poción Mágica
#### Prueba 1
![Captura Ejercicio 1](img/ejercicio1-prueba1.png)
#### Prueba 2
![Captura Ejercicio 1](img/ejercicio1-prueba2.png)
#### Prueba 3
![Captura Ejercicio 1](img/ejercicio1-prueba3.png)
#### Prueba 4
![Captura Ejercicio 1](img/ejercicio1-prueba4.png)
#### Prueba 5
![Captura Ejercicio 1](img/ejercicio1-prueba5.png)
### Ejercicio 2: La Merienda del Sombrerero Loco
#### Prueba 1
![Captura Ejercicio 2](img/ejercicio2-prueba1.png)
#### Prueba 2
![Captura Ejercicio 2](img/ejercicio2-prueba2.png)
#### Prueba 3
![Captura Ejercicio 2](img/ejercicio2-prueba3.png)
#### Prueba 4
![Captura Ejercicio 2](img/ejercicio2-prueba4.png)
#### Prueba 5
![Captura Ejercicio 2](img/ejercicio2-prueba5.png)
### Ejercicio 3: El Desafío de la Reina de Corazones
#### Prueba 1
![Captura Ejercicio 3](img/ejercicio3-prueba1.png)
#### Prueba 2
![Captura Ejercicio 3](img/ejercicio3-prueba2.png)
#### Prueba 3
![Captura Ejercicio 3](img/ejercicio3-prueba3.png)
#### Prueba 4
![Captura Ejercicio 3](img/ejercicio3-prueba4.png)
#### Prueba 5
![Captura Ejercicio 3](img/ejercicio3-prueba5.png)

## 🚨 Errores Frecuentes Identificados y Soluciones

1. **Recarga de la página al enviar el formulario:**
   * *Causa:* Comportamiento predeterminado del evento `submit`.
   * *Solución:* Utilizar `event.preventDefault()` al inicio de cada listener.
2. **Concatenación de texto en lugar de suma matemática:**
   * *Causa:* Leer `.value` devuelve un dato tipo `String`.
   * *Solución:* Aplicar `parseFloat()` o `parseInt()` antes de realizar operaciones matemáticas.
3. **Selección de pestañas sin ocultar secciones previas:**
   * *Causa:* Falta de manipulación del atributo CSS `display`.
   * *Solución:* Iterar sobre los contenedores en `navegacion.js` para ocultar con `display = 'none'` los no seleccionados.
