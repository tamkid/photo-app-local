import React from 'react';
import PropTypes from 'prop-types';
import './PhotoCard.scss';
import { Button } from 'reactstrap';

PhotoCard.propTypes = {
    photo: PropTypes.object,
    onRemoveClick: PropTypes.func,
    onEditClick: PropTypes.func,
};

PhotoCard.defaultProps = {
    photo: null,
    onRemoveClick: null,
    onEditClick: null,
};

function PhotoCard(props) {
    const {photo, onRemoveClick, onEditClick} = props;

    const handleClickRemove = (photo) => {
        if(onRemoveClick) {
            onRemoveClick(photo);
        }
    }

    const handleClickEdit = (photo) => {
        if(onEditClick) {
            onEditClick(photo);
        }
    }

    return (
        <div className="photo">
            <img src={photo.photo} alt={photo.title}/>

            <div className="photo__overlay">
                <h3 className="photo__title">{photo.title}</h3>

                <div className="photo__actions">
                    <div>
                        <Button 
                            outline size="sm" color="light"
                            onClick={() => handleClickEdit(photo)}
                        >
                            Edit
                        </Button>
                    </div>
                    <div>
                        <Button 
                            outline size="sm" color="danger"
                            onClick={() => handleClickRemove(photo)}
                        >
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;