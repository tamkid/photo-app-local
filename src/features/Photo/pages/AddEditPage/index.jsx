import Images from 'commons/Images';
import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import React from 'react';
import './AddEditPage.scss';
import { v4 as uuidv4 } from 'uuid';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';

PhotoAddEditPage.propTypes = {
    
};

function PhotoAddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const {photoId} = useParams();
    const photos = useSelector(state => state.photo);
    const photoEdit = photos.find(o => o.id === photoId);
    const isEditMode = photoEdit ? true : false;

    const initialValues = !isEditMode 
    ? {
        title: '',
        categoryId: null,
        photo: ''
    }
    : photoEdit;

    const handleFormSubmit = (values) => {
        new Promise(resolve => {
            setTimeout(() => {
                if(!isEditMode) {
                    const newPhoto = {
                        ...values,
                        id: uuidv4()
                    }
                    const action = addPhoto(newPhoto);
                    dispatch(action);                   
                } else {
                    const action = updatePhoto(values);
                    dispatch(action);
                }

                history.push('/photos');
                resolve(true);
            }, 2000)
        });
    }

    return (
        <div className="photo-add-edit">
            <Banner title="Add New Photo To Album" imageUrl={Images.BGR_03} />

            <div className="photo-add-edit__form mt-4">
                <PhotoForm 
                    initialValues={initialValues}
                    isEditMode={isEditMode}
                    onFormSubmit={handleFormSubmit}/>
            </div>
        </div>
    );
}

export default PhotoAddEditPage;