import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import apiConnector from '../../backendConnect/apiService';
import Footer from '../../containers/Footer';
import { getLocalStorage, isItNull } from '../../containers/functions';
import NavbarS from '../../containers/Navbar';
import DateTimePicker from '../../utils/DateTimePicker';
import validateInput from '../../utils/Validation/FormValidation';

const Addcontent = () => {

    let token = getLocalStorage("tochen");


    const [successfuladdedmodal, setsuccessfuladdedmodal] = useState(false);
    const togglesuccess = () => setsuccessfuladdedmodal(!successfuladdedmodal);

    // console.log(tochen, "QQQ");
    let history = useHistory();


    if (isItNull(token)) {
        history.push('/login');
    }

    const [errors, seterrors] = useState({});

    const [starttime, setstarttime] = useState('HH:MM AM');
    const [endTime, setendTime] = useState('HH:MM AM');
    const [formData, setformData] = useState(
        {
            title: "",
            address: "",
            city_name: "",
            county_name: "",
            license_fee: '',
            confidential_license_fee: "",
            lat: '',
            lng: '',
            phone: "",
            state_abbr: "",
            zip_code: "",
            start_time: "",
            end_time: "",
            available_days: ""
        }

    );

    const handlechage = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value, });
    }

    const handleubmit = () => {
        let data = {
            title: formData.title,
            address: formData.address,
            city_name: formData.city_name,
            county_name: formData.county_name,
            license_fee: formData.license_fee,
            confidential_license_fee: formData.confidential_license_fee,
            lat_long: [formData.lat, formData.lng],
            phone: formData.phone,
            state_abbr: formData.state_abbr,
            zip_code: formData.zip_code,
            start_time: starttime,
            end_time: endTime,
            available_days: formData.available_days
        };

        if (isValid(data)) {
            seterrors({});
            apicalling(data);
        }


        // console.log(data, "working");

    }


    const apicalling = (data) => {
        apiConnector("addRecord", data, token)
            .then((res) => {

                // console.log(res, "working");
                if (res.status === "SUCCESS") {
                    togglesuccess();
                    setformData(
                        {
                            title: "",
                            address: "",
                            city_name: "",
                            county_name: "",
                            license_fee: '',
                            confidential_license_fee: "",
                            lat: '',
                            lng: '',
                            phone: "",
                            state_abbr: "",
                            zip_code: "",
                            start_time: "",
                            end_time: "",
                            available_days: ""
                        }
                    )
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


    useEffect(() => {
    }, [errors])





    return (
        <>

            <div class="dataPage">

                <NavbarS />
                <Container>

                    <h3 class="dataHeading w-100 mb-2">Add Agency</h3>

                    <div className="formData">
                        <Row>
                            <Col xl={4} lg={4} md={6} sm={6} xs={12} className="mb-4">
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Title"
                                        onChange={handlechage} name="title"
                                        value={formData.title}
                                    />
                                    <div className="error alignLeft">
                                        {errors.title}
                                    </div>
                                </Form.Group>

                            </Col>

                            {/* <div>
                                {errors.title}
                            </div> */}
                            <Col xl={4} lg={4} md={6} sm={6} xs={12} className="mb-4">
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder='Address'
                                        value={formData.address}
                                        onChange={handlechage} name="address" />
                                    <div className="error alignLeft">
                                        {errors.address}
                                    </div>
                                </Form.Group>
                            </Col>



                            <Col xl={4} lg={4} md={6} sm={6} xs={12} className="mb-4">
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="City"
                                        value={formData.city_name}
                                        onChange={handlechage} name="city_name" />
                                    <div className="error alignLeft">
                                        {errors.city_name}
                                    </div>
                                </Form.Group>
                            </Col>


                            <Col xl={4} lg={4} md={6} sm={6} xs={12} className="mb-4">
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>County</Form.Label>
                                    <Form.Control type="text" placeholder="County"
                                        value={formData.county_name}
                                        onChange={handlechage} name="county_name" />
                                    <div className="error alignLeft">
                                        {errors.county_name}
                                    </div>
                                </Form.Group>
                            </Col>



                            <Col xl={4} lg={4} md={6} sm={6} xs={12} className="mb-4">
                                <Form.Group controlId="exampleForm.ControlInput1">
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



                            <Col xl={4} lg={4} md={6} sm={6} xs={12} className="mb-4">
                                <Form.Group controlId="exampleForm.ControlInput1">
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



                            <Col xl={4} lg={4} md={6} sm={6} xs={12} className="mb-4">
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Latitude</Form.Label>
                                    <Form.Control type="number" placeholder="Latitude"
                                        value={formData.lat}
                                        onChange={handlechage} name="lat" />
                                    <div className="error alignLeft">
                                        {errors.lat}
                                    </div>
                                </Form.Group>
                            </Col>


                            <Col xl={4} lg={4} md={6} sm={6} xs={12} className="mb-4">
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Longitude</Form.Label>
                                    <Form.Control type="number" placeholder="Longitude"
                                        value={formData.lng}
                                        onChange={handlechage} name="lng" />
                                    <div className="error alignLeft">
                                        {errors.lng}
                                    </div>
                                </Form.Group>
                            </Col>


                            <Col xl={4} lg={4} md={6} sm={6} xs={12} className="mb-4">
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="number" placeholder="Phone"
                                        value={formData.phone}
                                        onChange={handlechage} name="phone" />
                                    <div className="error alignLeft">
                                        {errors.phone}
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col xl={4} lg={4} md={6} sm={6} xs={12} className="mb-4">
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>State Abbriviation</Form.Label>
                                    <Form.Control type="text" placeholder="State Abbriviation"
                                        value={formData.state_abbr}
                                        onChange={handlechage} name="state_abbr" />
                                    <div className="error alignLeft">
                                        {errors.state_abbr}
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col xl={4} lg={4} md={6} sm={6} xs={12} className="mb-4">
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Zip Code</Form.Label>
                                    <Form.Control type="number" placeholder="Zip Code"
                                        value={formData.zip_code}
                                        onChange={handlechage} name="zip_code" />
                                    <div className="error alignLeft">
                                        {errors.zip_code}
                                    </div>
                                </Form.Group>
                            </Col>
                            <Col xl={4} lg={4} md={6} sm={6} xs={12} className="mb-4">
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Start Time</Form.Label>
                                    {/* <Form.Control type="text" placeholder=""
                                        onChange={handlechage} name="start_time" /> */}
                                    <div className='d-flex align-items-center datePickInput'>
                                        {starttime}
                                        <DateTimePicker setTime={setstarttime} />
                                    </div>
                                    <div className="error alignLeft">
                                        {errors.start_time}
                                    </div>
                                </Form.Group>
                            </Col>


                            <Col xl={4} lg={4} md={6} sm={6} xs={12} className="mb-4">
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>End Time</Form.Label>
                                    <div className='d-flex align-items-center datePickInput'>
                                        {endTime}
                                        <DateTimePicker setTime={setendTime} />
                                    </div>
                                    <div className="error alignLeft">
                                        {errors.end_time}
                                    </div>
                                    {/* <Form.Control type="text" placeholder=""
                                        onChange={handlechage} name="end_time" /> */}
                                </Form.Group>
                            </Col>
                            <Col xl={4} lg={4} md={6} sm={6} xs={12} className="mb-4">
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Available Days</Form.Label>
                                    <Form.Control type="text" placeholder="M-T-W-T-F-S-S"
                                        value={formData.available_days}
                                        onChange={handlechage} name="available_days" />
                                    <div className="error alignLeft">
                                        {errors.available_days}
                                    </div>
                                </Form.Group>
                            </Col>




                            <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mb-4">
                                <div class="text-center ">
                                    {/* <Button onClick={handleubmit} className="usButton"> */}

                                    <span onClick={handleubmit} className="usaBtn">SUBMIT</span>

                                    {/* </Button> */}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>





                {/* <Form > */}







                {/* <Form.Group  controlId="exampleForm.ControlInput1">
                        <Form.Label>city_name</Form.Label>
                        <Form.Control type="text" placeholder=""
                            onChange={handlechage} name="city_name" />
                    </Form.Group> */}


                {/* <Form.Group  controlId="exampleForm.ControlInput1">
                        <Form.Label>county_name</Form.Label>
                        <Form.Control type="text" placeholder=""
                            onChange={handlechage} name="county_name" />
                    </Form.Group> */}


                {/* <Form.Group  controlId="exampleForm.ControlInput1">
                        <Form.Label>license_fee</Form.Label>
                        <Form.Control type="number" placeholder=""
                            onChange={handlechage} name="license_fee" />
                    </Form.Group> */}



                {/* <Form.Group  controlId="exampleForm.ControlInput1">
                        <Form.Label>confidential_license_fee</Form.Label>
                        <Form.Control type="number" placeholder=""
                            onChange={handlechage} name="confidential_license_fee" />
                    </Form.Group> */}


                {/* <Form.Group  controlId="exampleForm.ControlInput1">
                        <Form.Label>lat</Form.Label>
                        <Form.Control type="number" placeholder=""
                            onChange={handlechage} name="lat" />
                    </Form.Group> */}

                {/* <Form.Group  controlId="exampleForm.ControlInput1">
                        <Form.Label>lng</Form.Label>
                        <Form.Control type="number" placeholder=""
                            onChange={handlechage} name="lng" />
                    </Form.Group> */}

                {/* <Form.Group  controlId="exampleForm.ControlInput1">
                        <Form.Label>phone</Form.Label>
                        <Form.Control type="number" placeholder=""
                            onChange={handlechage} name="phone" />
                    </Form.Group> */}


                {/* <Form.Group  controlId="exampleForm.ControlInput1">
                        <Form.Label>state_abbr</Form.Label>
                        <Form.Control type="text" placeholder=""
                            onChange={handlechage} name="state_abbr" />
                    </Form.Group> */}



                {/* <Form.Group  controlId="exampleForm.ControlInput1">
                        <Form.Label>zip_code</Form.Label>
                        <Form.Control type="number" placeholder=""
                            onChange={handlechage} name="zip_code" />
                    </Form.Group> */}



                {/* <Form.Group  controlId="exampleForm.ControlInput1">
                        <Form.Label>start_time</Form.Label>
                        <Form.Control type="text" placeholder=""
                            onChange={handlechage} name="start_time" />
                    </Form.Group> */}


                {/* <Form.Group  controlId="exampleForm.ControlInput1">
                        <Form.Label>end_time</Form.Label>
                        <Form.Control type="text" placeholder=""
                            onChange={handlechage} name="end_time" />
                    </Form.Group> */}

                {/* <Form.Group  controlId="exampleForm.ControlInput1">
                        <Form.Label>available_days</Form.Label>
                        <Form.Control type="text" placeholder=""
                            onChange={handlechage} name="available_days" />
                    </Form.Group> */}



                {/* <span onClick={handleubmit}>SUBMIT</span> */}


                {/* </Form> */}

                <Footer />
            </div>



            <Modal show={successfuladdedmodal} onHide={togglesuccess} centered>
                {/* <Modal.Header closeButton>
                    <Modal.Title><h2 class="modalHeading">Delete</h2></Modal.Title> 
                </Modal.Header> */}
                <Modal.Body>
                    <h2 class="modalTitle text-center">Successfully Added</h2>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button className="usButton" variant="primary" onClick={toggleDeleteModal}>
                        No
                    </Button> */}
                    <Button variant="secondary" onClick={togglesuccess}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Addcontent