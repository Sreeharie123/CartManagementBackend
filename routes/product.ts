import express from "express"
import { addProduct, allProduct, deleteProduct } from "../controller/product"

const route=express.Router()

//Get all product
route.get('/all',allProduct)

//add product
route.post('/add',addProduct)

//deleteProduct
route.delete('/delete/:id',deleteProduct)


export const productRoute=route