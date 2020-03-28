import React, { Component } from 'react';
import x from '../../images/x.svg';
import {toggleAuth} from '../../functions/functions';
import logo from '../../images/Logo.svg';
import fbIcon from '../../images/facebook.png';

import PropTypes from 'prop-types';
import {login} from '../../actions/authActions';
import {clearErrors} from '../../actions/errorActions';
import { connect } from 'react-redux';

class Login extends Component {

    state = {
        email1:'',
        password1:'',
        errors1:null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        login: PropTypes.func.isRequired,
        error: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const {error} = this.props;
        if(error !== prevProps.error){
            
            if(error.id === 'LOGIN_FAIL'){
                
                this.setState({
                    errors1: error.msg.msg
                })
            } else {
                this.setState({
                    errors1: null
                })
            }
        }
    }

    changeData = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: this.state.email1,
            password: this.state.password1
        }

        this.props.login(user);
    }

    render() {
        return (
            <div >
                
                <form className="form-auth login anim-fade-in flying-component none" onSubmit={this.handleSubmit}>
                    <div className="flying-exit">
                        <img src={x} alt="exit" onClick={() => {this.props.clearErrors();toggleAuth(null, true)}}/>
                    </div>
                    <div className="text-with-img">
                        <img src={logo} alt="SM"/>
                        <p>Login to SM</p>
                    </div>
                    
                    <div className="form-nav">
                        <span className="active" onClick={() => {toggleAuth('LOGIN')}}>Login</span>
                        <span onClick={() => {toggleAuth('REGISTER')}}>Register</span>
                    </div>
                     {this.state.errors1 ? (<div className="error-msg">{this.state.errors1}</div>) : ('') }
                    <label htmlFor="email1">Email</label>
                    <input type="mail" id="email1" name="email"
                     onChange={(e) => {this.changeData(e)}}/>

                    <label htmlFor="password1">Password</label>
                    <input type="password" id="password1" name="password"
                    onChange={(e) => {this.changeData(e)}}/>
                    
                    <button className="btn-1 light-blue">Login</button>
                    <div className="line-text-line">
                        <div className="left-line"></div>
                            <span>Or</span>
                        <div className="right-line"></div>
                    </div>
                    <button className="btn-1 fb">
                        <div>
                            <img src={fbIcon} alt="facebook" />
                        </div>
                        <div>
                            Use facebook
                        </div>
                    </button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
       isAuthenticated: state.auth.isAuthenticated,
       error: state.error
    }
}

export default connect(mapStateToProps, {login, clearErrors})(Login);
