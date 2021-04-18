import { faEnvelope, faInfoCircle, faLocationArrow, faOtter, faPhone, faSearchLocation, faTasks, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './computer.png'
import facebook from './Facebook-logo.png'
import linked from './174857.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailchimp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer style={{ backgroundColor: "rgba(255, 253, 247, 0.972)" }} className=" text-dark pt-5 pb-4">
            <div className=" text-center text-md-left">
                <div className=" row text-center text-md-left">
                    <div className=" col-md-3 mt- ">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">  <img style={{ width: '50px' }} src={logo} alt="" /> Tutor House </h5>
                        <p> Use internet to <br /> grow up your knowledge </p>

                    </div>

                    <div className="col-md-2 mt-1">

                        <FontAwesomeIcon icon={faSearchLocation} />  <p>   Uttara,Dhaka,Bangladesh</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /><span className="text-danger">  junaidmiaa@gmail.com</span> </p>
                        <p><FontAwesomeIcon icon={faPhone} /><span>0172720000</span></p>
                        {/* <p>Lorem ipsum </p> */}
                    </div>
                    <div className="col-md-3 mt-3">


                        <p>
                            <Link style={{ textDecoration: 'none' }} to="/contact">
                                <FontAwesomeIcon icon={faEnvelope} /> <span className="text-dark">Contact</span>
                            </Link>
                        </p>

                        <p><Link style={{ textDecoration: 'none' }} to="/aboutUs"> <FontAwesomeIcon icon={faInfoCircle} /> <span className="text-dark">About</span> </Link> </p>


                    </div>
                    <div className="col-md-4 mt-3">

                        <p>
                            <img style={{ width: "50px" }} src={facebook} alt="" />
                            <a
                                style={{ textDecoration: 'none' }}

                                target="_blank"

                                href={`https://www.facebook.com/Junaid.juni.mia/`} rel="noreferrer" >  <strong className="text-dark"> facebook </strong>

                            </a>
                        </p>
                        
                        <p>
                            <img style={{ width: "30px" }} src={linked} alt="" />
                            <a
                                style={{ textDecoration: 'none' }}

                                target="_blank"

                                href={`https://www.linkedin.com/in/junaid-mia-976712203/`} rel="noreferrer" >  <strong className="text-dark">  linkedIn </strong>

                            </a>

                        </p>


                    </div>
                </div>
                <hr className=" md-3" />

                <div className="row ">
                    <div className="col-md-6">
                        <p> copyright 2021 All rights reserved by:
                        <a
                                style={{ textDecoration: 'none' }}

                                target="_blank"

                                href={`https://www.facebook.com/Junaid.juni.mia/`} rel="noreferrer" >  <strong className="text-danger"> Junaid </strong> </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;