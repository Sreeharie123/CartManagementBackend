
import mongoose from "mongoose"
import { productInterface } from "../interfaces/productInteface"


const productSchema= new mongoose.Schema<productInterface>({
   productName:String,
   imgUrl:String,
   quantity:Array
})

export const productModel= mongoose.model("product",productSchema)