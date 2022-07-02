function validaErro(array, num){
    try{    
        if(!array && !num){
            throw new ReferenceError("Parâmetros não encontrados!");
        }
        if(typeof array !== 'object'){
            throw new TypeError("Array não é objeto");
        }
        if(typeof num !== 'number'){
            throw new TypeError("Número precisa ser do tipo number");
        }
        if(array.length !== num) {
            throw new RangeError('Tamanho não é valido!');
        }
    }
    catch (e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);
        } else if (e instanceof TypeError){
            console.log("este erro é um TypeError!");
            console.log(e.message);
        } else if (e instanceof RangeError){
            console.log("este erro é um RangeError!");
            console.log(e.message);
        } else {
            console.log("Tipo de erro indefinido!")
        }

    }
}

vetor = [1, 2, 'f', 'text'];
numero = 'a';
console.log(validaErro(vetor, numero));