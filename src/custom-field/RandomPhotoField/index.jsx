import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import RandomPhoto from 'components/RandomPhoto';

RandomPhotoField.propTypes = {
    label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
    label: ''
}

function RandomPhotoField(props) {
    const {
        label,
        form, field
    } = props;

    const {errors, touched} = form;
    const isError = errors[field.name] && touched[field.name];

    const handleImageChange = (imageUrl) => {
        form.setFieldValue(field.name, imageUrl)
    }

    return (
        <FormGroup>
            {label && <Label for="photo">{label}</Label>}
            <RandomPhoto
                {...field}
                onChange={handleImageChange}
                isError={isError}
            />
        </FormGroup>
    );
}

export default RandomPhotoField;