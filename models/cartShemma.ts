import mongoose from "mongoose"
import { cartInterface } from "../interfaces/cartSchema"

const cartSchema= new mongoose.Schema<cartInterface>({
   userId:String,
   products:Array
},{timestamps:true})


export const cartModel =mongoose.model('cart',cartSchema)