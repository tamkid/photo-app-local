import React from 'react';
import PropTypes from 'prop-types';
import './Banner.scss';

Banner.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
};

Banner.defaultProps = {
    title: '',
    imageUrl: ''
};

function Banner(props) {
    const {title, imageUrl} = props;

    return (
        <div className="banner" style={{backgroundImage: `url(${imageUrl})`}}>
            <label className="banner__title">{title}</label>
        </div>
    );
}

export default Banner;