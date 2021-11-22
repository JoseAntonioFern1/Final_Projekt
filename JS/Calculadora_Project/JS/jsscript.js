//Funcion pasar valor de boton pulsado al display
function f_valor (p_x) {
    document.getElementById("id_display").value += p_x;
    }

// Funcion borrar display
function f_borrar_display (p_y) {
    document.getElementById("id_display").value = p_y;
    }

// Funcion calcular expresion del display
function f_calcular_display () {
    var v_resultado = eval(document.getElementById('id_display').value);
    document.getElementById('id_display').value = v_resultado;
    console.log(v_resultado);
}