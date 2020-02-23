import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {logout} from '../../../actions/authActions'
import {toggleAuth} from '../../../functions/functions';

class Mobile extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }


    toggleNavigation = () => {
        let nav = document.querySelector('.navigation');
        let hamburgerInner = document.querySelector('.hamburger-inner');
        nav.classList.toggle('active');
        hamburgerInner.classList.toggle('active');
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    render(){

    const navOptions = this.props.isAuthenticated ? (
        <>
        <li className="navigation-item">
            <NavLink to="/user">My profile</NavLink>
        </li>
        <li className="navigation-item">
            <NavLink onClick={this.props.logout} to="/welcome">Logout</NavLink>
        </li>

        <li className="navigation-item">
            <NavLink to="/">Home</NavLink>
        </li>
        <li className="navigation-item">
            <NavLink to="about">About</NavLink>
        </li>
        <li className="navigation-item">
            <NavLink to="contact">Contact</NavLink>
        </li>
        <li className="navigation-item">
            <NavLink to="/rulebook">Rulebook</NavLink>
        </li>
        </>
    ) : (
        <>
        <li className="navigation-item">
            <a onClick={() => {toggleAuth('REGISTER')}}>Register</a>
        </li>
        <li className="navigation-item">
            <a onClick={() => {toggleAuth('LOGIN')}}>Login</a>
        </li>   
        <li className="navigation-item">
            <NavLink to="/welcome">Home</NavLink>
        </li>
        <li className="navigation-item">
            <NavLink to="about">About</NavLink>
        </li>
        <li className="navigation-item">
            <NavLink to="contact">Contact</NavLink>
        </li>
        <li className="navigation-item">
            <NavLink to="/rulebook">Rulebook</NavLink>
        </li>
        </>
    )

    return (
        <>
           <header className="mobile-header">
               <div className="mobile-nav">
                    <div className="nav-logo-mobile">SM</div>
                    <button className="hamburger" onClick={this.toggleNavigation} >
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                    <nav className="navigation">
                        <ul className="navigation-list">
                            {navOptions}
                        </ul>
                    </nav>
               </div> 
           </header>
           <div className="mobile-filler"></div>

           
        </>
    )
}
}

const mapStateToProps = state => {
    return{
        isAuthenticated: state.auth.isAuthenticated,
        image: state.auth.user?.image
    }
}

export default connect(mapStateToProps, {logout})(Mobile);
