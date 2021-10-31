import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './order.css'
import { Card, Container } from 'react-bootstrap';

const Placeorder = () => {
    const { placeorderId } = useParams();
    const [placeorder, setPlaceorder] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        console.log(data);
        axios.post('https://chilling-dracula-71630.herokuapp.com/order', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();
                }
            })
    };

    useEffect(() => {
        fetch(`https://chilling-dracula-71630.herokuapp.com/services/${placeorderId}`)
            .then(res => res.json())
            .then(data => setPlaceorder(data))
    }, [])

    return (

        <Container>
            <div className='container d-flex w-75 py-3'>
                <Card className="bg-dark text-white">
                    <Card.Img className='img-thumbnail' src={placeorder.img} alt="" />
                    <Card.ImgOverlay>
                        <Card.Title>Price: ${placeorder.price}</Card.Title>
                        <Card.Text>
                            <p className='text-white'>{placeorder.desciption}</p>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div className="add-service">
                <h2 className='my-5 text-center text-white'>Book now for Exclusive Deals and Offers!</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Name" defaultValue="" {...register("name", { required: true, maxLength: 20 })} />
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="City" defaultValue="" {...register("city")} />
                    <input placeholder="phone number" defaultValue="" {...register("phone")} />
                    <input placeholder="Zip Code" defaultValue="" {...register("zipcode")} />
                    <input placeholder=" Enter Coupon Code" defaultValue="" {...register("coupon")} />
                    <input type="submit" value="Book Now!" className="button" />
                </form>
            </div>
        </Container>


    );
};

export default Placeorder;