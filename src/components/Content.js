import React, {Component} from 'react';
import About from "./About";
import Services from "./Services";
import ContactUs from "./Contacts";
import Billboard from "./Billboard";
import Mission from "./Mission";

class Content extends Component {
    render() {
        return (
            <div>
                <Billboard/>
                <About/>
                <Mission/>
                <Services/>
                <ContactUs/>
            </div>
        );
    }
}

export default Content;
