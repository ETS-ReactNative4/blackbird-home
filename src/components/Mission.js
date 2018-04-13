import React, {Component} from 'react';

class Mission extends Component {
    render() {
        return (
            <section className="mission" id="mission">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center">
                            <h2>Our Mission</h2>
                            <p>We help our partners to build the best products, use business to inspire and implement the latest technology solutions</p>
                        </div>
                        <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center">
                            <h2>Our Vision</h2>
                            <p>We believe passionately in the power of technologies to change the future, lives and, ultimately, the world</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Mission;