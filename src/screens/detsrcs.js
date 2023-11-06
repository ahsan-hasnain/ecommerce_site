import React, { useContext } from "react";
import '../index.css';
import { useState } from "react";
import '../components/nav.css';
import prod from "../components/Products";
import { ProdCartCon } from "../contexts/cartprods";
import { Button, Card, CardBody, CardFooter, CardHeader, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import { useParams } from "react-router-dom";
function Detsrc(){
    const cart = useContext(ProdCartCon)
    const {productId} = useParams();
    const item = prod.find(product=>{
         return product.id === productId
    })
    const [Quantity, setQuantity] = useState(1)
    return(
        <div>
           
                <div style={{display: 'inline-flex', marginLeft: '15%'}} className="container">
                    <Card style={{height: '50%', width: '40%'}}>
                        <CardBody>
                            <CardImg src={item.url}></CardImg>
                        </CardBody>
                    </Card>
                    <Card style={{ height: '50%', width: '40%'}}>
                        <CardHeader>
                        <CardTitle><h1>{item.ad}</h1></CardTitle>
                        <CardSubtitle><h2 style={{color: "gray"}}>{item.company}</h2></CardSubtitle>
                        </CardHeader>
                        <CardBody>
                       
                        <h3 style={{textAlign: 'center'}}>{item.name}{' '}<span>{item.price}</span></h3>
                        <p>{item.description}</p>
                        <br/><br/><br/><br/><br/><br/><br/>
                        </CardBody>
                        <CardFooter>

                            <div className="quantitySelector">
                            <p><Button  type="number" value={Quantity}  onClick={()=>setQuantity(Quantity-1)}>-</Button><span style={{paddingInlineEnd:'125px', paddingInlineStart:'125px'}}>Quantity: {Quantity}</span> <span><Button  type="number" value={Quantity}  onClick={()=>setQuantity(Quantity+1)}>+</Button></span></p>
                            </div>
                            
                            <Button disabled={cart.prods.some(i=>i.id ===item.id)} style={{width: '99%'}} onClick={()=>{
                                cart.addToCart(item)
                                }}>{cart.prods.some(i=>i.id ===item.id)?'Added to Cart':'Add to Cart'}</Button>
                        </CardFooter>

                    </Card>
                </div>
           
        </div>
    )
}
export default Detsrc