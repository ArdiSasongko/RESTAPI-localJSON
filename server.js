const express = require("express")
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 8000

const router = require("./router/router")

app.use(cors())

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req,res)=>{
    res.status(200).send("Response Success");
    console.log("Response Success")
})

app.use('/v1', router)

app.listen(PORT, ()=>{
    console.log(`Server Running in http://localhost:${PORT}`)
})