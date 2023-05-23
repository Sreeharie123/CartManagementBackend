import express from "express"
import { addCart, editCart } from "../controller/cart"


const route=express.Router()


//add cart
route.post('/add',addCart)


//edit cart
route.put("/edit/:id",editCart)
 
export const cartRoute=route