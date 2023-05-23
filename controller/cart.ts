import { Request, Response } from "express";
import { cartModel } from "../models/cartShemma";


export const addCart= async(req:Request,res:Response)=>{

    try {
        const newCart=new cartModel(req.body)
        if(!newCart) return res.status(500).json("Cart is not added")
        await newCart.save()
        res.status(200).json("added to cart")
    } catch (error) {
         
        res.status(500).json(error)
    }

}

export const editCart= async (req:Request,res:Response)=>{
    try {
        
        const updatedCart= await cartModel.findByIdAndUpdate(req.params.id)
          res.status(200).json("updated the cart")

    } catch (error) {
        res.status(500).json(error)
    }


}

