import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, FormFeedback } from 'reactstrap';
import './RandomPhoto.scss';
import { ErrorMessage } from 'formik';

RandomPhoto.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    isError: PropTypes.bool,
};

RandomPhoto.defaultProps = {
    name: '',
    value: '',
    onChange: null,
    onBlur: null,
    isError: false
};

const func_RandomPhoto = () => {
    const id = Math.floor(Math.random() * 2000);
    return `https://picsum.photos/id/${id}/300/300`;
}

function RandomPhoto(props) {
    const {name, value, onChange, onBlur, isError} = props;
    const [alreadyRandom, setAlreadyRandom] = useState(false);

    const handleClickRandom = () => {
        if(onChange) {
            const imageUrl = func_RandomPhoto();
            onChange(imageUrl);
        }
        setAlreadyRandom(true);
    };

    const handleImageError = () => {
        if(alreadyRandom === true){
            handleClickRandom();
        }
    }

    return (
        <div className="random-photo">
            <div className="random-photo__button mb-1">
                <Button
                    name={name}
                    onBlur={onBlur}
                    onClick={handleClickRandom}

                    outline
                    color="info"
                    className="btn-sm"
                >
                    Random
                </Button>
            </div>
            <div className={isError ? "random-photo__image is-invalid" : "random-photo__image"} >
                <img 
                    src={value} 
                    alt="Please random image"
                    onError={handleImageError}
                />
            </div>
            <ErrorMessage name={name} component={FormFeedback} />
        </div>
    );
}

export default RandomPhoto;