import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/5203299.png'

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '100%' }} src={notfound} alt="" />
            <button><Link to='/'>Go Back</Link></button>
        </div>
    );
};

export default NotFound;