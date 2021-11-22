document.write("<h1>Hallo Welt</h1>");

/* Operaciones aritmeticas
let vlet_numOne = 1;
let vlet_numTwo = 2;
let vlet_numResult = vlet_numOne + vlet_numTwo;
console.log(vlet_numResult);
document.write("El resultado es: "+vlet_numResult); */

//Bucle for con arrays

let v_arrayNombres = ["Pepe", "Juan", "Carlos", "Robert", "Joe", "Kalipso"];

document.write('<style>h2 {color:red;}</style>');
document.write('<h2>Inicio</h2>');
for (let index = 0; index < v_arrayNombres.length; index++) {
    document.write('El nombre '+index + ' del array es: ' + '<p><bold>'+ v_arrayNombres[index]+ '.</bold></p>' + '<br>');
}
document.write('<br><h2>Fin</h2>');

// Bucle for
let v_stringHola = 'Hallo Welt ';

document.write('<style>h2 {color:red;}</style>');
document.write('<h2>Inicio</h2>');
for (let index = 0; index < 50; index++) {
    document.write(v_stringHola + "-- ");
}
document.write('<br>');
document.write('<style> h2 {color:blue;}</style>');
document.write('<h2>Fin</h2>');

// Bucle while

let v_contador = 50;
document.write('<style> h2 {color:red;}</style>');
document.write('<h2>Inicio</h2>');
while (v_contador >0) {
    document.write(v_stringHola + "-- ");
    v_contador--;
}
document.write('<br>');
document.write('<style> h2 {color:blue;} </style>');
document.write('<h2>Fin</h2>');

// Funcion sin parametros;

function f_salarioTrabajador() {
    var v_salarioTrabajador = 2500;
    return v_salarioTrabajador;
}

var v_salarioObrero = f_salarioTrabajador();
console.log('El salrio de un obrero es: ' + v_salarioObrero + ' $');

//Funciones anidadas
function f_Area (p_tipo, p_dimension) {
    var v_areaFigura;
    function f_areaCuadrado (p_dimension) {
        v_areaFigura = p_dimension*p_dimension;
        return v_areaFigura;
      } 
    if (p_tipo == "cuadrado") {
        f_areaCuadrado (p_dimension);
    } else {
        if (p_tipo == "circulo") {
            const c_Pi = 3.1415;
            v_areaFigura = c_Pi*f_areaCuadrado (p_dimension);
        }
    }
    return v_areaFigura;
}

var v_figura = "cuadrado";
var v_mideLado = 3;
console.log('El area de la figura ' + v_figura + ' con lado: ' + v_mideLado + ' es: ' + f_Area(v_figura,v_mideLado ));

var v_figura = "circulo";
var v_mideLado = 4;
console.log('El area de la figura ' + v_figura + ' con lado: ' + v_mideLado + ' es: ' + f_Area(v_figura,v_mideLado ));

//Interaccion Javascript con documento HTML

function f_areaCirculo() {
    const c_Pi = 3.141592;
    var v_radioCirculo = document.getElementById("id_radioCirculo").value;
    var v_resultArea = c_Pi*v_radioCirculo*v_radioCirculo;
    document.getElementById("id_areaCirculo").value = v_resultArea;
} 

let letv_arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
letv_arrayNum.push(10);

for (let index = 0; index < 1001; index++) {
    letv_arrayNum.push(index);
}
console.log(letv_arrayNum);

let letv_contadorPrimos = 0;
let letv_arrayNumPrimos =[];
for (let index = 0; index < 1; index++) {
letv_arrayNum.forEach((i) => { if (letv_arrayNum[i] % 17 == 0) {
    console.log("El elemento " + letv_arrayNum [i] + " es divisible por 17.");
    letv_contadorPrimos++;
    letv_arrayNumPrimos.push(i);
    }
    });
    }
    console.log("El numero de numeros Primos es :" + letv_contadorPrimos);
    console.log("El array de numeros primos es :" + letv_arrayNumPrimos);