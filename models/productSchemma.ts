
import mongoose from "mongoose"
import { productInterface } from "../interfaces/productInteface"


const productSchema= new mongoose.Schema<productInterface>({
   productName:String,
   imgUrl:String,
   price:Number,
   quantity:{
      type:Number,
      default:1
   }
},{timestamps:true})

export const productModel= mongoose.model("product",productSchema)