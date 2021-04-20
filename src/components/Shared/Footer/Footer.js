import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import brand from '../../../images/logo/brand4.png';
import { Link } from 'react-router-dom';

const Footer = () => {
   

    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">

                    <div className="col-md-12 footer-menu">
                        {/* <h6>Call now</h6>
                            <button className="btn btn-primary">+91755-0000</button> */}
                        <div className="footer-tex">
                            <img src={brand} className="w-50 img-fluid" alt="" />
                            <div className="footer-menu"></div>
                            <ul class="nav justify-content-center">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Our Portfolio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Our Team</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Login</a>
                                </li>
                            </ul>
                            <ul className="social-media list-inline">
                                <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                                <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            </ul>

                        </div>
                    </div>


                </div>
                <div className="copyRight text-center mt-5">
                    <p>Copyright-PRO-MARKETER {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>

            </div>
        </footer>

    );
};

export default Footer;