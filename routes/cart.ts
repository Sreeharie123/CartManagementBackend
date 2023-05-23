import express from "express"
import { addCart, allCart, editCart } from "../controller/cart"


const route=express.Router()

//Get All Cart
route.get('/all',allCart)

//add cart
route.post('/add',addCart)

//edit cart
route.put("/quantity/:productId",editCart)
 
export const cartRoute=route