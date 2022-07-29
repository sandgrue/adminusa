import React from 'react'
import { Spinner } from 'react-bootstrap';

import loadimg from '../assets/img/loader.gif'

const Loader = (props) => {
    return (
        // <div className="loaderDiv">
        //     <img src={loadimg} alt="Loading..." />
        // </div>
        <>
            <Spinner animation="border" variant="primary" className='center' />
        </>
    )
}

export default Loader