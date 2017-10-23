/**
 * Created by kuda on 05.07.2017.
 */

import React from 'react';
import './NavbarComponent.css';
import {Icon, Navbar, NavItem, Row} from 'react-materialize';
import logo from "../../images/logo-abb.png";


class NavbarComponent extends React.Component {

    render() {
        return (

            <div className="container">
                <Row>
                    <Navbar href='#!' brand={<img id="image-logo" alt="logo" className="my-logo" src={logo}/>} right
                            className='grey lighten-4 '>

                        <NavItem href='#!'><Icon className='grey-text darken-3'>search</Icon></NavItem>
                        <NavItem href='#!'> <a className="grey-text ">About</a></NavItem>
                        <NavItem href='#!'> <a className="grey-text ">Login</a></NavItem>

                    </Navbar>


                </Row>
            </div>



        )
    }


}

export default NavbarComponent;