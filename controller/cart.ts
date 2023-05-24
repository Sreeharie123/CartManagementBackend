import { Request, Response } from "express";
import { cartModel } from "../models/cartShemma";
import { cartInterface } from "../interfaces/cartSchema";

//Creating a cart
export const addCart= async(req:Request,res:Response)=>{
    const{productName,imgUrl,price,productId,quantity}=req.body
    try {
        const newCart=new cartModel<cartInterface>({
            productName,
            imgUrl,
            price,
            productId,
            quantity
        })
         const isCart = await cartModel.findOne({productId:req.body.productId})
         if(isCart){
             await cartModel.updateOne(req.body.quantity,{$inc:{quantity:1}})
             res.status(200).json("Quantity is updated")
         }else{
            await newCart.save()
            res.status(200).json("new cart is added")
         }
    } catch (error) {
         
        res.status(500).json(error)
    }
}

//updateQuantity
export const editCart= async (req:any,res:Response)=>{
   
    try {
        const updateCart= await cartModel.findByIdAndUpdate(req.body.productId,{$inc:{quantity:1}},{new:true})
        if(!updateCart) return res.status(404).json("not updated the cart")
        res.status(200).json("updated the quantity")
       
    } catch (error) {
        res.status(500).json(error)
    }
}

export const lessCart= async (req:any,res:Response)=>{
    try {
        const updateCart= await cartModel.findByIdAndUpdate(req.body.productId,{$inc:{quantity:-1}},{new:true})
        if(!updateCart) return res.status(404).json("not updated the cart")
        res.status(200).json("updated the quantity")
       
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

 //Get length of the cart
 export const CartLength= async(req:Request,res:Response)=>{

 try {
    const cartLength= (await cartModel.find()).length
   if(!cartLength) return res.status(500).json("cart not found")
    res.status(200).json(cartLength)
 } catch (error) {
    res.status(500).json(error)
 }

 }
