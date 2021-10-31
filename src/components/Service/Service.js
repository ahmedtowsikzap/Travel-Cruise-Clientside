import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, name, img } = service;
    return (
        <div>

            <Col>
                <Card className='card-item-fix'>
                    <Card.Img variant="top" src={img} className='card-img' />
                    <Card.Body>
                        <div className='description'>
                            <Card.Title className='text-white'>{name}</Card.Title>
                        </div>
                        <Link to={`/placeorder/${_id}`}>
                            <Button className="btn btn-outline-danger btn-rounded my-3 px-5">Book Now!</Button>
                        </Link>

                    </Card.Body>
                </Card>
            </Col>

        </div >
    );
};

export default Service;