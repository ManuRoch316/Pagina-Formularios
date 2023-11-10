/*
document.addEventListener('DOMContentLoaded', function () {
    // Selector de botones
    var btnReiniciar = document.getElementById('btn_reiniciar');
    var btnAceptar = document.getElementById('btn_aceptar');

    // Selector de preguntas y respuestas
    var preguntas = document.querySelectorAll('section');
    var respuestasCorrectas = 0;

    // Función para reiniciar el formulario
    function reiniciarFormulario() {
        respuestasCorrectas = 0;
        actualizarResultado();
        desmarcarRespuestas();
    }

    // Función para manejar la lógica cuando se hace clic en "Aceptar"
    function procesarRespuestas() {
        respuestasCorrectas = 0;

        preguntas.forEach(function (pregunta, index) {
            var opciones = pregunta.querySelectorAll('input[type="radio"]');
            opciones.forEach(function (opcion) {
                if (opcion.checked && parseInt(opcion.value) === 1) {
                    respuestasCorrectas++;
                }
            });
        });

        actualizarResultado();
    }

    // Función para actualizar el resultado en la interfaz
    function actualizarResultado() {
        var resultadoSpan = document.getElementById('resultado');
        resultadoSpan.textContent = respuestasCorrectas;
    }

    // Función para desmarcar todas las respuestas
    function desmarcarRespuestas() {
        preguntas.forEach(function (pregunta, index) {
            var opciones = pregunta.querySelectorAll('input[type="radio"]');
            opciones.forEach(function (opcion) {
                opcion.checked = false;
            });
        });
    }

    // Event listeners
    btnReiniciar.addEventListener('click', reiniciarFormulario);
    btnAceptar.addEventListener('click', procesarRespuestas);
});
*/

document.addEventListener('DOMContentLoaded', function () {
    // Selector de botones 
    var btnReiniciar = document.getElementById('btn_reiniciar');
    var btnAceptar = document.getElementById('btn_aceptar');

    // Selector de preguntas y respuestas 
    var preguntas = document.querySelectorAll('section');
    var respuestasCorrectas = 0;

    // Función para reiniciar el formulario
    function reiniciarFormulario() {
        respuestasCorrectas = 0;
        actualizarResultado();
        desmarcarRespuestas();
        quitarIndicadores();
    }

    // Función para manejar la lógica cuando se hace clic en "Aceptar"
    function procesarRespuestas() {
        respuestasCorrectas = 0;

        preguntas.forEach(function (pregunta, index) {
            var opciones = pregunta.querySelectorAll('input[type="radio"]');
            var respuestaCorrecta = obtenerRespuestaCorrecta(opciones);

            opciones.forEach(function (opcion) {
                if (opcion.checked) {
                    if (parseInt(opcion.value) === 1) {
                        respuestasCorrectas++;
                        indicarResultado(opcion, '✔️');
                    } else {
                        indicarResultado(opcion, '✖️');
                        mostrarRespuestaCorrecta(opcion, respuestaCorrecta);
                    }
                }
            });
        });

        actualizarResultado();
    }

    // Función para obtener la respuesta correcta de un conjunto de opciones
    function obtenerRespuestaCorrecta(opciones) {
        for (var i = 0; i < opciones.length; i++) {
            if (parseInt(opciones[i].value) === 1) {
                return opciones[i].nextElementSibling.textContent;
            }
        }
        return null;
    }

    // Función para indicar el resultado con un emoji
    function indicarResultado(opcion, emoji) {
        var label = opcion.nextElementSibling;
        //label.textContent = emoji + ' ' + label.textContent;
        label.textContent = label.textContent + " " + emoji;
    }

    // Función para mostrar la respuesta correcta en caso de una respuesta incorrecta
    function mostrarRespuestaCorrecta(opcionSeleccionada, respuestaCorrecta) {
        var label = opcionSeleccionada.nextElementSibling;
        label.innerHTML+= " " + 'La respuesta correcta es: ' + respuestaCorrecta;
        /*
        const estilo = documen.getElementByTagName('label')
        estilo.style.backgroundColor = "#0000"
        */
    }

    // Función para actualizar el resultado en la interfaz
    function actualizarResultado() {
        var resultadoSpan = document.getElementById('resultado');
        resultadoSpan.textContent = respuestasCorrectas;
    }

    // Función para desmarcar todas las respuestas
    function desmarcarRespuestas() {
        preguntas.forEach(function (pregunta, index) {
            var opciones = pregunta.querySelectorAll('input[type="radio"]');
            opciones.forEach(function (opcion) {
                opcion.checked = false;
            });
        });
    }

    // Función para quitar indicadores de resultado
    function quitarIndicadores() {
        preguntas.forEach(function (pregunta, index) {
            var labels = pregunta.querySelectorAll('label');
            labels.forEach(function (label) {
                label.textContent = label.textContent.replace('✔️', '').replace('✖️', '').replace(/La respuesta correcta es:.*/, '');
            });
        });
    }

    // Event listeners
    btnReiniciar.addEventListener('click', reiniciarFormulario);
    btnAceptar.addEventListener('click', procesarRespuestas);
});


