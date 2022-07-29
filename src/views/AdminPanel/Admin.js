import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import apiConnector from '../../backendConnect/apiService';
import { getLocalStorage, isItNull, setLocalStorage } from '../../containers/functions';
import { Col, Row, Container, Dropdown, Form, Modal, Button, Navbar } from 'react-bootstrap'
import DateTimePicker from '../../utils/DateTimePicker';
import ListItemAdminPage from '../../containers/ListItemAdminPage';
import Loader from '../../containers/Loader';
import { toggleIconId } from '../../utils/Constants.js/Constants';
import NavbarS from '../../containers/Navbar';
import Footer from '../../containers/Footer';

const Admin = () => {

    let token = getLocalStorage("tochen");

    // console.log(tochen, "QQQ");
    let history = useHistory();


    if (isItNull(token)) {
        history.push('/login');
    }



    const [searchstring, setsearchstring] = useState('');
    const [isDataEmpty, setisDataEmpty] = useState(false);


    const [resultData, setresultData] = useState([]);
    const [totalcount, settotalcount] = useState();
    const [lastpage, setlastpage] = useState();

    const [currentpage, setcurrentpage] = useState(1);


    const [fourpage, setfourpage] = useState(4);


    let findLastPage = (count) => {
        return parseInt(count / 25) + (count % 25 == 0 ? 0 : 1);
    }

    useEffect(() => {


        let data =
        {
            search: searchstring,
            page: currentpage,
            pagination: 25
        };

        apiConnector("getAllRecords", data, token)
            .then((res) => {
                console.log(res.data, "working");
                if (res.status === "SUCCESS") {
                    setresultData(res.data.result);

                    // settotalcount(res.data.count);
                    // setlastpage((parseInt((res.data.count) / 25, 10) + 1));


                    if (res.data.result.length === 0) {
                        setisDataEmpty(true);
                    } else {
                        setisDataEmpty(false);
                    }

                    settotalcount(res.data.count);
                    setlastpage(findLastPage(res.data.count));


                    // console.log(res, "working");
                } else {
                    console.log("API failure", 'working');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [currentpage, searchstring]);



    useEffect(() => {
        setcurrentpage(1);
    }, [searchstring])



    useEffect(() => {
        if (currentpage >= lastpage - 2) {
            setfourpage(4);
        }
    }, [currentpage]);


    const setPaginationCurrentPage = (num) => {
        setresultData([]);
        setcurrentpage(num);
    }


    let paginationArray;
    if (fourpage == undefined) {
    } else {
        paginationArray = [
            <li className={`${currentpage == fourpage - 3 ? "activePagination" : ""}`} onClick={() => {
                setPaginationCurrentPage(fourpage - 3);
            }} >{fourpage - 3}</li>
            ,
            <li className={`${currentpage == (fourpage - 2) ? "activePagination" : ""}`} onClick={() => {
                setPaginationCurrentPage(fourpage - 2)
            }}>{fourpage - 2}</li>
            ,
            <li className={`${currentpage == fourpage - 1 ? "activePagination" : ""}`} onClick={() => {
                setPaginationCurrentPage(fourpage - 1)
            }}>{fourpage - 1}</li>
            ,
            <li className={`${currentpage == fourpage ? "activePagination" : ""}`} onClick={() => {
                setPaginationCurrentPage(fourpage)
            }}>{fourpage}</li>
            ,
            <li className={`${currentpage == fourpage + 1 ? "activePagination" : ""}`} onClick={() => {
                setPaginationCurrentPage(fourpage + 1)
                // setsearchresultdata();
            }}>{fourpage + 1}</li>
            ,
            <li className={`${currentpage == fourpage + 2 ? "activePagination" : ""}`} onClick={() => {
                setPaginationCurrentPage(fourpage + 2)
            }}>{fourpage + 2}</li>
            ,
            <li className={`${currentpage == fourpage + 3 ? "activePagination" : ""}`} onClick={() => {
                setPaginationCurrentPage(fourpage + 3)
            }}>{fourpage + 3}</li>
        ];
    }
















    // console.log(searchstring, "DIAB");



    useEffect(() => {

    }, [isDataEmpty])








    // const handleSignOut = () => {
    //     setLocalStorage("tochen", '');
    //     toggleSignOutClick();
    //     history.push('/login');
    // }




    const pushtoaddpage = () => {
        history.push('/addcontent');
    }

    // const pushtoedit = (id) => {
    //     history.push(`/editAgency/${id}`);
    // }

    // const [datetime, setdatetime] = useState('');




    // const [signoutClick, setsignoutClick] = useState(false);

    // const toggleSignOutClick = () => setsignoutClick(!signoutClick);
    // const [ariaexpanded, setariaexpanded] = useState(false);



    // const toggle = () => {
    //     setariaexpanded(!ariaexpanded);
    // }
    return (
        <>



            <div class="dataPage">

                <NavbarS />




                <div class="dataList">
                    <Container>

                        {/* <h1>{datetime}</h1>
                        <DateTimePicker setTime={setdatetime} /> */}



                        <Row>
                            <Col class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="d-flex align-items-center mb-2">
                                    <h3 class="dataHeading w-100 mb-0">Agents/Authorities offices that provide marriage license.</h3>


                                    <div class="search-bar flex-grow-1">
                                        <Form.Group className="searchBox" controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Type to search..." name='searchstring' onChange={(e) => setsearchstring(e.target.value)} value={searchstring} />
                                            <img alt="img" src={require(`../../assets/img/search.svg`).default} />
                                        </Form.Group>
                                    </div>
                                    {/* <Button className="usButton" onClick={pushtoaddpage}>Add Agency</Button> */}
                                    {/* <div class="ml-auto">
                                        <Form.Group className="mb-3 searchBox" controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Find by county,state or ZIP code" name='searchstring' onChange={(e) => setsearchstring(e.target.value)} value={searchstring} />
                                            <img src={require(`../../assets/img/search.svg`).default} />
                                        </Form.Group>
                                    </div> */}
                                </div>
                                <div class="dataListBox">
                                    {

                                        isDataEmpty ?
                                            'No Record FOund'
                                            :
                                            resultData.length === 0
                                                ?
                                                <Loader />
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





                                {
                                    lastpage == undefined || lastpage == 0 || lastpage == '' ? null :
                                        <>
                                            <ul className="d-flex align-items-center justify-content-center">

                                                {
                                                    currentpage == 1
                                                        ?
                                                        null
                                                        :
                                                        <li className=" arrowRight" onClick={() => {
                                                            if (currentpage <= 4) {
                                                                setPaginationCurrentPage(currentpage - 1);
                                                                // setsearchresultdata();
                                                            }
                                                            else {
                                                                setfourpage(currentpage - 1);
                                                                setPaginationCurrentPage(currentpage - 1);
                                                                // setsearchresultdata();
                                                            }
                                                        }}>
                                                            <img src={require(`../../assets/img/leftArrow.svg`).default} />
                                                        </li>
                                                }

                                                {
                                                    <>
                                                        {
                                                            lastpage < 8
                                                                ?

                                                                (paginationArray.slice(0, lastpage).map((data) => {
                                                                    return (
                                                                        data
                                                                    );
                                                                }))
                                                                :
                                                                <>
                                                                    <li className={`${currentpage == fourpage - 3 ? "activePagination" : ""}`} onClick={() => {
                                                                        setPaginationCurrentPage(fourpage - 3)
                                                                    }} >{fourpage - 3}</li>

                                                                    <li className={`${currentpage == (fourpage - 2) ? "activePagination" : ""}`} onClick={() => {
                                                                        setPaginationCurrentPage(fourpage - 2)
                                                                    }}>{fourpage - 2}</li>

                                                                    <li className={`${currentpage == fourpage - 1 ? "activePagination" : ""}`} onClick={() => {
                                                                        setPaginationCurrentPage(fourpage - 1)
                                                                    }}>{fourpage - 1}</li>

                                                                    <li className={`${currentpage == fourpage ? "activePagination" : ""}`} onClick={() => {
                                                                        setPaginationCurrentPage(fourpage)
                                                                    }}>{fourpage}</li>
                                                                </>
                                                        }






                                                        {
                                                            lastpage > 7
                                                                ?
                                                                <>
                                                                    <li className="dotsBlock">...</li>

                                                                    <li className={`${currentpage == lastpage - 2 ? "activePagination" : ""}`} onClick={() => {
                                                                        setPaginationCurrentPage(lastpage - 2)
                                                                    }}>{lastpage - 2}</li>

                                                                    <li className={`${currentpage == lastpage - 1 ? "activePagination" : ""}`} onClick={() => {
                                                                        setPaginationCurrentPage(lastpage - 1)
                                                                    }}>{lastpage - 1}</li>

                                                                    <li className={`${currentpage == lastpage ? "activePagination" : ""}`} onClick={() => {
                                                                        setPaginationCurrentPage(lastpage)
                                                                    }}>{lastpage}</li>
                                                                </>
                                                                :
                                                                null
                                                        }


                                                    </>
                                                }

                                                {
                                                    currentpage == lastpage
                                                        ?
                                                        null
                                                        :
                                                        <li className=" arrowRight" onClick={() => {
                                                            if (currentpage >= 4) {
                                                                setfourpage(currentpage + 1);
                                                                setPaginationCurrentPage(currentpage + 1);
                                                            }
                                                            else {
                                                                setPaginationCurrentPage(currentpage + 1);
                                                            }
                                                        }}>

                                                            <img src={require(`../../assets/img/rightArrow.svg`).default} />
                                                        </li>
                                                }


                                            </ul>
                                            <p className="mb-0 fontSize14 font-weight400 text-center mt-1 secondaryColor">Showing&nbsp;
                                                {
                                                    lastpage == 1 ?
                                                        <>{1}-{totalcount} of&nbsp;{totalcount}</>
                                                        :
                                                        <>
                                                            {
                                                                currentpage == lastpage ?
                                                                    <>{currentpage * 25 - 24}-{totalcount} of&nbsp;{totalcount}</>
                                                                    :
                                                                    <>{currentpage * 25 - 24}-{currentpage * 25} of&nbsp;{totalcount}</>
                                                            }
                                                        </>
                                                }
                                                &nbsp;Results</p>
                                        </>
                                }



                                {/* <ul class="d-flex align-items-center justify-content-center">
                                    <li>
                                        <img src={require(`../../assets/img/leftArrow.svg`).default} />
                                    </li>


                                    <li className='activePagination'>1</li>
                                    <li>2</li>
                                    <li>3</li>
                                    <li>4</li>
                                    <li>5</li>
                                    <li>6</li>



                                    <li>
                                        <img src={require(`../../assets/img/rightArrow.svg`).default} />
                                    </li>
                                </ul> */}
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Button id='scrollTopButton' onClick={pushtoaddpage}>


                    <img alt="img" src={require(`../../assets/img/plusIcon.svg`).default} />

                    {/* Add Agency */}
                </Button>


                <Footer />
            </div>







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