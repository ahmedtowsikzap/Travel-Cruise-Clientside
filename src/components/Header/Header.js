import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <>
                <Navbar bg="dark" variant="dark" sticky='top' collapseOnSelect expand='lg'>
                    <Container>
                        <Navbar.Brand href="/home">TᖇᗩᐯEᒪ 𝘤𝓇𝓊𝒾𝓈𝑒</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-around">
                            <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to="/manageService">My Plans</Nav.Link>
                            {

                                user.email ? <button className='btn b btn-outline-danger btn-rounded my-3 px-5' onClick={logOut}> Log out</button>
                                    :
                                    <Nav.Link className='text-white' as={Link} to="/login">Sign in</Nav.Link>

                            }
                            <Navbar.Text>
                                Signed in as: {user.email && <a href="#login">{user.displayName} <img className='user-img' src={user.photoURL} alt="" /></a>}
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </>
    );
};

export default Header;