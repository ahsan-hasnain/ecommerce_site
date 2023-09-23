import React, { useContext, useState } from "react";
import { ProdCartCon } from "./mycontext";
import prod from "../components/Products";
const CartProd = (props)=>{
    const x = []
    const [prods, setprods] = useState([])
    const addToCart=(product)=>{
        setprods([...prods, product])

    }
    return(
        <ProdCartCon.Provider value={{prods, setprods, addToCart}}>
            {props.children}
        </ProdCartCon.Provider>
    )    
}
export default CartProd
