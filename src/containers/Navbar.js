import React, { useEffect, useState } from 'react'
import { Col, Row, Container, Form, Modal, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { getLocalStorage, isItNull, setLocalStorage } from './functions';

// import '../assets'

const NavbarS = () => {

    const [searchstring, setsearchstring] = useState('');

    let token = getLocalStorage("tochen");
    let history = useHistory();
    if (isItNull(token)) {
        history.push('/login');
    }


    const [signoutClick, setsignoutClick] = useState(false);
    const toggleSignOutClick = () => setsignoutClick(!signoutClick);

    const handleSignOut = () => {
        setLocalStorage("tochen", '');
        toggleSignOutClick();
        history.push('/login');
    }

    return (




        <>
            <div class="header">
                <Container>
                    <Row>
                        <Col class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="headerTop d-flex align-items-center w-100">
                                <div class="navbar navbar-expand">
                                    <div class="headrLeftSide d-flex align-items-center w-100">
                                        <div class="topbar-logo-header cursorPointer"
                                            onClick={() => window.location.replace("/admin")}
                                        >
                                            <img src={require(`../assets/img/logo.svg`).default} />
                                        </div>
                                        {/* <div class="search-bar flex-grow-1">
                                            <Form.Group className="searchBox" controlId="formBasicEmail">
                                                <Form.Control type="text" placeholder="Type to search..." name='searchstring' onChange={(e) => setsearchstring(e.target.value)} value={searchstring} />
                                                <img alt="img" src={require(`../assets/img/search.svg`).default} />
                                            </Form.Group>
                                        </div>                                */}

                                        <div class="ms-auto d-flex align-items-center">
                                            <div class="logoutIcon cursorPointer">
                                                <img onClick={toggleSignOutClick} src={require(`../assets/img/logout.svg`).default} />
                                            </div>
                                            <div class="user-box d-flex align-items-center">
                                                <img alt="User" class="mr-2" src={require(`../assets/img/user.svg`).default} />
                                                <div>
                                                    <h4 class="mb-0">John Yang</h4>
                                                    <p class="mb-0">Admin Master</p>
                                                </div>
                                                {/* <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        <img src={require(`../assets/img/profile.svg`).default} />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <h1>Hii There !!!</h1>
                                                        <Dropdown.Item onClick={toggleSignOutClick}>Sign Out</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div class="marginTop"></div>


            <Modal show={signoutClick} onHide={toggleSignOutClick} centered>
                {/* <Modal.Header closeButton>
                    <Modal.Title><h2 class="modalHeading">Sign Out</h2></Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <h2 class="modalTitle text-center">Are you sure you want to Sign Out ???</h2>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleSignOut}>
                        No
                    </Button>
                    <Button className="usButton" variant="primary" onClick={handleSignOut}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* <Modal show={signoutClick} onHide={toggleSignOutClick}>

                <h1>Are you sure you want to Sign Out ???</h1>
                <Button variant="secondary" onClick={handleSignOut}>
                    Yes
                </Button>

            </Modal> */}


        </>
    )
}

export default NavbarS