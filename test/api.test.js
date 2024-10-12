const {describe, it, expect} = require ('@jest/globals')
const ServiceApi = require('../src/services/api')

describe("Testando função Somar", () => {

    it("Somando dois números positivos", () => {

        const result = ServiceApi.Somar(1, 2)

        expect(result).toBe(3)

    })

    it("Somando um número e uma letra", () => {

        const result = () => ServiceApi.Somar(1, "a")

        expect(result).toThrow('informe somente números')

    })

})

describe("Testando função Subtrair", () => {
    
    it("Subtraindo dois números positivos", () => {

        const result = ServiceApi.Subtrair(1, 2)

        expect(result).toBe(-1)

    })

    it("Subtraindo um número e uma letra", () => {

        const result = () => ServiceApi.Subtrair(1, "a")

        expect(result).toThrow('informe somente números')

    })
})

describe("Testando função Multiplicar", () => {
    
    it("Multiplicando dois números positivos", () => {

        const result = ServiceApi.Multiplicar(1, 2)

        expect(result).toBe(2)

    })

    it("Multiplicando dois números negativos", () => {

        const result = ServiceApi.Multiplicar(-1, -2)

        expect(result).toBe(2)

    })

    it("Multiplicando um número negativo e um positivo", () => {

        const result = ServiceApi.Multiplicar(-1, 2)

        expect(result).toBe(-2)

    })


    it("Multiplicando um número e uma letra", () => {

        const result = () => ServiceApi.Multiplicar(1, "a")

        expect(result).toThrow('informe somente números')

    })
})

describe("Testando função Dividir", () => {
    
    it("Divisão dois números positivos", () => {

        const result = ServiceApi.Dividir(4, 2)

        expect(result).toBe(2)

    })

    it("Divisão de dois números negativos", () => {

        const result = ServiceApi.Dividir(-4, -2)

        expect(result).toBe(2)

    })

    it("Divisão de um número positivo e um negativos", () => {

        const result = ServiceApi.Dividir(4, -2)

        expect(result).toBe(-2)

    })

    it("Divisão de um número e uma letra", () => {

        const result = () => ServiceApi.Dividir(1, "a")

        expect(result).toThrow('informe somente números')

    })
})

describe("Testando função Potência", () => {
    
    it("Exponenciação de dois números positivos", () => {

        const result = ServiceApi.Potencia(2, 4)

        expect(result).toBe(16)

    })

    it("subtraindo 1 número e uma letra", () => {

        const result = () => ServiceApi.Potencia(1, "a")

        expect(result).toThrow('informe somente números')

    })
})

describe("Testando função Raiz", () => {
    
    it("Radiação de um número negativo", () => {

        const result = ServiceApi.Raiz(-2)

        expect(result).toBe(NaN)

    })

    it("Radiação de uma letra", () => {

        const result = () => ServiceApi.Raiz("a")

        expect(result).toThrow('informe somente números')

    })
})