import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import apiConnector from '../../backendConnect/apiService';
import { getLocalStorage } from '../../containers/functions';

const Editpage = () => {



    const [type, setType] = useState('');


    let token = getLocalStorage("tochen");
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


    console.log(type, "TYPE");



    const fillStartingValues = () => {

    }




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
            start_time: formData.start_time,
            end_time: formData.end_time,
            available_days: formData.available_days
        };
        // console.log(data, "working");
        apiConnector("addRecord", data, token)
            .then((res) => {

                console.log(res, "working");
                if (res.status === "SUCCESS") {
                } else {
                    console.log("API failure", 'working');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }





    return (
        <>





            <Form >

                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="name@example.com"
                        onChange={handlechage} name="title" value={formData.title} />
                </Form.Group>


                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="name@example.com"
                        onChange={handlechage} name="address" />
                </Form.Group>


                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>city_name</Form.Label>
                    <Form.Control type="text" placeholder="name@example.com"
                        onChange={handlechage} name="city_name" />
                </Form.Group>


                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>county_name</Form.Label>
                    <Form.Control type="text" placeholder="name@example.com"
                        onChange={handlechage} name="county_name" />
                </Form.Group>


                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>license_fee</Form.Label>
                    <Form.Control type="number" placeholder="name@example.com"
                        onChange={handlechage} name="license_fee" />
                </Form.Group>



                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>confidential_license_fee</Form.Label>
                    <Form.Control type="number" placeholder="name@example.com"
                        onChange={handlechage} name="confidential_license_fee" />
                </Form.Group>


                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>lat</Form.Label>
                    <Form.Control type="number" placeholder="name@example.com"
                        onChange={handlechage} name="lat" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>lng</Form.Label>
                    <Form.Control type="number" placeholder="name@example.com"
                        onChange={handlechage} name="lng" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>phone</Form.Label>
                    <Form.Control type="number" placeholder="name@example.com"
                        onChange={handlechage} name="phone" />
                </Form.Group>


                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>state_abbr</Form.Label>
                    <Form.Control type="text" placeholder="name@example.com"
                        onChange={handlechage} name="state_abbr" />
                </Form.Group>



                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>zip_code</Form.Label>
                    <Form.Control type="number" placeholder="name@example.com"
                        onChange={handlechage} name="zip_code" />
                </Form.Group>



                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>start_time</Form.Label>
                    <Form.Control type="text" placeholder="name@example.com"
                        onChange={handlechage} name="start_time" />
                </Form.Group>


                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>end_time</Form.Label>
                    <Form.Control type="text" placeholder="name@example.com"
                        onChange={handlechage} name="end_time" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Label>available_days</Form.Label>
                    <Form.Control type="text" placeholder="name@example.com"
                        onChange={handlechage} name="available_days" />
                </Form.Group>



                <span onClick={handleubmit}>SUBMIT</span>


            </Form>



            <Form.Group controlId="formBasicSelect">
                <Form.Label>Select Norm Type</Form.Label>
                <Form.Control
                    as="select"
                    value={type}
                    onChange={e => {
                        console.log("e.target.value", e.target.value);
                        setType(e.target.value);
                    }}
                >
                    <option value="DICTUM">Dictamen</option>
                    <option value="CONSTANCY">Constancia</option>
                    <option value="COMPLEMENT">Complemento</option>
                </Form.Control>
            </Form.Group>

            <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

        </>
    )
}

export default Editpage