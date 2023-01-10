const express = require('express')
const router  = express.Router()
const cryptojs = require('crypto-js')
const db = require('../db')
const util = require('../util')

router.get('/', (req,resp)=> {  
    resp.send("hi")
})
router.post('/signup', (req,resp)=> {
    
    const {name , addr, email, password, mobile, status} = req.body

    const encrpPass = cryptojs.MD5(password)

    const query = `insert into customer(name, addr, email, password, mobile, status)
                    values('${name}', '${addr}', '${email}', '${encrpPass}', '${mobile}', ${status})`

    db.query(query, (error,result)=>{
        resp.send(util.createResult(error, result))
    })
})

router.post('/signin', (req,resp)=>{
    const {email , password} = req.body

    const encrpPass = cryptojs.MD5(password)

    const query = `select name, email, status from customer where email = '${email}' and password='${encrpPass}'`

    db.query(query , (error,result)=>{
        resp.send(util.createResult(error,result))
    })
})
module.exports = router