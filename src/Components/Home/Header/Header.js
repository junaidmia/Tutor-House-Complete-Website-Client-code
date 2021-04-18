import React from 'react';
import { Link } from 'react-router-dom';
import img from './Student guy studying on internet.jpg'

const Header = () => {
    return (
        <main className=" mt-5">

            <div className="row">

                <div className="col-md-6 mt-2">
                    <div>
                        <h1> We are Here, <br /> <span className="text-danger"> For Your Bright Future</span></h1>

                        <p className="text-secondary pb-3" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vel dicta incidunt impedit amet repudiandae.</p>
                        <Link to="/bookTutor">
                            <button className="btn btn-warning"> Get a Teacher </button>
                        </Link>

                    </div>
                </div>

                <div className="col-md-6">
                    <img style={{ width: '100%' }} src={img} alt="" className="img-fluid" />
                </div>

            </div>
        </main>
    );
};

export default Header;