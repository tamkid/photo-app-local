import { React } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

Header.propTypes = {
    
};

function Header() {
    return (
        <nav className="d-flex justify-content-between align-items-center bg-light header ">
            <div className="row pl-1">
                <div className="col header__branch">
                    <Link to="/">KidApp</Link>
                </div>

                <div className="col header__link">
                    <Link to="/photos">Photos</Link>
                </div>
            </div>
            <div>
                <div className="col header__login">
                    <Link to="/signIn">Sign In</Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;