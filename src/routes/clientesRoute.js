const express = require("express")
const router = express.Router()
const controller = require("../controllers/clientesController")

router.get("/", controller.get)
//router.get("/clientes", controller.getClientes)
router.get("/:cpf", controller.getCpf)
router.get("/compradores", controller.getCompradores)
router.post("/", controller.post)

module.exports = router
