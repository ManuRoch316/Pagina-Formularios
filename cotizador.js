function calcularTotal() {
    // Obtener todos los elementos input seleccionados
    var elementosSeleccionados = document.querySelectorAll('input:checked');

    // Calcular la suma total
    var sumaTotal = 0;
    var productos = [];

    elementosSeleccionados.forEach(function (elemento) {
        sumaTotal += parseFloat(elemento.value);
        productos.push({
            nombre: obtenerNombre(elemento),
            precio: parseFloat(elemento.value)
        });
    });

    //Calcular el subtotal de la suma IVA
    var iva = 0.16
    var restaIVA = 0
    var totalIva = 0

    elementosSeleccionados.forEach(function(elemento){
        restaIVA= sumaTotal * iva
        totalIva = sumaTotal - restaIVA
    })


    // Crear la factura
    var facturaHTML = '<div class="factura">';
    facturaHTML += '<h2>Factura</h2>';
    facturaHTML += '<ul>';

    productos.forEach(function (producto) {
        facturaHTML += '<li>' + producto.nombre + ': $' + producto.precio.toFixed(2) + '</li>';
    });

    facturaHTML += '</ul>';
    facturaHTML += '<p>Total: $' + sumaTotal.toFixed(2) + '</p>';
    facturaHTML += '<p>Subtotal: $' + totalIva.toFixed(2)+'</p>'
    facturaHTML += '</div>';

    // Mostrar la factura
    document.getElementById('factura').innerHTML = facturaHTML;
}

function obtenerNombre(elemento) {
    // Manejar tanto radio buttons como checkboxes
    if (elemento.type === 'radio') {
        return elemento.nextElementSibling.innerHTML.trim();
    } else if (elemento.type === 'checkbox') {
        return elemento.nextElementSibling.innerHTML.trim();
    }
}

function reiniciar() {
    // Limpiar la factura
    document.getElementById('factura').innerHTML = '';

    // Desmarcar todos los elementos input
    var elementosInput = document.querySelectorAll('input:checked');
    elementosInput.forEach(function (elemento) {
        elemento.checked = false;
    });
}
