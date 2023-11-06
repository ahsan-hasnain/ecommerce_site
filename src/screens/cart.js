import React, { useContext } from "react";
import '../components/nav.css';

import { ProdCartCon } from "../contexts/cartprods";
import { Button} from "reactstrap";
function Cart(){
    const cart = useContext(ProdCartCon)
    const sum = cart.prods.reduce(
        (accumulator, currentValue) => +accumulator + (+currentValue.price),
        0,
      ); 
    const shippingCost = 300;
    return(
        <div>
           <h1>Products in Cart</h1>
           <div style={{display:'inline-flex'}}>
           <p>{cart.prods.map((item)=>{
               return(
                <div style={{display:'inline-flex', borderRight: '2px solid  black', width: '60%'}}>
                <div className="productslist" style={{width:'80%'}}>
                  <div style={{display: 'inline-flex',margin:'20px'}}> <img style={{height:'200px'}} alt="" src={item.url}></img> 
                  <div>
                  <h4 style={{paddingTop:'5px', marginInlineStart:'90px'}}>{item.name} {''}</h4>
                  <p style={{marginInlineStart:'90px', opacity:'0.4'}}>{item.description}</p>
                  <h6 style={{marginInlineStart:'90px'}}>Price: {item.price}</h6>
                  </div>
                  </div>
                  
                 </div>
                 </div>
               )

           })}
           </p>
            {sum>0? <div style={{marginLeft:'900px', textAlign:'center', position: 'fixed'}}>
                <h2>Total Price: ${sum}</h2>
                <h3 style={{marginTop:'50px'}}>Shipping Cost: ${shippingCost}</h3>
                <h1 style={{border: '0.8px solid grey', width: '400px', marginTop:'99px'}}>Grand Total : ${shippingCost +sum}</h1>
                <Button style={{width: '200px', marginTop:'80px'}}>Order Now</Button>
                
            </div>:<p></p>}
            </div>
        </div>
    )
    }
export default Cart