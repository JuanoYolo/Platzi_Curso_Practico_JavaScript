// var precioOriginal;
// var descuento;

function totalDescuento(precioOriginal,descuento, cupones){
    var descuentoFinal = (precioOriginal*(100-descuento))/100;
    var cupones;

    if(cupones > 5 || cupones < 0){
        return " NO se puede, maximo 5 cupones"
    }else if(cupones == 1){
        descuentoFinal -= ((10*precioOriginal)/100);
    }else if(cupones == 2){
        descuentoFinal -= ((20*precioOriginal)/100);
    }else if(cupones == 3){
        descuentoFinal -= ((30*precioOriginal)/100);
    }else if(cupones == 4){
        descuentoFinal -= ((40*precioOriginal)/100);
    }else if(cupones == 5){
        descuentoFinal -= ((50*precioOriginal)/100);
    }

    
    return descuentoFinal;
}

//Imprimir objetos con console.log
// console.log({
//     precioOriginal,
//     descuento,
//     descuentoFinal,
// });

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const cuponDiscount = document.getElementById("CuponDiscount");
    const numCupon = cuponDiscount.value;

    //Llamar a la funcion que escogimos para calcular el descuento
    const precioDescuento = totalDescuento(priceValue,discountValue, numCupon); 

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + precioDescuento;
}