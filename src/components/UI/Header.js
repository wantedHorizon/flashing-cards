import React from 'react';
import { NavLink } from 'react-router-dom';
import Routes from '../../router/Routes';
const Header = () => {
    return (
        <div className="ui secondary pointing menu"
            style={{ backgroundColor: 'blue', padding: '5px 15px' }}
        >
            <NavLink
                to={Routes.home}
                exact={true}

                className="item">
                Homepage
            </NavLink>

            <div className="right menu">
                <NavLink
                    to={Routes.management}
                    exact={true}
                    className="item">
                    Manage
                </NavLink>


            </div>

        </div>
    );
}
export default Header;
