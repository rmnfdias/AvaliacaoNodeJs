const express = require ('express')
const ControllerApi = require ('../controllers/api')

const router = express.Router();


router.post('/api/somar', ControllerApi.Somar)
router.post('/api/subtrair', ControllerApi.Subtrair)
router.post('/api/multiplicar', ControllerApi.Multiplicar)
router.post('/api/dividir', ControllerApi.Dividir)
router.post('/api/potencia', ControllerApi.Potencia)
router.post('/api/raiz', ControllerApi.Raiz)


module.exports = router