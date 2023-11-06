import React from "react";
import '../index.css';
import './nav.css';
import { Card, CardImg, CardHeader, CardSubtitle, CardTitle, CardFooter } from "reactstrap";
import { Link } from "react-router-dom";





export function Item(props){

        return(
        <div>
        <div className="cards">
                <Link to={`/detsrc/${props.id}`}>
                <div className="caard" >
                    <Card color="light" style={{width: '220px'}} >
                        <CardHeader>
                        <CardTitle className="text text-centre">{props.name}</CardTitle>
                        <CardSubtitle>{props.compnay}</CardSubtitle>
                        </CardHeader>
                        <CardImg src={props.url}></CardImg>
                        <CardFooter>Price: {props.price}</CardFooter>
                        


                    </Card>
                </div>
                </Link>
  </div>
      </div>
    )
}
export default Item;

