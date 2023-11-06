
import React, { useState } from "react";
import { createContext } from 'react';

export const ProdCartCon = createContext();
const CartProd = (props)=>{
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
