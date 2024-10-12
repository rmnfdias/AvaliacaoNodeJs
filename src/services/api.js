class ServiceApi {

    Somar(num1, num2){

        if(isNaN(num1) || isNaN(num2)){
            throw new Error("informe somente números")
        }

        return num1 + num2

    }

    Subtrair(num1, num2){

        if(isNaN(num1) || isNaN(num2)){
            throw new Error("informe somente números")
        }

        return num1 - num2


    }

    Multiplicar(num1, num2){

        if(isNaN(num1) || isNaN(num2)){
            throw new Error("informe somente números")
        }

        return num1 * num2


    }

    Dividir(num1, num2){

        if(isNaN(num1) || isNaN(num2)){
            throw new Error("informe somente números")
        }

        return num1 / num2


    }

    Potencia(num1, num2){

        if(isNaN(num1) || isNaN(num2)){
            throw new Error("informe somente números")
        }

        return num1 ** num2


    }

    Raiz(num1){

        if(isNaN(num1)){
            throw new Error("informe somente números")
        }

        return Math.sqrt(num1)


    }



    

}

module.exports = new ServiceApi()