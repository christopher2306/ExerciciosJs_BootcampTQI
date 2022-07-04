function numerosPares(vetor) {
    for (let i = 0; i < vetor.length; i++){
        if(vetor[i] === 0){
            console.log("Você já é zero!!");
        } else if (vetor[i] % 2 === 0){
            vetor[i] = 0;
        }
    }
    return vetor;
}

let vet = [1, 5, 8, 10, 13, 29];
console.log(numerosPares(vet));