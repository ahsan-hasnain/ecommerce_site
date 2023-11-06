import React from "react";
import '../index.css';
import './nav.css';
import prod from "./Products";
import {Item} from "./item";
export function Electronics(){
    const ElectricProducts = prod.filter(item => {
      return item.ad === 'electric';
    })
    return(
        <div>
            <br></br><h1 style={{textAlign:"center"}}>Electronics</h1>
        <div className="cards">
         {ElectricProducts.map((element)=>{
             return(
                <Item name={element.name} price={element.price} id={element.id} company={element.compnay} url={element.url}></Item>
           )
        })}
  </div>
      </div>
    )
}
export default Electronics;

