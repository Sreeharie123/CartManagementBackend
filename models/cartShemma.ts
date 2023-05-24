import mongoose from "mongoose"
import { cartInterface } from "../interfaces/cartSchema"

const cartSchema= new mongoose.Schema<cartInterface>({

 productId:String,
 imgUrl:String,
 price:Number,
 productName:String,
 quantity:{
   type:Number,
   default:1
 }

},{timestamps:true})

export const cartModel =mongoose.model('cart',cartSchema)