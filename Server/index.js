const express = require("express")
const cors = require('cors')
const app = express()
const Users = require('./Routers/Users.js')
const db = require('./Servers/Users')
const dbproduto = require('./Servers/Products')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 10

app.use(express.json())
app.use(cors())

app.post('/register', (req, res) => {
    const email = req.body.emailCadastro
    const password = req.body.senhaCadastro

    db.query("SELECT * FROM usuarios WHERE email = ?", [email], 
    (err, result) => {
        if(err){
            res.send(err)
        }
        if(result.length == 0 ){
            bcrypt.hash(password, saltRounds, (err, hash) => {
                db.query("INSERT INTO usuarios (email, password) VALUES (?, ?)", [email, hash], (err, response) => {
                    if(err){
                        res.send(err)
                    }
                    res.send({msg: "CADASTRATADO"})
                })
            })
            
        }else {
            res.send({msg: "Já existe"})
        }
    })
})

app.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.senha

    db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
        if(err){
            res.send(err)
        }
        if(result.length > 0 ){
            bcrypt.compare(password, result[0].password, (erro, result) => {
                if(result){
                    const token = jwt.sign({
                        id: result.idusuarios,
                        email: result.email
                    }, 'segredo', {expiresIn: '1h'} )

                    res.send({
                        token: token,
                        msg: "Usuario logado com sucesso"
                    })
                }
                else {
                    return res.send({msg: "Senha está incorreta", })
                }
            })
        }else {
            res.send({msg: "Conta não encontrada"})
        }
    })
})


app.post('/produtos', (req, res) => {
    const {name} = req.body
    const {price} = req.body
    const {category} = req.body

    dbproduto.query("INSERT INTO tbprodutos (name, price, category) VALUES (?, ?, ?)", [name, price, category] , (err, res) => {
        console.log(err)
    })
})

app.get('/getCards', (req, res) => {
    dbproduto.query('SELECT * FROM tbprodutos', (err, result) => {
        if(err) console.log(err)
            else res.send(result)
    })
    
})

app.use('/users', Users)

app.listen(8080, () => {{
    console.log('connectado na porta 8080')
}})