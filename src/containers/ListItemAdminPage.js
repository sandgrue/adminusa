import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import apiConnector from '../backendConnect/apiService';
import { getLocalStorage, isItNull } from './functions';



const ListItemAdminPage = ({ item }) => {
    let token = getLocalStorage("tochen");

    // console.log(tochen, "QQQ");
    let history = useHistory();
    
    const pushtoedit = (id) => {
        history.push(`/editAgency/${id}`);
    }

    const [deleteModalState, setdeleteModalState] = useState(false);
    const toggleDeleteModal = () => setdeleteModalState(!deleteModalState);

    const handleDelete = () => {
        // let data = {
        //     _id: item._id,

        // };
        // apiConnector("deleteRecord", data, token)
        //     .then((res) => {
        //         // console.log(res, "workingss");
        //         if (res.status === "SUCCESS") {
        //         } else {
        //             console.log("API failure", 'working');
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }

    return (
        <>
            <div class="d-flex align-items-center dataListBoxItem">
                <div class="listItem">
                    <h3>{item.title}</h3>
                    <p class="mb-0">{item.address}</p>
                </div>
                <div class="ml-auto d-flex align-items-center">
                    <span class="actionItem editIcon" onClick={() => pushtoedit(item._id)}>
                        <img src={require(`../assets/img/edit.svg`).default} />
                    </span>
                    <span class="actionItem deleteIcon" onClick={toggleDeleteModal}>
                        <img src={require(`../assets/img/delete.svg`).default} />
                    </span>
                </div>
            </div>

            <Modal show={deleteModalState} onHide={toggleDeleteModal}>

                <h1>Are you sure you want to Delete</h1>
                <h1> {item.title}</h1>
                <Button variant="secondary" onClick={handleDelete}>
                    Yes
                </Button>

            </Modal>
        </>
    )
}

export default ListItemAdminPage