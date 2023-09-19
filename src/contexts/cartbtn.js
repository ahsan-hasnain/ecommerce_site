import React, { useContext, useState } from "react";
import { CartButton } from "./mycontext";
import prod from "../components/Products";
const CartBtn = (props)=>{
    const q = [{title: 'Add to Cart',
    disabled: false}]
    const [btn, setbtn] = useState(q)
    return(
        <CartButton.Provider value={{btn, setbtn}}>
            {props.children}
        </CartButton.Provider>
    )
}
export default CartBtn
