import { Request, Response } from "express";
import { productModel } from "../models/productSchemma";
import { productInterface } from "../interfaces/productInteface";

//addProduct
export const addProduct= async(req:Request,res:Response)=>{
    const{productName,imgUrl,price}=req.body
    try {
        const newProduct = new productModel<productInterface>({
                   productName,
                   imgUrl,
                   quantity:1,
                   price
        })
        if(!newProduct) return res.status(400).json("product not added")

        const saveProduct=await newProduct.save()
        res.status(200).json(saveProduct)

    } catch (error) {
        res.status(500).json(error)
    }
}

//DeleteProduct
export const deleteProduct= async(req:Request,res:Response)=>{
    try {
        const deleteProduct= await productModel.findByIdAndDelete(req.params.id)
        res.status(200).json("product deleted successfully")
    } catch (error) {
        res.status(500).json(error)
    }

}

//GetAllProduct
export const allProduct= async (req:Request,res:Response)=>{
try {
    const allProduct =await productModel.find()
     if(!allProduct) return res.status(400).json("No product is found")
     res.status(200).json(allProduct)
} catch (error) {
    res.status(500).json(error)
}

}
