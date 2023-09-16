import React, { useContext } from "react";
import '../index.css';
import './nav.css';
import { Link } from 'react-router-dom';
import prod from "./Products";
import { Card, CardImg, CardBody, CardHeader, CardSubtitle, CardTitle, CardFooter } from "reactstrap";
import { DetailContext } from "../conexts/mycontext";
export function Electronics(){
    console.log('working');
    const det = useContext(DetailContext)
    const ElectricProducts = prod.filter(item => {
      return item.ad === 'electric';
    })
    return(
        <div>
            <br></br><h1>Electronics</h1>
        <div className="cards">
         {ElectricProducts.map((element)=>{
             return(
                <Link to='/detsrc'>
                <div className="caard" >
                    <Card color="light" style={{width: '220px'}} onClick={()=>{det.setstate([{name: element.name,
                    company: element.compnay,
                    url: element.url,
                    price: element.price,
                    ad: element.ad,
                    description: element.description,
                    incart: element.incart}])}}>
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
export default Electronics;

