function comparaNumero(num1, num2){
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}
 
function criaPrimeiraFrase(num1, num2){
    let saoIguais= '';
    if(num1 !== num2){
        saoIguais = 'Não';
    } else {
        saoIguais = '';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function criaSegundaFrase(num1, num2){
    let soma = num1 + num2;
    let result = '';
    if(soma > 20){
        result = `Sua soma é ${soma}, que maior que 10 e maior que 20.`
    } else if (soma>10 && soma<20){
        result = `Sua soma é ${soma}, que maior que 10 e menor que 20.`
    } else {
        result = `Sua soma é ${soma}, que menor que 10 e menor que 20.`

    }

    return `${result}`;
}

console.log(comparaNumero(2,11));

