import React from "react";
import '../index.css';
import './nav.css';
import prod from "./Products";
import Item from "./item";
export function Accessories(){
    const Accessories = prod.filter(item => {
      return item.ad === 'accesories';
    })
    return(
        <div>
            <br></br><h1 style={{textAlign:"center"}}>Accessories</h1>
        <div className="cards">
         {Accessories.map((element)=>{
             return(
                <Item name={element.name} price={element.price} id={element.id} company={element.compnay} url={element.url}></Item>
           )
        })}
  </div>
      </div>
    )
}
export default Accessories;

