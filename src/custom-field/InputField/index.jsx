import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

InputField.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: ''
};

function InputField(props) {
    const {
        type, label, placeholder,
        form, field
    } = props;
    const {errors, touched} = form;
    const isError = errors[field.name] && touched[field.name];
    return (
        <FormGroup>
            {label && <Label for={field.name}>{label}</Label>}
            <Input type={type} 
                {...field}
                id={field.name} 
                placeholder={placeholder} 
                
                invalid={isError}/>
            <ErrorMessage name={field.name} component={FormFeedback}  />
        </FormGroup>
    );
}

export default InputField;