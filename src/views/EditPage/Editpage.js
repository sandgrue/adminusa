import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useHistory, useParams } from 'react-router-dom';
import apiConnector from '../../backendConnect/apiService';
import Footer from '../../containers/Footer';
import { getLocalStorage, isItNull } from '../../containers/functions';
import NavbarS from '../../containers/Navbar';
import DateTimePicker from '../../utils/DateTimePicker';
import validateInput from '../../utils/Validation/FormValidation';

const Editpage = () => {



    let token = getLocalStorage("tochen");

    // console.log(tochen, "QQQ");
    let history = useHistory();


    if (isItNull(token)) {
        history.push('/login');
    }


    let parameters = useParams();

    const [agencyID, setagencyID] = useState('');

    useEffect(() => {
        setagencyID(parameters.agencyID);
    }, [parameters]);



    const [successfuladdedmodal, setsuccessfuladdedmodal] = useState(false);
    const togglesuccess = () => setsuccessfuladdedmodal(!successfuladdedmodal);

    // console.log(agencyID, "QQQQ");
    // const [type, setType] = useState('');

    const [formData, setformData] = useState(
        {
            // _id: '',
            // title: "",
            // address: "",
            // city_name: "",
            // county_name: "",
            // license_fee: '',
            // confidential_license_fee: "",
            // lat: '',
            // lng: '',
            // phone: "",
            // state_abbr: "",
            // zip_code: "",
            // start_time: "",
            // end_time: "",
            // available_days: ""
        }
    );

    const [errors, seterrors] = useState({});
    const [starttime, setstarttime] = useState('HH:MM AM');
    const [endTime, setendTime] = useState('HH:MM AM');

    // console.log(type, "TYPE");


    const [apiComingData, setapiComingData] = useState([]);

    useEffect(() => {

        if (!isItNull(agencyID)) {

            let data = { agencyID };
            apiConnector("getRecordWithId", data, token)
                .then((res) => {

                    // console.log(res, "working");
                    if (res.status === "SUCCESS") {
                        setapiComingData(res.data);
                    } else {
                        console.log("API failure", 'working');
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }


    }, [agencyID])


    useEffect(() => {
        if (!isItNull(apiComingData)) {
            fillStartingValues();
        }
    }, [apiComingData])

    const [lat, setlat] = useState();
    const [lng, setlng] = useState();




    let fillStartingValues = () => {



        // console.log(apiComingData, "QQQQ");

        setformData(apiComingData);
        setlat(apiComingData.lat_long.length === 0 ? '' : apiComingData.lat_long[0]);
        setlng(apiComingData.lat_long.length === 0 ? '' : apiComingData.lat_long[1]);
        setstarttime(apiComingData.start_time);
        setendTime(apiComingData.end_time);




        // setformData({ ...formData, _id: apiComingData._id, });
        // setformData({ ...formData, title: apiComingData.title, });
        // setformData({ ...formData, address: apiComingData.address, });
        // setformData({ ...formData, city_name: apiComingData.city_name, });
        // setformData({ ...formData, county_name: apiComingData.county_name, });
        // setformData({ ...formData, license_fee: apiComingData.license_fee, });
        // setformData({ ...formData, confidential_license_fee: apiComingData.confidential_license_fee, });


        // setformData({ ...formData, lat: apiComingData.lat_long.length === 0 ? '' : apiComingData.lat_long[0], });
        // setformData({ ...formData, lng: apiComingData.lat_long.length === 0 ? '' : apiComingData.lat_long[1], });


        // setformData({ ...formData, phone: apiComingData.phone, });
        // setformData({ ...formData, state_abbr: apiComingData.state_abbr, });
        // setformData({ ...formData, zip_code: apiComingData.zip_code, });
        // setformData({ ...formData, start_time: apiComingData.start_time, });
        // setformData({ ...formData, end_time: apiComingData.end_time, });
        // setformData({ ...formData, available_days: apiComingData.available_days, });
    }




    // console.log(formData, "QQQ");


    const handlechage = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value, });
    }


    const handlechageLatLng = (e) => {
        let abc = `set${e.target.name}(${e.target.value})`
    }

    const handleubmit = () => {

        let ltlng =
            (isItNull(lat) && isItNull(lng)) ? [] :
                [isItNull(lat) ? '' : parseFloat(lat), isItNull(lng) ? '' : parseFloat(lng)];
        let data = {
            _id: agencyID,
            title: formData.title,
            address: formData.address,
            city_name: formData.city_name,
            county_name: formData.county_name,
            license_fee: formData.license_fee,
            confidential_license_fee: formData.confidential_license_fee,
            lat_long: ltlng,
            phone: formData.phone,
            state_abbr: formData.state_abbr,
            zip_code: formData.zip_code,
            start_time: formData.start_time,
            end_time: formData.end_time,
            available_days: formData.available_days
        };


        if (isValid(data)) {
            // console.log(data, errors, "VALID");
            seterrors({});
            apicalling(data);
            // console.log(data, errors, "VALID");
        } else {
            console.log(data, errors, "NOT VALID");
        }


        // console.log(data, "working");

    }

    const apicalling = (data) => {
        apiConnector("editRecordWithId", data, token)
            .then((res) => {
                console.log(res, "working");
                if (res.status === "SUCCESS") {
                    togglesuccess();
                    // setformData();
                } else {
                    console.log("API failure", 'working');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const isValid = (data) => {
        const { errors, isValid } = validateInput(data);
        if (!isValid) {
            seterrors(errors);
        }
        return isValid;
    }


    return (
        <>
            <div class="dataPage">

                <NavbarS />

                {
                    apiComingData.length === 0 ?
                        null
                        :
                        <Form >
                            <Container>

                                <h3 class="dataHeading w-100 mb-2">Update Agency</h3>
                                <div className="formData">
                                    <Row>
                                        <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Title</Form.Label>
                                                <Form.Control type="text" placeholder="Title"
                                                    onChange={handlechage} name="title" value={formData.title} />
                                                <div className="error alignLeft">
                                                    {errors.title}
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control type="text"
                                                    onChange={handlechage} name="address" value={formData.address} />
                                                <div className="error alignLeft">
                                                    {errors.address}
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                                <Form.Label>City</Form.Label>
                                                <Form.Control type="text" placeholder="City"
                                                    onChange={handlechage} name="city_name" value={formData.city_name} />
                                                <div className="error alignLeft">
                                                    {errors.city_name}
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                                <Form.Label>County</Form.Label>
                                                <Form.Control type="text" placeholder="County"
                                                    onChange={handlechage} name="county_name" value={formData.county_name} />
                                                <div className="error alignLeft">
                                                    {errors.county_name}
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                                <Form.Label>License Fee</Form.Label>
                                                <div className='iconinputfield'>

                                                    <Form.Control type="number" placeholder="License Fee"
                                                        value={formData.license_fee}
                                                        onChange={handlechage} name="license_fee" />
                                                    <span className='inputIcon'>$</span>

                                                </div>
                                                <div className="error alignLeft">
                                                    {errors.license_fee}
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Confidential License Fee</Form.Label>
                                                <div className='iconinputfield'>
                                                    <Form.Control type="number" placeholder="Confidential License Fee"
                                                        value={formData.confidential_license_fee}
                                                        onChange={handlechage} name="confidential_license_fee" />
                                                    <span className='inputIcon'>$</span>

                                                </div>
                                                <div className="error alignLeft">
                                                    {errors.confidential_license_fee}
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Latitude</Form.Label>
                                                <Form.Control type="number" placeholder="Latitude"
                                                    onChange={(e) => setlat(e.target.value)} name="lat" value={lat} />
                                                <div className="error alignLeft">
                                                    {errors.lat}
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Longitude</Form.Label>
                                                <Form.Control type="number" placeholder="Longitude"
                                                    onChange={(e) => setlng(e.target.value)} name="lng" value={lng} />
                                                <div className="error alignLeft">
                                                    {errors.lng}
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Phone</Form.Label>
                                                <Form.Control type="text" placeholder="Phone"
                                                    onChange={handlechage} name="phone" value={formData.phone} />
                                                <div className="error alignLeft">
                                                    {errors.phone}
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                                <Form.Label>State Abbriviation</Form.Label>
                                                <Form.Control type="text" placeholder="State Abbriviation"
                                                    onChange={handlechage} name="state_abbr" value={formData.state_abbr} />
                                                <div className="error alignLeft">
                                                    {errors.state_abbr}
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Zip Code</Form.Label>
                                                <Form.Control type="number" placeholder="Zip Code"
                                                    onChange={handlechage} name="zip_code" value={formData.zip_code} />
                                                <div className="error alignLeft">
                                                    {errors.zip_code}
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Start Time</Form.Label>
                                                <div className='d-flex align-items-center datePickInput'>
                                                    {starttime}
                                                    <DateTimePicker setTime={setstarttime} />
                                                </div>
                                                <div className="error alignLeft">
                                                    {errors.start_time}
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                                <Form.Label>End Time</Form.Label>
                                                <div className='d-flex align-items-center datePickInput'>
                                                    {endTime}
                                                    <DateTimePicker setTime={setendTime} />
                                                </div>
                                                <div className="error alignLeft">
                                                    {errors.end_time}
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                                            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Available Days</Form.Label>
                                                <Form.Control type="text" placeholder="M-T-W-T-F-S-S"
                                                    value={formData.available_days}
                                                    onChange={handlechage} name="available_days" />
                                                <div className="error alignLeft">
                                                    {errors.available_days}
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                            <div class="text-center ">
                                                {/* <Button onClick={handleubmit} className="usButton"> */}

                                                <span onClick={handleubmit} className="usaBtn">SUBMIT</span>

                                                {/* </Button> */}
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <Row>
                                    {/* <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Title</Form.Label>
                                            <Form.Control type="text"
                                                onChange={handlechage} name="title" value={formData.title} />
                                        </Form.Group>
                                    </Col> */}
                                    {/* <Col class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control type="text"
                                                onChange={handlechage} name="address" value={formData.address} />
                                        </Form.Group>
                                    </Col> */}
                                    {/* <Col class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label>city_name</Form.Label>
                                            <Form.Control type="text"
                                                onChange={handlechage} name="city_name" value={formData.city_name} />
                                        </Form.Group>
                                    </Col> */}
                                    {/* <Col class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label>county_name</Form.Label>
                                            <Form.Control type="text"
                                                onChange={handlechage} name="county_name" value={formData.county_name} />
                                        </Form.Group>
                                    </Col> */}
                                    {/* <Col class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label>license_fee</Form.Label>
                                            <Form.Control type="text"
                                                onChange={handlechage} name="license_fee" value={formData.license_fee} />
                                        </Form.Group>
                                    </Col> */}
                                    {/* <Col class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label>confidential_license_fee</Form.Label>
                                            <Form.Control type="text"
                                                onChange={handlechage} name="confidential_license_fee" value={formData.confidential_license_fee} />
                                        </Form.Group>
                                    </Col> */}
                                    {/* <Col class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label>lat</Form.Label>
                                            <Form.Control type="text"
                                                onChange={(e) => setlat(e.target.value)} name="lat" value={lat} />
                                        </Form.Group>
                                    </Col> */}
                                    {/* <Col class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label>lng</Form.Label>
                                            <Form.Control type="text"
                                                onChange={(e) => setlng(e.target.value)} name="lng" value={lng} />
                                        </Form.Group>
                                    </Col> */}
                                    {/* <Col class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label>phone</Form.Label>
                                            <Form.Control type="text"
                                                onChange={handlechage} name="phone" value={formData.phone} />
                                        </Form.Group>
                                    </Col> */}
                                    {/* <Col class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label>state_abbr</Form.Label>
                                            <Form.Control type="text"
                                                onChange={handlechage} name="state_abbr" value={formData.state_abbr} />
                                        </Form.Group>
                                    </Col> */}
                                    {/* <Col class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label>zip_code</Form.Label>
                                            <Form.Control type="text"
                                                onChange={handlechage} name="zip_code" value={formData.zip_code} />
                                        </Form.Group>
                                    </Col> */}
                                    {/* <Col class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label>start_time</Form.Label>
                                            <Form.Control type="text"
                                                onChange={handlechage} name="start_time" value={formData.start_time} />
                                        </Form.Group>
                                    </Col> */}
                                    {/* <Col class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label>end_time</Form.Label>
                                            <Form.Control type="text"
                                                onChange={handlechage} name="end_time" value={formData.end_time} />
                                        </Form.Group>
                                    </Col> */}
                                    {/* <Col class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label>available_days</Form.Label>
                                            <Form.Control type="text"
                                                onChange={handlechage} name="available_days" value={formData.available_days} />
                                        </Form.Group>
                                    </Col> */}
                                </Row>
                            </Container>







































                            {/* <span onClick={handleubmit}>SUBMIT</span> */}


                        </Form>

                }


                <Footer />

            </div>



            <Modal show={successfuladdedmodal} onHide={togglesuccess} centered>
                {/* <Modal.Header closeButton>
                    <Modal.Title><h2 class="modalHeading">Delete</h2></Modal.Title> 
                </Modal.Header> */}
                <Modal.Body>
                    <h2 class="modalTitle text-center">Successfully Updated</h2>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button className="usButton" variant="primary" onClick={toggleDeleteModal}>
                        No
                    </Button> */}
                    <Button variant="secondary" onClick={
                        () => {
                            togglesuccess();
                            history.push('/admin');
                        }}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>






        </>
    )
}

export default Editpage