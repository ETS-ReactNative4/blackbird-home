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
                description: data.get('description')
            }
        };
        if (!contactRequest.body.email) {
            return false;
        }

        API.post('BlackbirdHome', '/blackbird/contacts', contactRequest).then(response => {
        });

        this.contactsForm.reset();
    }

    render() {
        return (
            <div className="section contact-us">
                <div className="w-container"><h1>Getting in touch is easy</h1>
                    <div className="subtitle">We'll get back to you ASAP. No worries.</div>
                    <div className="w-form">
                        <form name="email-form" data-name="Email Form" className="w-clearfix"
                              onSubmit={this.submit.bind(this)} ref={(el) => this.contactsForm = el}>
                            <input type="text" name="first-name" data-name="First Name" placeholder="First Name"
                                   maxLength={256} required className="field left w-input"/>
                            <input type="text" name="last-name" data-name="Last Name" placeholder="Last Name"
                                   maxLength={256} required className="field right w-input"/>
                            <input type="email" name="email" data-name="Email" placeholder="Email Address"
                                   maxLength={256} required className="field w-input"/>
                            <textarea placeholder="What do you need help with?" maxLength={5000} name="description"
                                      data-name="Description" required className="field w-input"
                                      defaultValue={""}/>
                            <input type="submit" defaultValue="Send email" data-wait="Please wait..."
                                   className="button contact w-button"/>
                        </form>
                        <div className="success-message big w-form-done"><h2>Thank you for contacting us!</h2>
                            <p>Your
                                submission has been received and we will reply shortly.&nbsp;</p></div>
                        <div className="w-form-fail"><p>Oops! Something went wrong while submitting the form :(</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacts;
