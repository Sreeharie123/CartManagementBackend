import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import cores from "cors"
import { productRoute } from "./routes/product"
import { cartRoute } from "./routes/cart"

const app= express()
const PORT =8000
dotenv.config()


//middleware
app.use(express.json())
app.use(cores())

app.use("/product",productRoute)
app.use("/cart",cartRoute)


 

//mongoDB Connect
const MONGO_URL=process.env.MONGO_URL as string
mongoose.connect(MONGO_URL).then(()=>{
    console.log("Database connected successfully")
})


//listening the port 
app.listen(process.env.PORT||PORT,()=>{
    console.log(`server is listening ${PORT}`)
} )