function calcularPromedio(listaValores){
    //Metodo para recorrer lista y sumar con ciclo for
    var suma = 0;
    for(var i = 0; i < listaValores.length; i++){
        suma += listaValores[i];
    }

    //Metodo para recorrer lista y sumar con .reduce()
    const sumalista = listaValores.reduce(
        function(contadorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    var promedio = suma/listaValores.length;
    return promedio;

}


