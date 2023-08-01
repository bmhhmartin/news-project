import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/white-logo.png';
import { getCategory } from '../ApiRequest/ApiRequest';

const Layout = (props) => {

    const [categories,SetCategories]=useState([]);

    useEffect(()=>{

        (async () => {
           let result= await getCategory();
           SetCategories(result);
        })()

    },[]);

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="NavBar">
                <Container fluid={true}>
                    <Navbar.Brand>
                        <Link to='/' style={{color: "white"}}>
                            <img src={logo} alt="logo" style={{width: "50px"}} />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link> */}
                    </Nav>
                    <Nav>
                        <ul>
                            <li><NavLink  to={'/'}>হোম</NavLink>  </li>
                            {
                                categories.map((item,i)=>{
                                    return <li key={i.toString()}><NavLink  to={'/by-category/'+item['id']}>{item['name']}</NavLink>  </li>
                                })
                            }
                        </ul>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {props.children}
        </div>
    );
};

export default Layout;