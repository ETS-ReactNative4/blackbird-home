import React, {Component} from 'react';

class Services extends Component {
    render() {
        return (
            <section className="services" id="services">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <h1>Our services</h1>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-start">
                            <div className="services__block d-flex flex-column align-items-center">
                                <h3>App development</h3>
                                <p>Mobile Development / eCommerce / Enterprise Apps</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-start">
                            <div className="services__block d-flex flex-column align-items-center">
                                <h3>UX/UI</h3>
                                <p>User Experience / Visual Design / Graphic Design</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-start">
                            <div className="services__block d-flex flex-column align-items-center">
                                <h3>Software testing</h3>
                                <p>Manual QA / Automation QA / Security / Performance QA</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-start">
                            <div className="services__block d-flex flex-column align-items-center">
                                <h3>Big Data</h3>
                                <p>Data Engineering / Modeling and Analysis / Data Visualization</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-start">
                            <div className="services__block d-flex flex-column align-items-center">
                                <h3>R&amp;D</h3>
                                <p>IoT / Machine Learning / AR / Blockchain / Chatbots</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;