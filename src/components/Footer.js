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
                        <div className="col-lg-4 col-6 d-flex align-items-center">
                            <div className="footer__logo">
                                <a href="/"><img src={FooterLogo} alt="blackbird"/></a>
                                <p className="footer__copyright text-center">
                                    © <img height={10} src={FooterLogo} alt="<Blackbird>"/> 2017-2018. All rights reserved
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-6 d-flex justify-content-end">
                            <div className="footer__contacts">
                                <p className="footer__title">E-mail</p>
                                <p>info@blackbird-lab.com</p>
                                <p className="footer__title">Address</p>
                                <p>Solomianska St, 33
                                    <br/>
                                    Kyiv, Ukraine, 03141</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
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
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;