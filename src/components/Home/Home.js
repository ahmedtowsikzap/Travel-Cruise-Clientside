import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css'
import video from '../../Video/video-1.mp4'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';


const Home = () => {
    return (
        <div>

            <video src={video} autoPlay loop muted />
            <h1 className='fix tee'>Never Stop Exploring the World</h1>
            <h1 className='text-center text-white my-5'>Adventure Awaits</h1>
            <Banner></Banner>

            <div className='container d-flex w-75 py-3'>
                <Card className="bg-dark text-white">
                    <Card.Img className='img-thumbnail' src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="" />
                    <Card.ImgOverlay>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            <p className='text-dark'>We partnered with Turkish Airlines</p>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white">
                    <Card.Img className='img-thumbnail' src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" alt="" />
                    <Card.ImgOverlay>
                        <Card.Text>
                            <p>Look up the world the way you deserve</p>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div>
                <h2 className='text-white text-center my-5'>Check our services that we offer</h2>
            </div>

            <div className='container'>
                <div className="row">
                    <div className="col text-center">
                        <div className="col text-center">
                            <Link to='/services'>
                                <button className="btn b btn-outline-danger btn-rounded my-3 px-5" type="submit">Our Services</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    <div class="col text-center">
                        <div class="col text-center">
                            <h3 className='text-white my-5'>Book your Ticket Now with UP to 30% off for Spooky Halloween Sale!</h3>
                            <Link to='/login'>
                                <button className="btn btn-outline-danger btn-rounded my-3 px-5" type="submit">Sign In</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Home;