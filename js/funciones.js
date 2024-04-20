
function sumar() {
    var v1 = parseInt(document.getElementById("valor1").value);
    var v2 = parseInt(document.getElementById("valor2").value);
    var suma = 0;

    suma = v1 + v2;

    document.getElementById("resultado").value = suma;
}

function restar() {
    var v1 = parseInt(document.getElementById("valor1").value);
    var v2 = parseInt(document.getElementById("valor2").value);
    var resta = 0;

    resta = v1 - v2;

    document.getElementById("resultado").value = resta;
}

function multiplicacion() {
    var v1 = parseInt(document.getElementById("valor1").value);
    var v2 = parseInt(document.getElementById("valor2").value);
    var multiplicacion = 0;

    multiplicacion = v1 * v2;

    document.getElementById("resultado").value = multiplicacion;
}

function division() {
    var v1 = parseInt(document.getElementById("valor1").value);
    var v2 = parseInt(document.getElementById("valor2").value);
    var division = 0;

    division = v1 / v2;

    document.getElementById("resultado").value = division;
}