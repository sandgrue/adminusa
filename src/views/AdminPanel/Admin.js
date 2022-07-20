import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import apiConnector from '../../backendConnect/apiService';
import { getLocalStorage, isItNull, setLocalStorage } from '../../containers/functions';

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
        history.push('/login');
    }


    const pushtoedit = (id) => {
        history.push(`/editAgency/${id}`);
    }

    const pushtoaddpage = () => {
        history.push('/addcontent');
    }



    return (
        <>

            <div>


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

            </div>

        </>
    )
}

export default Admin