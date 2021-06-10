import { React } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

Header.propTypes = {
    
};

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light header">
            <div className="header__branch">
                <Link to="/">KidApp</Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse header__link ml-2" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/photos">Photos</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;