const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
    res.send('faça login do seu usuario')
})

router.get('/register', (req, res) => {
    res.send('registre seu usuario')
})

router.get('/produtos', (req, res) => {
    res.send('Produtos a serem adicionados')
})

module.exports = router