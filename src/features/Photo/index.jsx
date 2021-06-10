import NotFound from 'components/NotFound';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import PhotoAddEditPage from './pages/AddEditPage';
import PhotoMainPage from './pages/MainPage';

Photo.propTypes = {
    
};

function Photo(props) {
    const {path, url} = useRouteMatch();
    return (
        <Switch>
            <Route exact path={url} component={PhotoMainPage} />
            <Route path={`${url}/add`} component={PhotoAddEditPage} />
            <Route path={`${url}/:photoId`} component={PhotoAddEditPage} />

            <Route component={NotFound} />
        </Switch>
    );
}

export default Photo;