import mongoose from "mongoose"
import { cartInterface } from "../interfaces/cartSchema"

const cartSchema= new mongoose.Schema<cartInterface>({
   carts:[
      {
         productName:String,
         imgUrl:String,
         price:Number,
         quantity:Number 
      }
   ]
   
},{timestamps:true})

export const cartModel =mongoose.model('cart',cartSchema)