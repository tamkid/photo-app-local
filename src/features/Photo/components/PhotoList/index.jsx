import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard';
import './PhotoList.scss';
import { Col, Row } from 'reactstrap';

PhotoList.propTypes = {
    photos: PropTypes.array,
    onRemovePhoto: PropTypes.func,
    onEditPhoto: PropTypes.func,
};

PhotoList.defaultProps = {
    photos: [],
    onRemovePhoto: null,
    onEditPhoto: null
};

function PhotoList(props) {
    const {photos, onRemovePhoto, onEditPhoto} = props;

    const handleRemovePhoto = (photo) => {
        if(onRemovePhoto){
            onRemovePhoto(photo);
        }
    }

    const handleEditPhoto = (photo) => {
        if(onEditPhoto){
            onEditPhoto(photo);
        }
    }

    return (
        <Row>
            {photos.map(photo => (
                <Col key={photo.id} xs="12" md="6" lg="3" className="p-2" >
                    <PhotoCard  
                        photo={photo}
                        onRemoveClick={handleRemovePhoto}
                        onEditClick={handleEditPhoto}
                    />
                </Col>
            ))}
        </Row>
    );
}

export default PhotoList;