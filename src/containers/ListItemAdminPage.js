import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import apiConnector from '../backendConnect/apiService';
import { getLocalStorage, isItNull } from './functions';
import Loader from './Loader';



const ListItemAdminPage = ({ item }) => {
    let token = getLocalStorage("tochen");

    // console.log(tochen, "QQQ");
    let history = useHistory();

    const pushtoedit = (id) => {
        history.push(`/editAgency/${id}`);
    }

    const [deleteModalState, setdeleteModalState] = useState(false);
    const toggleDeleteModal = () => setdeleteModalState(!deleteModalState);

    const [successfullModal, setsuccessfullModal] = useState(false);
    const togglesuccessful = () => setsuccessfullModal(!successfullModal);
    const [failureModal, setfailureModal] = useState(false);
    const togglefail = () => setfailureModal(!failureModal);

    const [loaderstate, setloaderstate] = useState(false);


    const handleDelete = () => {
        let data = {
            _id: item._id,

        };
        setloaderstate(true);
        apiConnector("deleteRecord", data, token)
            .then((res) => {
                // console.log(res, "workingss");
                toggleDeleteModal();
                if (res.status === "SUCCESS") {
                    setloaderstate(false);
                    togglesuccessful();
                } else {
                    togglefail();
                    // console.log("API failure", 'working');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>

            {
                loaderstate ? <Loader />
                    : null
            }

            <div class="d-flex align-items-center dataListBoxItem">
                <div class="listItem">
                    <h3>{item.title}</h3>
                    <p class="mb-0">{item.address}</p>
                </div>
                <div class="ml-auto d-flex align-items-center">
                    <span class="actionItem editIcon cursorPointer" onClick={() => pushtoedit(item._id)}>
                        <img src={require(`../assets/img/edit.svg`).default} />
                    </span>
                    <span class="actionItem deleteIcon cursorPointer" onClick={toggleDeleteModal}>
                        <img src={require(`../assets/img/delete.svg`).default} />
                    </span>
                </div>
            </div>




            <Modal show={deleteModalState} onHide={toggleDeleteModal} centered>
                {/* <Modal.Header closeButton>
                    <Modal.Title><h2 class="modalHeading">Delete</h2></Modal.Title> 
                </Modal.Header> */}
                <Modal.Body>
                    <h2 class="modalTitle text-center">Are you sure you want to delete this agency???</h2>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="usButton" variant="primary" onClick={toggleDeleteModal}>
                        No
                    </Button>
                    <Button variant="secondary" onClick={handleDelete}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={successfullModal} onHide={togglesuccessful} centered>
                <Modal.Body>
                    <h2 class="modalTitle text-center">Successfully Deleted</h2>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="usButton" variant="primary" onClick={() => {
                        togglesuccessful()
                        window.location.replace("/admin")
                    }}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>


            <Modal show={failureModal} onHide={togglefail} centered>
                <Modal.Body>
                    <h2 class="modalTitle text-center">Could not be deleted because of some Technical glitch.</h2>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="usButton" variant="primary" onClick={togglefail}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* <Modal show={deleteModalState} onHide={toggleDeleteModal}>

                <h1>Are you sure you want to Delete</h1>
                <h1> {item.title}</h1>
                <Button variant="secondary" onClick={handleDelete}>
                    Yes
                </Button>

            </Modal> */}
        </>
    )
}

export default ListItemAdminPage