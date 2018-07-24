import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { userActions } from '../../actions/userActions'

const Menu = (props) => {
    const { logout, loggedIn } = props;
    return (
        <menu className="header__menu">
            <div className="menu__logo"><Link to='/'>Serjio's pizza</Link></div>
            <div className="menu__authorization">
                {loggedIn ? <div className="menu__authorization-logout menu__authorization-item" onClick={() => logout()}>Logout</div>
                    : <div className="menu__authorization_no-logged">
                        <div className="menu__authorization-enter menu__authorization-item"><Link to='/login'>Sign in</Link></div>
                        <div className="menu__authorization-registration menu__authorization-item"><Link to='/registration' >Sign up</Link></div>
                    </div>}
            </div>
        </menu>
    )
}

const mapStateToProps = (state) => {
    const { loggedIn } = state.login;
    return {
        loggedIn
    };

}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(userActions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);