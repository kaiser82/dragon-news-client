import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <Navbar className='mb-3' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand ><Link className='text-decoration-none text-light' to='/'>Dragon News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                        <Button className='m-2' variant='outline-light' onClick={() => logOut()}>Logout</Button>
                                        <span className='mx-2 text-light d-flex align-items-center'>{user?.displayName}</span>
                                    </>
                                    :
                                    <>
                                        <Button className='m-2' variant='outline-secondary'><Link className='text-decoration-none text-light' to='/login'>Login</Link></Button>
                                        <Button className='m-2' variant='outline-secondary'><Link className='text-decoration-none text-light' to='/register'>Register</Link></Button>
                                    </>
                            }

                        </>
                        <Link to="/profile">
                            {user?.photoURL ?
                                <Image style={{ height: '40px' }} roundedCircle src={user.photoURL}></Image>
                                :
                                <FaUserAlt />
                            }
                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav ></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;