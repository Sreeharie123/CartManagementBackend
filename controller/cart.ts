import { Request, Response } from "express";
import { cartModel } from "../models/cartShemma";
import { cartInterface } from "../interfaces/cartSchema";

//Creating a cart
export const addCart= async(req:Request,res:Response)=>{

    try {
        const newCart=new cartModel<cartInterface>({
            carts:req.body.item
        })
        if(!newCart) return res.status(500).json("Cart is not added")
        await newCart.save()
        res.status(200).json("added to cart")
    } catch (error) {
         
        res.status(500).json(error)
    }

}

//updateQuantity
export const editCart= async (req:Request,res:Response)=>{
   
    try {
        const updateQuantity= await cartModel.findByIdAndUpdate<cartInterface>(req.params.productId,{$set:req.body})
        if(!updateQuantity) return res.status(402).json("Quantity not updated")
        res.status(200).json("Quantity updated")
    } catch (error) {
        res.status(500).json(error)
    }
}


//Get All Cart
 export const allCart= async(req:Request,res:Response)=>{

    try {
        
        const allCart=await cartModel.find()
        if(!allCart) return res.status(400).json("No cart")
        res.status(200).json(allCart)
    } catch (error) {
        
        res.status(500).json(error)
    }

 }
