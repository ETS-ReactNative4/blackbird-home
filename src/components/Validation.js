import { isEmail } from 'react-validation';
import React from "react";

class Validation {
    static required(value, props) {
        if (!value || (props.isCheckable && !props.checked)) {
            return <span className="form-error is-visible">Required</span>;
        }
    };

    static email(value) {
        if (!isEmail(value)) {
            return <span className="form-error is-visible">${value} is not a valid email.</span>;
        }
    };
}

export default Validation;