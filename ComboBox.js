// // Función para calcular el resultado al hacer clic en el botón "Aceptar"
// function calcularResultado() {
//     // Obtener todas las secciones
//     var secciones = document.querySelectorAll('section');

//     // Inicializar el contador de respuestas correctas
//     var respuestasCorrectas = 0;

//     // Recorrer cada sección
//     secciones.forEach(function (seccion, indice) {
//         // Obtener el elemento select dentro de la sección
//         var select = seccion.querySelector('select');

//         // Obtener el valor seleccionado
//         var valorSeleccionado = select.value;

//         // Obtener el párrafo de salida correspondiente a la sección
//         var textoSalida = seccion.querySelector('p');

//         // Verificar si la opción seleccionada es la correcta (valor 1)
//         if (valorSeleccionado === '1') {
//             respuestasCorrectas++;
//             textoSalida.textContent = 'Respuesta correcta.';
//         } else if (valorSeleccionado === '') {
//             textoSalida.textContent = 'Debes seleccionar una opción.';
//         } else {
//             // Obtener la opción correcta dentro del select
//             var opcionCorrecta = select.querySelector('option[value="1"]').textContent;
//             textoSalida.textContent = 'Respuesta incorrecta. La respuesta correcta es: ' + opcionCorrecta + '.';
//         }
//     });

//     // Mostrar el número de respuestas correctas en el resultado
//     var resultadoNumero = document.getElementById('resultadoNumero');
//     resultadoNumero.textContent = respuestasCorrectas;

//     // Mostrar el resultado
//     var resultado = document.getElementById('resultado');
//     resultado.style.display = 'block';
// }

// // Función para reiniciar las selecciones y resultados
// function reiniciar() {
//     // Obtener todas las secciones
//     var secciones = document.querySelectorAll('section');

//     // Reiniciar selecciones y textos de salida
//     secciones.forEach(function (seccion, indice) {
//         var select = seccion.querySelector('select');
//         select.value = '';
//         var textosSalida = seccion.querySelectorAll('p');
//         textosSalida.forEach(function (textoSalida) {
//             textoSalida.textContent = '';
//         });
//     });

//     // Ocultar el resultado
//     var resultado = document.getElementById('resultado');
//     resultado.style.display = 'none';
// }

// // Asociar las funciones a los eventos de los botones
// document.getElementById('btn_aceptar').addEventListener('click', calcularResultado);
// document.getElementById('btn_reiniciar').addEventListener('click', reiniciar);


// Función para calcular el resultado al hacer clic en el botón "Aceptar"
function calcularResultado() {
    // Obtener todas las secciones
    var secciones = document.querySelectorAll('section');

    // Inicializar el contador de respuestas correctas
    var respuestasCorrectas = 0;

    // Recorrer cada sección
    secciones.forEach(function (seccion, indice) {
        // Obtener el elemento select dentro de la sección
        var select = seccion.querySelector('select');

        // Obtener el valor seleccionado
        var valorSeleccionado = select.value;

        // Obtener el párrafo de salida correspondiente a la sección
        var textoSalidaUno = seccion.querySelector('#textosalidauno');
        var textoSalidaDos = seccion.querySelector('#textosalidados');

        // Verificar si la opción seleccionada es la correcta (valor 1)
        if (valorSeleccionado === '1') {
            respuestasCorrectas++;
            textoSalidaUno.textContent = '✔️ Respuesta correcta';
            textoSalidaUno.style.background = '#ccc5b9';
            textoSalidaDos.textContent = ''; // Limpiar mensaje de respuesta incorrecta
        } else if (valorSeleccionado === '') {
            textoSalidaUno.textContent = '✖️ incorrecto. Debes seleccionar una opción.';
            textoSalidaUno.style.background = '';
            textoSalidaDos.textContent = ''; // Limpiar mensaje de respuesta incorrecta
        } else {
            // Obtener la opción correcta dentro del select
            var opcionCorrecta = select.querySelector('option[value="1"]').textContent;
            textoSalidaUno.textContent = '✖️ incorrecto. La respuesta correcta es: ' + opcionCorrecta + '.';
            textoSalidaUno.style.background = '#ccc5b9';
            textoSalidaDos.textContent = ''; // Limpiar mensaje de respuesta incorrecta
        }
    });

    // Mostrar el número de respuestas correctas en el resultado
    var resultadoNumero = document.getElementById('resultadoNumero');
    resultadoNumero.textContent = respuestasCorrectas;

    // Mostrar el resultado
    var resultado = document.getElementById('resultado');
    resultado.style.display = 'block';
}

// Función para reiniciar las selecciones y resultados
function reiniciar() {
    // Obtener todas las secciones
    var secciones = document.querySelectorAll('section');

    // Reiniciar selecciones y textos de salida
    secciones.forEach(function (seccion, indice) {
        var select = seccion.querySelector('select');
        select.value = '';
        var textosSalidaUno = seccion.querySelector('#textosalidauno');
        var textosSalidaDos = seccion.querySelector('#textosalidados');
        textosSalidaUno.textContent = '';
        textosSalidaUno.style.background = '';
        textosSalidaDos.textContent = '';
    });

    // Ocultar el resultado
    var resultado = document.getElementById('resultado');
    resultado.style.display = 'none';
}

// Asociar las funciones a los eventos de los botones
document.getElementById('btn_aceptar').addEventListener('click', calcularResultado);
document.getElementById('btn_reiniciar').addEventListener('click', reiniciar);
