import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css'
import {
    Navbar,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
import '../App.css';
import { Link } from 'react-router-dom';
function Navmenu() {
    return(
       <div className='navbar'>
        <Fragment>
            <Navbar color='dark' expand='md'>
                <Nav>
                <NavItem>
                    <Link to='/'>
                    <NavLink to='/' style={{color: 'white'}}>Home</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to='/cart'>
                    <NavLink to='/cart' style={{color: 'white'}}>Cart</NavLink>
                    </Link>
                </NavItem>
                <NavItem>
                    <NavLink to='/cart' style={{color: 'white'}}>Sign In</NavLink>
                </NavItem>
                </Nav>
            </Navbar>
        </Fragment>
       </div>

    )
}
export default Navmenu;