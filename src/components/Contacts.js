import React, {Component} from 'react';
import {API} from 'aws-amplify';

class Contacts extends Component {
    submit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        const contactRequest = {
            body: {
                firstName: data.get('first-name'),
                lastName: data.get('last-name'),
                email: data.get('email'),
                description: data.get('description'),
                country: data.get('country')
            }
        };
        if (!contactRequest.body.email) {
            return false;
        }

        API.post('BlackbirdHome', '/blackbird/contacts', contactRequest).then(response => {
            this.contactsForm.reset();
        });


    }

    render() {
        return (
            <section className="get-in-touch" id="get-in-touch">
                <div className="container">
                    <form className="row" onSubmit={this.submit.bind(this)} ref={(el) => this.contactsForm = el}>
                        <div className="col-lg-12 d-flex flex-column align-items-center">
                            <h1 className="text-center">Getting in touch is easy</h1>
                            <span className="get-in-touch__subtitle text-center">
                                    We’ll get back to you ASAP. No worries.
                                </span>
                        </div>
                        <div className="col-lg-6"><input type="text" name="first-name" placeholder="First Name"
                                                         required/></div>
                        <div className="col-lg-6"><input type="text" name="last-name" placeholder="Last Name" required/>
                        </div>
                        <div className="col-lg-6"><input type="email" name="email" placeholder="Email" required/></div>
                        <div className="col-lg-6"><input type="text" name="country" placeholder="Country"/></div>
                        <div className="col-lg-12">
                            <textarea maxLength={5000} name="description" placeholder="Your message here" required/>
                            <input type="submit" defaultValue="Send email"/>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Contacts;
