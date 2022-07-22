import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import apiConnector from '../../backendConnect/apiService';
import { getLocalStorage, isItNull } from '../../containers/functions';

const Editpage = () => {


    let parameters = useParams();

    const [agencyID, setagencyID] = useState('');

    useEffect(() => {
        setagencyID(parameters.agencyID);
    }, [parameters]);

    // console.log(agencyID, "QQQQ");
    // const [type, setType] = useState('');


    let token = getLocalStorage("tochen");
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
        // console.log(data, "working");
        apiConnector("editRecordWithId", data, token)
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


            {
                apiComingData.length === 0 ?
                    null
                    :
                    <Form >

                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text"
                                onChange={handlechage} name="title" value={formData.title} />
                        </Form.Group>


                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text"
                                onChange={handlechage} name="address" value={formData.address} />
                        </Form.Group>


                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label>city_name</Form.Label>
                            <Form.Control type="text"
                                onChange={handlechage} name="city_name" value={formData.city_name} />
                        </Form.Group>


                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label>county_name</Form.Label>
                            <Form.Control type="text"
                                onChange={handlechage} name="county_name" value={formData.county_name} />
                        </Form.Group>


                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label>license_fee</Form.Label>
                            <Form.Control type="number"
                                onChange={handlechage} name="license_fee" value={formData.license_fee} />
                        </Form.Group>



                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label>confidential_license_fee</Form.Label>
                            <Form.Control type="number"
                                onChange={handlechage} name="confidential_license_fee" value={formData.confidential_license_fee} />
                        </Form.Group>


                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label>lat</Form.Label>
                            <Form.Control type="number"
                                onChange={(e) => setlat(e.target.value)} name="lat" value={lat} />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label>lng</Form.Label>
                            <Form.Control type="number"
                                onChange={(e) => setlng(e.target.value)} name="lng" value={lng} />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label>phone</Form.Label>
                            <Form.Control type="text"
                                onChange={handlechage} name="phone" value={formData.phone} />
                        </Form.Group>


                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label>state_abbr</Form.Label>
                            <Form.Control type="text"
                                onChange={handlechage} name="state_abbr" value={formData.state_abbr} />
                        </Form.Group>



                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label>zip_code</Form.Label>
                            <Form.Control type="number"
                                onChange={handlechage} name="zip_code" value={formData.zip_code} />
                        </Form.Group>



                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label>start_time</Form.Label>
                            <Form.Control type="text"
                                onChange={handlechage} name="start_time" value={formData.start_time} />
                        </Form.Group>


                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label>end_time</Form.Label>
                            <Form.Control type="text"
                                onChange={handlechage} name="end_time" value={formData.end_time} />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label>available_days</Form.Label>
                            <Form.Control type="text"
                                onChange={handlechage} name="available_days" value={formData.available_days} />
                        </Form.Group>



                        <span onClick={handleubmit}>SUBMIT</span>


                    </Form>

            }








            {/* <Form.Group controlId="formBasicSelect">
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
            </Form.Group> */}

            {/* <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select> */}

        </>
    )
}

export default Editpage