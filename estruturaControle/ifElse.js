const imprimirResultado = function(num){
    if(num >= 7) {
        console.log('Aprovado!')
    } else{
        console.log('Reprovado!')
    }
}
imprimirResultado(5)
imprimirResultado(10)
imprimirResultado('epa') //cuidado!!!

imprimirResultado(-1)