import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import apiConnector from '../../backendConnect/apiService';
import { getLocalStorage, isItNull, setLocalStorage } from '../../containers/functions';
import { Col, Row, Container, Dropdown, Form, Modal, Button } from 'react-bootstrap'
import DateTimePicker from '../../utils/DateTimePicker';
import ListItemAdminPage from '../../containers/ListItemAdminPage';

const Admin = () => {

    let token = getLocalStorage("tochen");

    // console.log(tochen, "QQQ");
    let history = useHistory();
    if (isItNull(token)) {
        history.push('/login');
    }


    const [resultData, setresultData] = useState([]);


    useEffect(() => {
        let data = {};

        apiConnector("getAllRecords", data, token)
            .then((res) => {
                console.log(res, "working");
                if (res.status === "SUCCESS") {
                    setresultData(res.data.result);
                    // console.log(res, "working");
                } else {
                    console.log("API failure", 'working');
                }
            })
            .catch((err) => {
                console.log(err);
            });


    }, []);


    const handleSignOut = () => {
        setLocalStorage("tochen", '');
        toggleSignOutClick();
        history.push('/login');
    }




    const pushtoaddpage = () => {
        history.push('/addcontent');
    }

    // const pushtoedit = (id) => {
    //     history.push(`/editAgency/${id}`);
    // }

    const [datetime, setdatetime] = useState('');




    const [signoutClick, setsignoutClick] = useState(false);

    const toggleSignOutClick = () => setsignoutClick(!signoutClick);




    return (
        <>



            <div class="dataPage">
                <div class="header">
                    <div class="container">
                        <Row>
                            <Col class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="headerTop d-flex align-items-center w-100">
                                    <div class="headrLeftSide d-flex align-items-center">
                                        <div class="toggle">
                                            <span>
                                                <img src={require(`../../assets/img/menu.svg`).default} />
                                            </span>
                                        </div>
                                        <h3 class="mb-0">Admin</h3>
                                    </div>
                                    <div class="ml-auto">
                                        <div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                    <img src={require(`../../assets/img/profile.svg`).default} />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <h1>Hello John</h1>
                                                    <Dropdown.Item onClick={toggleSignOutClick}>Sign Out</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div class="dataList">
                    <Container>

                        {/* <h1>{datetime}</h1>
                        <DateTimePicker setTime={setdatetime} /> */}



                        <Row>
                            <Col class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="d-flex align-items-center">
                                    <h3 class="dataHeading w-100">Agents/Authorities offices that provide marriage license for you in Los Angeles</h3>
                                    <div class="ml-auto">
                                        <Form.Group className="mb-3 searchBox" controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Search here..." />
                                            <img src={require(`../../assets/img/search.svg`).default} />
                                        </Form.Group>
                                    </div>
                                </div>
                                <div class="dataListBox">
                                    {
                                        resultData.length === 0
                                            ?
                                            null
                                            :
                                            <>
                                                {
                                                    resultData.map(
                                                        (item, index) => {
                                                            return (
                                                                <ListItemAdminPage item={item} />
                                                            )
                                                        }
                                                    )
                                                }



                                            </>
                                    }
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div class="pagination">
                    <Container>
                        <Row>
                            <Col class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <ul class="d-flex align-items-center justify-content-center">
                                    <li>
                                        <img src={require(`../../assets/img/leftArrow.svg`).default} />
                                    </li>
                                    <li>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                    <li>
                                        <img src={require(`../../assets/img/rightArrow.svg`).default} />
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div class="footerBottom text-center">
                    <Container>
                        <Row>
                            <Col class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="footerText text-center">
                                    <p class="mb-0">2022 &copy; USA Marriage</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>



            <Modal show={signoutClick} onHide={toggleSignOutClick}>

                <h1>Are you sure you want to Sign Out ???</h1>
                <Button variant="secondary" onClick={handleSignOut}>
                    Yes
                </Button>

            </Modal>



           



            {/* <div>


                List of all the records



                <h1 onClick={handleSignOut}><b>Sign Out</b></h1>

                <h1 onClick={pushtoaddpage}>Add Content</h1>

                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Buttons</th>
                            </tr>
                        </thead>
                        <tbody>


                            {
                                resultData.length === 0
                                    ?
                                    null
                                    :
                                    <>
                                        {
                                            resultData.map(
                                                (item, index) => {
                                                    return (
                                                        < tr >
                                                            <td>{item.title} || {item._id}</td>
                                                            <td>{item.address}</td>
                                                            <td><span onClick={() => pushtoedit(item._id)}>Edit</span><span>Delete</span></td>
                                                        </tr>
                                                    )
                                                }
                                            )
                                        }



                                    </>
                            }

                        </tbody>
                    </table>
                </div>

            </div> */}

        </>
    )
}

export default Admin