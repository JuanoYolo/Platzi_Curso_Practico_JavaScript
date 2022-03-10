
function calcularMediana(listaValores){
    var mitadLista = 0;
    mitadLista = listaValores.length /2;
    var mediana = parseInt(mediana);
    //Asi se usa el sort para ordenar de menor a mayor
    listaValores.sort((a, b) => a - b);

    if(listaValores.length % 2 == 0){  
        const elemento1 = listaValores[mitadLista -1 ];
        const elemento2 = listaValores[mitadLista];
        var medianaRealPar = 0;
        medianaRealPar = (elemento1+elemento2)/2;

        return medianaRealPar;
    }else{
        var mediana = 0;
        mediana = listaValores[mitadLista];    

        return mediana;
    }
}
