import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="pt-5 mt-5 footer">
            <Container>
                <div className="row">
                    <div className="col-md-4 col-12 mx-3">
                        <h1 className="pb-4">Travel CRUISE</h1>
                        <p>where Journey Starts for single milesteps!</p>
                        <h6 className='my-5'>Email: travelsauce@travelgen.com</h6>
                    </div>
                    <div className="col-md-3 col-12 mx-3 footer-title">

                    </div>
                    <div className="col-md-3 col-12 mx-3 footer-title">
                        <h4 className="pb-4">Collections</h4>
                        <p> Our Flight Agency</p>
                        <p>Travelling Guides</p>
                        <p>Lifestyle</p>
                        <p>Travelling tips</p>
                    </div>
                </div>
                <div className="mt-5 pb-3 pt-3 copy-right">
                    <p>© Copyright 2021. All Rights Reserved, Travel Cruise, California, LA , US</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;