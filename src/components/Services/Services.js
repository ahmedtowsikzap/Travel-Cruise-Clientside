import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {

    const [showServices, setShowservices] = useState([]);
    useEffect(() => {
        fetch('https://chilling-dracula-71630.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setShowservices(data))


    }, [])
    return (
        <Container>
            <h1 className='my-5 text-center text-white'>Where to?</h1>
            <Row xs={1} md={3} className="g-4">
                {

                    showServices.map(service => <Service
                        key={service._id}
                        service={service}
                    >

                    </Service>)
                }
            </Row>
        </Container>


    );
};

export default Services;