var ladoCuadrado;

var ladoTriangulo1;
var ladoTriangulo2;
var base;
var altura;

var radioCirculo;

const pii = Math.PI; 

console.group("Cuadrado");
function calcularAreaPerimetroCuadrado(ladoCuadrado){
    var perimetro = ladoCuadrado * 4;
    var area = ladoCuadrado * ladoCuadrado;

    return "El perimetro del cuadrado es " + perimetro + "cm\n" + "El area del cuadrado es " + area + "cm2";
     
    //console.log("El perimetro del cuadrado es " + perimetro + "cm");
    //console.log("El area del cuadrado es " + area + "cm2");
}
console.groupEnd();

console.group("Triangulo");
function calcularAreaPerimetroTriangulo(ladoTriangulo1, ladoTriangulo2, base, altura){
    var perimetro = ladoTriangulo1 + ladoTriangulo2 + base;
    var area = (base * altura) / 2;

    console.log("El perimetro del triangulo es " + perimetro + "cm");
    console.log("El area del triangulo es " + area + "cm2");
}
console.groupEnd();

console.group("Circulo");
function calcularAreaPerimetroCirculo(radioCirculo){
    var perimetro = 2 * radioCirculo * pii;
    var area = pii * radioCirculo * radioCirculo;

    console.log("El perimetro del Circulo es " + perimetro + "cm");
    console.log("El area del Circulo es " + area + "cm2");
}
console.groupEnd();