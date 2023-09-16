import React, { useContext } from "react";
import { useState } from "react";
import '../components/nav.css';
import prod from "../components/Products";
import { DetailContext, ProdCartCon } from "../conexts/mycontext";
import { Button, Card, CardImg } from "reactstrap";
function Cart(){
    const a = useContext(ProdCartCon)
    
   
    return(
        <div>
           <h1>Products in Cart</h1>
           <div style={{display:'inline-flex'}}>
           <p>{a.prods.map((item)=>{
               return(
                <div style={{display:'inline-flex'}}>
                <div className="productslist" style={{width:'60%'}}>
                  <div style={{display: 'inline-flex',margin:'20px'}}> <img style={{height:'200px'}} src={item.url}></img> 
                  <div>
                  <h4 style={{paddingTop:'5px', marginInlineStart:'90px'}}>{item.name}</h4>
                  <p style={{marginInlineStart:'90px', opacity:'0.4'}}>{item.description}</p>
                  <h6 style={{marginInlineStart:'90px'}}>Price: {item.price}</h6>
                  </div>
                  </div>
                  
                 </div>
                 </div>
               )

           })}
           </p>
           <div style={{marginRight:'300px'}}>
                <p>{}</p>
            </div>
            </div>
        </div>
    )
    }
export default Cart