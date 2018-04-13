import React, {Component} from 'react';
import HeaderImg from "../img/header__logo.png";

export class Navbar extends Component {
    render() {
        return (
            <header className="header" id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-6 d-flex align-items-center">
                            <div className="header__logo d-flex align-items-center">
                                <a href="/"><img src={HeaderImg} alt="logo" /></a>
                            </div>
                        </div>
                        <div className="col-lg-9 col-6">
                            <nav className="header__menu">
                                <ul className="d-flex align-items-center">
                                    <li><a href="#about-us">About</a></li>
                                    <li><a href="#mission">Mission</a></li>
                                    <li><a href="#services">Services</a></li>
                                    <li><a href="#get-in-touch" className="header__inquiry">inquiry now</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Navbar;