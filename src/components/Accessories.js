import React from "react";
import '../index.css';
import './nav.css';
import prod from "./Products";
import { Card, CardImg, CardBody, CardHeader, CardSubtitle, CardTitle, CardFooter } from "reactstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DetailContext } from "../conexts/mycontext";
export function Accessories(){
    console.log('working');
    const de = useContext(DetailContext)
  
    const Accessories = prod.filter(item => {
      return item.ad === 'accesories';
    })
    return(
        <div>
            <br></br><h1>Accessories</h1>
        <div className="cards">
         {Accessories.map((element)=>{
             return(
                <Link to='/detsrc'>
                <div className="caard" >
                    <Card color="light" style={{width: '220px'}} onClick={()=>{de.setstate([{name: element.name,
                    company: element.compnay,
                    url: element.url,
                    price: element.price,
                    ad: element.ad,
                    description: element.description}])}}>
                        <CardHeader>
                        <CardTitle className="text text-centre">{element.name}</CardTitle>
                        <CardSubtitle>{element.compnay}</CardSubtitle>
                        </CardHeader>
                        <CardImg src={element.url}></CardImg>
                        <CardFooter>Price: {element.price}</CardFooter>
                        


                    </Card>
                </div>
                </Link>
           )
        })}
  </div>
      </div>
    )
}
export default Accessories;

