import express from "express"
import { CartLength, addCart, allCart, editCart, lessCart } from "../controller/cart"


const route=express.Router()

//Get All Cart
route.get('/all',allCart)

//add cart
route.post('/add',addCart)

//edit cart
route.put("/add",editCart)

//les cart
route.put("/less",lessCart)

//length
route.get('/length',CartLength)
 
export const cartRoute=route