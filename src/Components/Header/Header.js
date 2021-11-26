import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    // console.log(user);
    return (
        <div>
            <div className="d-flex justify-content-between m-3">

                <h1>Go Travel</h1>
                <p>{<i class="bi bi-telephone-plus-fill"></i>} 01000000000</p>
            </div>
            <Nav className="justify-content-end" >
                <Nav.Item>
                    <Link to="/home">Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/services">Events
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/about">About
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/contact" >
                        Contact
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    {
                        user?.email && <Link to="/addevent" >
                            Add Event
                        </Link>
                    }

                </Nav.Item>
                <Nav.Item>
                    {
                        user?.email && <Link to="/myorder" >
                            My Order
                        </Link>
                    }

                </Nav.Item>
                <Nav.Item>
                    {
                        user?.email && <Link to="/manageorder" >
                            Manage Order
                        </Link>
                    }

                </Nav.Item>
                <p>{user?.displayName}</p>
                {
                    user?.email ?
                        <button onClick={logOut}>Sing Out</button>
                        :
                        <Nav.Item>
                            <Link to="singin" >
                                Sing In
                            </Link>
                        </Nav.Item>
                }

            </Nav>
        </div>
    );
};

export default Header;