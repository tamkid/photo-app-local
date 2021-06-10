import React from 'react';
import PropTypes from 'prop-types';
import Banner from 'components/Banner';
import Images from 'commons/Images';
import { Link, useHistory } from 'react-router-dom';
import './MainPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';

PhotoMainPage.propTypes = {
    
};

function PhotoMainPage(props) {
    const photos = useSelector(state => state.photo);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleRemovePhoto = (photo) => {
        const action = removePhoto(photo.id);
        dispatch(action);
    }

    const handleEditPhoto = (photo) => {
        if(photo && photo.id){
            history.push(`/photos/${photo.id}`);
        }
    }

    return (
        <div className="photo-main">
            <Banner title="Photo App Kid" imageUrl={Images.BGR_02} />

            <div className="photo-main__add mt-2 mb-2">
                <Link to='/photos/add' className="btn btn-sm btn-outline-success">Add New Photo</Link>
            </div>

            <div className="photo-main__list container-fluid">
                <PhotoList 
                    photos={photos}
                    onRemovePhoto={handleRemovePhoto}
                    onEditPhoto={handleEditPhoto}
                />
            </div>
        </div>
    );
}

export default PhotoMainPage;