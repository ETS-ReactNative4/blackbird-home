import React, {Component} from 'react';

export class Billboard extends Component {
    render() {
        return (
            <section className="second d-flex align-items-center" id="second">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="second__title">
                                your <br /> unique <br /> reliable <br /> technology <br /> partner
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Billboard;