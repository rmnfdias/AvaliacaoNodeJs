const ServiceApi = require ('../services/api')

class ControllerApi{

    Somar(req, res){

        try {
            
            const num1 = req.body.num1
            const num2 = req.body.num2

            const resultado = ServiceApi.Somar(num1, num2)
            
            res.status(200).json({resultado})
        
        } catch (error) {
            
            console.error(error)
            res.status(400).json({msg: error.message})

        }

    }


    Subtrair(req, res){

        try {
            
            const num1 = req.body.num1
            const num2 = req.body.num2

            const resultado = ServiceApi.Subtrair(num1, num2)
            
            res.status(200).json({resultado})
        
        } catch (error) {
            
            console.error(error)
            res.status(400).json({msg: error.message})

        }


    }

    Multiplicar(req, res){

        try {
            
            const num1 = req.body.num1
            const num2 = req.body.num2

            const resultado = ServiceApi.Multiplicar(num1, num2)
            
            res.status(200).json({resultado})
        
        } catch (error) {
            
            console.error(error)
            res.status(400).json({msg: error.message})

        }


    }

    Dividir(req, res){

        try {
            
            const num1 = req.body.num1
            const num2 = req.body.num2

            const resultado = ServiceApi.Dividir(num1, num2)
            
            res.status(200).json({resultado})
        
        } catch (error) {
            
            console.error(error)
            res.status(400).json({msg: error.message})

        }


    }

    Potencia(req, res){

        try {
            
            const num1 = req.body.num1
            const num2 = req.body.num2

            const resultado = ServiceApi.Potencia(num1, num2)
            
            res.status(200).json({resultado})
        
        } catch (error) {
            
            console.error(error)
            res.status(400).json({msg: error.message})

        }


    }

    Raiz(req, res){

        try {
            
            const num1 = req.body.num1
            
            const resultado = ServiceApi.Raiz(num1)
            
            res.status(200).json({resultado})
        
        } catch (error) {
            
            console.error(error)
            res.status(400).json({msg: error.message})

        }


    }
    
}

module.exports = new ControllerApi()