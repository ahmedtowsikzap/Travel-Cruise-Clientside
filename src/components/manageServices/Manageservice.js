import React, { useEffect, useState } from 'react';

const Manageservice = () => {
    const [orders, setOrder] = useState([])
    useEffect(() => {
        fetch('https://chilling-dracula-71630.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrder(data))

    }, [])
    return (
        <div>
            <h1 className='text-center text-body mb-5 my-5'>Reserved Information for Your next Visit</h1>

            {

                orders.map(order => <div class="card text-white bg-dark mb-3 w-50 m-auto">
                    <div class="card-header">Next Booking: <span className='text-warning px-3'>{order.city}</span></div>
                    <div class="card-body">
                        <h5 class="card-title">City To Explore - <span className='text-warning px-2'>{order.address}</span></h5>
                        <p class="card-text">Zip Code: <span className='text-success'>{order.zipcode}</span></p>
                        <p class="card-text">My number: <span className='text-success'>{order.phone}</span></p>
                        <p class="card-text"> Coupon Code : <span className='text-success' >{order.coupon}</span></p>
                    </div>
                </div>)}
        </div>
    );
};

export default Manageservice;