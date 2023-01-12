const express = require('express')
const router = express.Router()
const cryptojs = require('crypto-js')
const db = require('../db')
const util = require('../util')


router.post('/signup', (req, resp) => {

    const { name, email, password } = req.body

    const encrpPass = cryptojs.MD5(password)

    const query = `insert into staff(name, email, password)
                    values('${name}', '${email}', '${encrpPass}')`

    db.query(query, (error, result) => {
        resp.send(util.createResult(error, result))
    })
})

router.post('/signin', (req, resp) => {
    const { email, password } = req.body

    const encrpPass = cryptojs.MD5(password)

    const query = `select name, email from staff where email = '${email}' and password='${encrpPass}'`

    db.query(query, (error, result) => {
        resp.send(util.createResult(error, result))
    })
})


router.post('/addAcc', (req, resp) => {
    const { custid, balance } = req.body

    var query = `insert into account(custid,balance)
    values(${custid},${balance});`

    query+=`update customer set status=1 where custid=${custid}`
    

    db.query(query, (error, result) => {
        resp.send(util.createResult(error, result))
    })

   
})

router.get('/getAcc', (req, resp) => {
    const { custid } = req.body

    const query = `select c.custid,c.name,c.addr,c.email,c.mobile,a.balance 
    from customer c inner join account a 
    on c.custid=${custid} and a.custid=${custid}`

    db.query(query, (error, result) => {
        resp.send(util.createResult(error, result))
    })
})

router.delete('/delAcc', (req, resp) => {
    const { custid } = req.body

    var query = `delete from account where custid=${custid};`

    query+= `update customer set status=0 where custid=${custid}`

    db.query(query, (error, result) => {
        resp.send(util.createResult(error, result))
    })

   })

router.put('/updateAcc',(req,resp)=>{
    const {custid,addr}=req.body

    const query= `update customer set add='${addr}' where custid=${custid}`

    db.query(query, (error, result) => {
        resp.send(util.createResult(error, result))
    })
})


module.exports = router