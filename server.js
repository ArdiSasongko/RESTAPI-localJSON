const express = require("express")
const app = express()
const cors = require("cors")
const bodyparser = require("body-parser")
const PORT = process.env.PORT || 8000

const router = require("./router/router")

app.use(cors())

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

app.get('/', (req,res)=>{
    res.status(200).send("Response Success");
    console.log("Response Success")
})

app.use('/v1', router)

app.listen(PORT, ()=>{
    console.log(`Server Running in http://localhost:${PORT}`)
})