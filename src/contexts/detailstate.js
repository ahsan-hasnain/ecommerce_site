import React, { useState } from "react";
import { DetailContext } from "./mycontext";
import prod from "../components/Products";
const DetailState = (props)=>{
    const s = []
    const [state, setstate] = useState(s)
    return(
        <DetailContext.Provider value={{state, setstate}}>
            {props.children}
        </DetailContext.Provider>
    )
}
export default DetailState