// var precioOriginal;
// var descuento;

function totalDescuento(precioOriginal,descuento){
    var descuentoFinal = (precioOriginal*(100-descuento))/100;
    
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

    //Llamar a la funcion que escogimos para calcular el descuento
    const precioDescuento = totalDescuento(priceValue,discountValue); 

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precion con descuento es: $" + precioDescuento;
}