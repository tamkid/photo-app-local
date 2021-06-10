import { PHOTO_CATE_OPTION } from 'commons/global';
import InputField from 'custom-field/InputField';
import RandomPhotoField from 'custom-field/RandomPhotoField';
import SelectField from 'custom-field/SelectField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import './PhotoForm.scss';
import * as yup from 'yup';
import PropTypes from 'prop-types';

PhotoForm.propTypes = {
    onFormSubmit: PropTypes.func,
    initialValues: PropTypes.object,
    isEditMode: PropTypes.bool,
};

PhotoForm.defaultProps = {
    onFormSubmit: null,
    initialValues: null,
    isEditMode: false
};

function PhotoForm(props) {

    const {onFormSubmit, initialValues, isEditMode} = props;

    const schema = yup.object().shape({
        title: yup.string().required("This field is required."),
        categoryId: yup.number().required("This field is required").nullable(),
        photo: yup.string().required("You should random photo")
    });

    const handleSubmit = (values) => {
        if(onFormSubmit){
            onFormSubmit(values);
        }
    }

    return (
        <div className="photo-form">
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => handleSubmit(values)}
            >
                {(formikProps) => {
                    const {isSubmitting} = formikProps;
                    return (
                        <Form>
                            <FastField 
                                component={InputField}
                                name="title"
                                placeholder="Title of the image"
                                label="Title"                                
                            />

                            <FastField 
                                component={SelectField}
                                name="categoryId"
                                placeholder="Select..."

                                options={PHOTO_CATE_OPTION}
                                label="Category"                                
                            />

                            <FastField
                                component={RandomPhotoField}
                                name="photo"
                                label="Photo"
                            />

                            <FormGroup>
                                <Button 
                                    type="submit" 
                                    color={isEditMode ? "success" : "primary"}
                                >
                                    {isSubmitting && <Spinner size="sm" />}
                                    {isEditMode ? "Update Photo" : "Add Photo"}
                                </Button>
                            </FormGroup>
                        </Form>
                    );
                }}
            </Formik>
            
        </div>
    );
}

export default PhotoForm;