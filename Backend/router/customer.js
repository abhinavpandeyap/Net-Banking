const express = require('express')
const router  = express.Router()
const cryptojs = require('crypto-js')
const db = require('../db')
const util = require('../util')

router.post('/signup', (req,resp)=> {
    
    const {name , addr, email, password, mobile} = req.body

    const encrpPass = cryptojs.MD5(password)

    const query = `insert into customer(name, addr, email, password, mobile)
                    values('${name}', '${addr}', '${email}', '${encrpPass}', '${mobile}')`

    db.query(query, (error,result)=>{
        resp.send(util.createResult(error, result))
    })
})

router.post('/signin', (req,resp)=>{
    const {email , password} = req.body

    const encrpPass = cryptojs.MD5(password)

    const query = `select custid, name, email, status from customer where email = '${email}' and password='${encrpPass}'`

    db.query(query , (error,result)=>{
        resp.send(util.createResult(error,result))
    })
})
module.exports = router