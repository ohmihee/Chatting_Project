const express = require('express')
const app = express()
const mysql = require('mysql')
const PORT = '4000'
const {sequelize} = require('./models')

sequelize.sync({ force: true, })
    .then(() => {
        console.log('access successful')
    }).catch((e) => {
        console.log(e,'access failed')
    })


app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})