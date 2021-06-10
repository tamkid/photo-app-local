import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import Select from 'react-select';
import { ErrorMessage } from 'formik';
import './SelectField.scss';

SelectField.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
};

SelectField.defaultProps = {
    label: '',
    placeholder: '',
    options: []
};

function SelectField(props) {
    const {
        label, placeholder, options,
        form, field
    } = props;

    const {errors, touched} = form;
    const isError = errors[field.name] && touched[field.name];

    const selectedOption = options.find(option => option.value === field.value);

    const handleChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;
        const changeEvent = {
            target: {
                name: field.name,
                value: selectedValue
            }
        }
        field.onChange(changeEvent);
    }

    return (
        <FormGroup>
            {label && <Label for={field.name}>{label}</Label>}
            <Select 
                {...field}
                id={field.name} 
                placeholder={placeholder} 
                options={options}
                
                onChange={handleChange}
                value={selectedOption}

                className={isError ? "is-invalid" : ""}
                />
            <ErrorMessage name={field.name} component={FormFeedback} />
        </FormGroup>
    );
}

export default SelectField;