export interface cartInterface{
    id?:string,
    carts:CartItem[]
    createdAt?: number
    updatedAt?: number
}

interface CartItem{
    productName:string,
    imgUrl:string,
    price:number,
    quantity:number
}