function isosceles(lado1, lado2, base){
    if(lado1 == lado2 && lado1 != base){
        const altura = Math.sqrt(lado1 * lado1-((base * base)/4));
        return "La altura es " + altura + " cm";

    }else if(lado1 == base && base != lado2){
        const altura = Math.sqrt(lado1 * lado1-((lado2 * lado2)/4));
        return "La altura es " + altura + " cm";

    }else if(lado2 == base && base != lado1){
        const altura = Math.sqrt(lado2 * lado2-((lado1 * lado1)/4));
        return "La altura es " + altura + " cm";

    }else{
        return "No es un tringulo Isosceles";
    }
}