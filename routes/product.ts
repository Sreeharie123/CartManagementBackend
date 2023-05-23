import express from "express"
import { addProduct, deleteProduct } from "../controller/product"

const route=express.Router()


//add product
route.post('/add',addProduct)

//deleteProduct
route.delete('/delete/:id',deleteProduct)


export const productRoute=route