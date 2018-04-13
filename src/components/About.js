import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <section className="about-us" id="about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 d-flex align-items-center flex-column">
                            <h1>About us</h1>
                            <p>We’re a young and talented group of entrepreneurs and engineers with a groundbreaking
                                idea that we hope will contribute towards a better tomorrow. We provide smart solutions
                                for companies of all sizes and pride ourselves on our unparalleled, dedicated
                                service</p>
                            <p>At BlackBird, we believe that the right understanding and technological edge can lead
                                companies towards a successful future. We always seek valuable feedback from our clients
                                in order to learn and evolve. Contact us today to set up a meeting with one of our sales
                                representatives or request a demo</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;