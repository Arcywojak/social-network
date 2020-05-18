import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {logout} from '../../../actions/authActions'
import '../../../styles/desktop.css'
import {toggleAuth} from '../../../functions/functions';

class Desktop extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        user: PropTypes.object
    }

    render() {

    const navOptions = this.props.isAuthenticated ? (
        <ul className="nav-list five">
            <li className="nav-link">
                <NavLink exact to="/">Home</NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/about">about</NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/contact">contact</NavLink>
            </li>
            <li className="nav-link">
                <NavLink to={`/user/${this.props.user?._id}`}>
                   <img src={require(`../../../images/avatars/${this.props.user?.image}`)} alt="me" />
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink onClick={this.props.logout} to="/welcome">Logout</NavLink>
            </li>
        </ul>
    ) : (
        <ul className="nav-list four">
            <li className="nav-link">
            <NavLink to="/welcome">Home</NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/about">About</NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="nav-link">
                <a onClick={() => {toggleAuth('LOGIN')}}>Login</a>
            </li>
        </ul>
    )

    return (
        <>
        <header className="deskop-header">
            <div className="deskop-nav">
                <Link className="logo" to="/"><div className="nav-logo-desktop">SM</div></Link>
                <nav className="nav-block">
                    
                        {navOptions}
                    
                </nav>
            </div>
        </header>
        <div className="deskop-filler"></div>
        </>
    )
}
}

const mapStateToProps = state => {

    return{
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, {logout})(Desktop);
