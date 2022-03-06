// var ladoCuadrado;

// var ladoTriangulo1;
// var ladoTriangulo2;
// var base;
// var altura;

// var radioCirculo;

const pii = Math.PI; 


function perimetroCuadrado(ladoCuadrado){
    var perimetro = ladoCuadrado * 4;

    return "El perimetro del cuadrado es " + perimetro + "cm";
     
    //console.log("El perimetro del cuadrado es " + perimetro + "cm");
    //console.log("El area del cuadrado es " + area + "cm2");
}

function areaCuadrado(ladoCuadrado){
    var area = ladoCuadrado * ladoCuadrado;

    return "El area del cuadrado es " + area + "cm2";
     
    //console.log("El perimetro del cuadrado es " + perimetro + "cm");
    //console.log("El area del cuadrado es " + area + "cm2");
}



console.group("Triangulo");
function calcularPerimetroTriangulo(ladoTriangulo1, ladoTriangulo2, base){
    var perimetro = ladoTriangulo1 + ladoTriangulo2 + base;

    console.log("El perimetro del triangulo es " + perimetro + "cm");
}

function calcularAreaTriangulo(base, altura){
    var area = (base * altura) / 2;

    console.log("El area del triangulo es " + area + "cm2");
}
console.groupEnd();

console.group("Circulo");
function calcularPerimetroCirculo(radioCirculo){
    var perimetro = 2 * radioCirculo * pii;

    console.log("El perimetro del Circulo es " + perimetro + "cm");
}

function calcularAreaCirculo(radioCirculo){
    var area = pii * radioCirculo * radioCirculo;

    console.log("El area del Circulo es " + area + "cm2");
}
console.groupEnd();

//Interaccion con HTML

function calcularPerimetroCuadrado(){
    //Traemos todo lo que pone el usuario en el HTML
    const input = document.getElementById("InputCuadrado");

    //Como solo necesitamos el valor, traemos el valor del input asi
    const value = input.value;

    const perim = perimetroCuadrado(value);
    alert(perim);
}

function calcularAreaCuadrado(){
    //Traemos todo lo que pone el usuario en el HTML
    const input = document.getElementById("InputCuadrado");

    //Como solo necesitamos el valor, traemos el valor del input asi
    const value = input.value;

    const aea = areaCuadrado(value);
    alert(aea);
}