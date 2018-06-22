import React, {Component} from 'react';
import FacebookLogo from '../img/footer__social__fb.png';
import LinkedinLogo from '../img/footer__social__ln.png';
import DouLogo from '../img/footer__social__dou.png';
import FooterLogo from '../img/footer__logo.png';

class Footer extends Component {
    render() {
        return (
            <footer className="footer" id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-6 d-flex align-items-center pt-3">
                            <div className="footer__logo">
                                <a href="/"><img src={FooterLogo} alt="blackbird"/></a>
                                <p className="footer__copyright text-center">
                                    © Blackbird Lab. 2017-2018. All rights reserved
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 pt-3">
                            <div className="footer__menu">
                                <ul className="d-flex flex-column">
                                    <li><a href="#about-us">About</a></li>
                                    <li><a href="#mission">Mission</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#get-in-touch">Contacts</a></li>
                                </ul>
                                <ul className="d-flex footer__social">
                                    <a href="https://www.facebook.com/blackbirdlabcompany/" target="_blank"
                                       rel="noopener noreferrer"><img src={FacebookLogo} alt="facebook"/></a>
                                    <a href="https://www.linkedin.com/company/blackbird-lab/" target="_blank"
                                       rel="noopener noreferrer"><img src={LinkedinLogo} alt="in"/></a>
                                    <a href="https://jobs.dou.ua/companies/blackbird-lab/" target="_blank"
                                       rel="noopener noreferrer"><img src={DouLogo} alt="dou"/></a>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 d-flex pt-3">
                            <div className="footer__contacts">
                                <p className="footer__title">E-mail</p>
                                <p>info@blackbird-lab.com</p>
                                <p className="footer__title">Address</p>
                                <p>
                                    <a href="https://goo.gl/maps/ocUvbkWyqWM2" target="_blank" rel="noopener noreferrer">
                                        Bekhterevs'kyi Ln, 4Б
                                        <br/>
                                        Kyiv, Ukraine, 04053
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 pt-3">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.1453938103737!2d30.494461915731634!3d50.457017179476274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce64240200f3%3A0xa84a1b44187db148!2sBekhterevs'kyi+Ln%2C+4%D0%91%2C+Kyiv%2C+02000!5e0!3m2!1sen!2sua!4v1529684386873"
                                width={200} height={200} frameBorder={0} style={{border: 0}} allowFullScreen />
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;