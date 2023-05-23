import { Request, Response } from "express";
import { productModel } from "../models/productSchemma";
import { productInterface } from "../interfaces/productInteface";

export const addProduct= async(req:Request,res:Response)=>{
    try {
        const newProduct = new productModel<productInterface>({
                   productName:req.body.productName,
                   imgUrl:req.body.imgUrl,
                   quantity:req.body.quantity
        })
        if(!newProduct) return res.status(400).json("product not added")

        const saveProduct=newProduct.save()
        res.status(200).json("product added successfully")

    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteProduct= async(req:Request,res:Response)=>{
    try {
        const deleteProduct= await productModel.findByIdAndDelete(req.params.id)
        res.status(200).json("product deleted successfully")
    } catch (error) {
        res.status(500).json(error)
    }

}