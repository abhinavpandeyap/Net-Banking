const express = require('express')
const app = express()
const cors = require('cors')
const bodyparser = require('body-parser')

app.use(cors('*'))
app.use(bodyparser.json())
//using router in server
const routerAccount =  require('./router/account')
const routerAdmin =  require('./router/admin')
const routerCustomer = require('./router/customer')
const routerStaff  =  require('./router/staff')

app.use('/customer',routerCustomer)
app.use('/account', routerAccount)
app.use('/staff', routerStaff)
app.use('/admin', routerAdmin)

app.get('/',(req,resp)=>{
  resp.send("hiii")
})

app.listen(3000, '0.0.0.0', () => {
  console.log(`Example app listening on port 3000`)
})