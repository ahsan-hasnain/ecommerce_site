import React, { useContext, useState } from "react";
import { ProdCartCon } from "./mycontext";
import prod from "../components/Products";
const CartProd = (props)=>{
    const x = []
    const [prods, setprods] = useState(x)
    return(
        <ProdCartCon.Provider value={{prods, setprods}}>
            {props.children}
        </ProdCartCon.Provider>
    )    
}
export default CartProd
