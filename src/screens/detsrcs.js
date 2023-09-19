import React, { useContext } from "react";
import '../index.css';
import { useState } from "react";
import '../components/nav.css';
import prod from "../components/Products";
import { CartButton, DetailContext, ProdCartCon } from "../contexts/mycontext";
import { Button, Card, CardBody, CardFooter, CardHeader, CardImg, CardSubtitle, CardTitle } from "reactstrap";
function Detsrc(){
    const c = useContext(DetailContext)
    const z = useContext(ProdCartCon)
    const b = useContext(CartButton)
    const [state, setstate] = useState()
    const [Quantity, setQuantity] = useState(1)
    return(
        <div>
           <p>{c.state.map((item, index)=>{
            return(
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
                            
                            <Button disabled={z.prods.some(i=>i.name ===item.name)} style={{width: '99%'}} onClick={()=>{
                                z.setprods([...z.prods,{
                                    name: item.name,
                                    price: item.price,
                                    url: item.url,
                                    description: item.description,
                                    incart: true,
                                    quantity: 4
                                }])
                                }}>{z.prods.some(i=>i.name ===item.name)?'Added to Cart':'Add to Cart'}</Button>
                        </CardFooter>

                    </Card>
                </div>
            )
           })}</p>
        </div>
    )
}
export default Detsrc