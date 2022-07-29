import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { isItNull } from '../containers/functions';
import { ampm, hours, minutes } from './Constants.js/JSONS';

// import '../assets'
const DateTimePicker = ({ setTime }) => {



    const [hourValue, sethourValue] = useState('');
    const [minuteValue, setminuteValue] = useState('');
    const [ampmValue, setampmValue] = useState('');


    const [timecreated, settimecreated] = useState('');

    useEffect(() => {
        if (isItNull(hourValue) || isItNull(minuteValue) || isItNull(ampmValue)) {

        } else {
            settimecreated(`${hourValue}:${minuteValue} ${ampmValue}`);
        }
    }, [hourValue, minuteValue, ampmValue]);


    useEffect(() => {
        if (!isItNull(timecreated)) {
            setTime(timecreated);
        }
    }, [timecreated]);



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    return (
        <>



            {/* <input type="time" id="appt" name="appt" onChange={e => {
                console.log("e.target.value", e.target.value);
                sethourValue(e.target.value);
            }}></input> */}

            <div className='ml-1' onClick={handleShow}>
                <img className='datePickImg' src={require(`../assets/img/timeClock.svg`).default} />
            </div>



            <Modal show={show} onHide={handleClose} className='timeModalMain'>


                {/* <Modal.Header closeButton>
                    <Modal.Title><h2 class="modalHeading">Pick TIme</h2></Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <Form.Group controlId="formBasicSelect">
                        <Form.Label>Select Time</Form.Label>

                        <div className='d-flex align-items-center w-100 dateModalInside'>
                            <Form.Control as="select" value={hourValue}
                                onChange={e => {
                                    sethourValue(e.target.value);
                                }}>
                                <option className='d-none' value={'as'}>HH</option>
                                {
                                    hours.map(
                                        (item, index) => {
                                            return (
                                                <>
                                                    <option value={item}>{item}</option>
                                                </>

                                            )
                                        }
                                    )
                                }
                            </Form.Control>
                            <Form.Control as="select" value={minuteValue}
                                onChange={e => {
                                    setminuteValue(e.target.value);
                                }}>
                                <option className='d-none' value={''}>MM</option>
                                {
                                    minutes.map(
                                        (item, index) => {
                                            return (
                                                <option value={item} >{item}</option>
                                            )
                                        }
                                    )
                                }
                            </Form.Control>
                            <Form.Control as="select" value={ampmValue}
                                onChange={e => {
                                    setampmValue(e.target.value);
                                }}>
                                <option className='d-none' value={''}>Merid</option>
                                {
                                    ampm.map(
                                        (item, index) => {
                                            return (
                                                <option value={item} >{item}</option>
                                            )
                                        }
                                    )
                                }
                            </Form.Control>
                        </div>



                    </Form.Group>
                </Modal.Body>




            </Modal>






            {/* <Modal show={signoutClick} onHide={toggleSignOutClick}>
                <Modal.Header closeButton>
                    <Modal.Title><h2 class="modalHeading">Sign Out</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2 class="modalTitle">Are you sure you want to Sign Out ???</h2>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleSignOut}>
                        No
                    </Button>
                    <Button className="usButton" variant="primary" onClick={handleSignOut}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal> */}



        </>
    )
}

export default DateTimePicker