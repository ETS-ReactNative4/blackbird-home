import React, {Component} from 'react';
import FacebookLogo from '../img/facebook-logo.svg';
import LinkedinLogo from '../img/linkedin-logo.svg';
import DouLogo from '../img/dou-logo.png';
import Link from "react-router-dom/es/Link";
import {API} from 'aws-amplify';

class Footer extends Component {
    submit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const contactRequest = {
            body: {
                email: data.get('email')
            }
        };
        if (!contactRequest.body.email) {
            return false;
        }

        API.post('BlackbirdHome', '/blackbird/subscribe', contactRequest).then(response => {
        });

        this.contactsForm.reset();
    }

    render() {
        return (
            <div className="section footer">
                <div className="w-container">
                    <div className="w-row">
                        {/*<div className="footer-column w-col w-col-3"><h4>COMPANY</h4>
                            <ul className="w-list-unstyled">
                                <li><Link to="/"
                                       className="footer-link">Home</a></li>
                                <li><Link to="/about"
                                       className="footer-link">About Blackbird Labs</a></li>
                                <li><Link to="/services"
                                       className="footer-link">Services</a></li>
                                <li><Link to="/contacts"
                                       className="footer-link">Contact</a></li>
                            </ul>
                        </div>*/}
                        <div className="footer-column hidden w-col w-col-3"><h4>Location</h4>
                            <ul className="w-list-unstyled">
                                <li>
                                    <div className="footer-link">
                                        Ukraine, Kyiv<br/>03141<br/>Solomianska St, 33<br/>Blackbird Labs office
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/*<div className="footer-column hidden w-col w-col-3"><h4>Boring Stuff</h4>
                            <ul className="w-list-unstyled">
                                <li><a href="#"
                                       className="footer-link">Privacy Policy</a></li>
                                <li><a href="#"
                                       className="footer-link">Terms of Service</a></li>
                            </ul>
                        </div>*/}
                        <div className="footer-column w-col w-col-3">
                            <div className="w-form">
                                <form name="email-form" data-name="Email Form" className="w-clearfix"
                                      onSubmit={this.submit.bind(this)} ref={(el) => this.contactsForm = el}>
                                    <input type="email" name="email" placeholder="Your email"
                                           maxLength={256} required className="field-left w-input"/>
                                    <input type="submit" defaultValue="OK" className="button form w-button"/>
                                    <div className="no-spam">We send about 2 emails a month</div>
                                </form>
                                <div className="success-message w-form-done"><p>Thank you! You'll be receiving
                                    some awesome emails!</p></div>
                                <div className="w-form-fail"><p>Oops! Something went wrong while submitting the
                                    form :(</p></div>
                            </div>
                            <div>
                                <a href="https://www.linkedin.com/company/blackbird-lab/" target="_blank"
                                   rel="noopener noreferrer"
                                   className="social-link w-inline-block"><img src={LinkedinLogo} alt='Ln'/></a>
                                <a href="https://www.facebook.com/blackbirdlabcompany/" target="_blank"
                                   rel="noopener noreferrer"
                                   className="social-link w-inline-block"><img src={FacebookLogo} alt='Fb'/></a>
                                <a href="https://jobs.dou.ua/companies/blackbird-lab/" target="_blank"
                                   rel="noopener noreferrer"
                                   className="social-link w-inline-block"><img src={DouLogo} alt='Dou'/></a>
                            </div>
                            <div className="logo-text footer">Blackbird</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;