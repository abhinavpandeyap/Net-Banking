const express = require('express')
const router  = express.Router()
const cryptojs = require('crypto-js')
const db = require('../db')
const util = require('../util')
router.post("/signin", (req,resp)=>{
    
    const {custid , password} = req.body

    const encrpPass = cryptojs.MD5(password)

    const query  = `select a.accNo, a.custid 
                    from account a inner join customer c on a.${custid} = c.${custid}
                    where c.password = '${encrpPass}' and status=1`

    db.query(query, (error,result)=>{
        resp.send(util.createResult(error,result))
    })
})

router.get('/balance', (req,resp)=>{
    const {accNo} = req.body

    const query = `select balance from account where accNo = ${accNo}`

    db.query(query, (error, result) => {
        resp.send(util.createResult(error, result))
    })
})

router.put('/withdraw', (req,resp)=>{
    const {accNo, amount} = req.body
    const query = `update account set balance = balance - ${amount} where accNo = ${accNo}`
    db.query(query, (error,result) => {
        resp.send(util.createResult(error,result))
    })
})

router.put('/deposit', (req,resp)=>{
    const {accNo, amount} = req.body
    const query = `update account set balance = balance + ${amount} where accNo = ${accNo}`
    db.query(query, (error,result) => {
        resp.send(util.createResult(error,result))
    })
})

router.put('/transfer', (req,resp)=>{
    const {saccNo, raccNo, amount} = req.body
    var query = `update account set balance = balance - ${amount} where accNo = ${saccNo};`
    query+= `update account set balance = balance + ${amount} where accNo = ${raccNo};`
    query+=`update transaction set trantype='transfer'`
    db.query(query, (error,result) => {
        resp.send(util.createResult(error,result))
    })
   
})

module.exports = router