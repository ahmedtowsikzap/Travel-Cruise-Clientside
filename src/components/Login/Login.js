import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { signInWithGoogle } = useAuth();
    const handleGoogleSignIn = () => {

        signInWithGoogle()
    }
    return (
        <div>

            <section className="intro">
                <div className="d-flex align-items-center h-100">
                    <div className="container">
                        <div class="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card border-radius my-5">
                                    <div className="card-body p-5 text-center custom">
                                        <button onClick={handleGoogleSignIn} className='btn btn-outline-danger btn-rounded my-3 px-5'>Google Sign In</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >

    );
};

export default Login;