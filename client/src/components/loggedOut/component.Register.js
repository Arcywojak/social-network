import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {toggleAuth} from '../../functions/functions';
import {register} from '../../actions/authActions';
import {clearErrors} from '../../actions/errorActions';
import PropTypes from 'prop-types';

import x from '../../images/x.svg';
import logo from '../../images/Logo.svg';
import noImg from '../../images/avatars/NoImg.png';
import shrek from '../../images/avatars/shrek.png';
import fiona from '../../images/avatars/fiona.png';
import osiol from '../../images/avatars/osiol.png';
import smoczyca from '../../images/avatars/smoczyca.png';
import ciastek from '../../images/avatars/ciastek.png';
import ksiaze from '../../images/avatars/ksiaze.png';
import karzel from '../../images/avatars/karzel.png';
import baba from '../../images/avatars/baba.png';
import fbIcon from '../../images/facebook.png';

class Register extends Component {

    state = {
        username:'',
        email2:'',
        password2:'',
        repPass:'',
        avatar:'noImg.png',
        errors2:null
    }

    static propTypes = {
        register: PropTypes.func.isRequired,
        error: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    componentDidUpdate(prevProps) {
        const {error} = this.props;
        
        if(error !== prevProps.error){
            
            if(error.id === 'REGISTER_FAIL'){

                setTimeout(() => {
                    this.scrollTopIfErrorOccur();
                }, 1)
                
                
                this.setState({
                    errors2: error.msg.msg
                })
            } else {
                this.setState({
                    errors2: null
                })  
            }
        }      
    }

    scrollTopIfErrorOccur = () => {
        let ScrollableRegisterForm = document.getElementById('reg');
        ScrollableRegisterForm.scrollTop = 0;
    }

    chooseAvatar = (e) => {
        let previous = document.querySelector('.av.active');
        previous.classList.remove('active');
        e.target.classList.add('active');
        this.setState({
            avatar:e.target.alt
        })
       
    }
    
    changeData = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            email: this.state.email2,
            password: this.state.password2,
            repPassword: this.state.repPass,
            image: this.state.avatar
        }
        
        this.props.register(newUser);
    }

    render() {

        return (
            <div>              
                <form className="form-auth register flying-component none" onSubmit={this.handleSubmit}>
                    <div className="flying-exit">
                        <img src={x} alt="exit" onClick={() => {toggleAuth(null, true)}}/>
                    </div>
                    <div className="text-with-img">
                        <img src={logo} alt="SM"/>
                        <p>Join us right now!</p>   
                    </div>
                    <div className="form-nav">
                        <span  onClick={() => {toggleAuth('LOGIN')}}>Login</span>
                        <span className="active" onClick={() => {toggleAuth('REGISTER')}}>Register</span>
                    </div>

                    <div className="scroll-me-babe" id="reg">
                    {this.state.errors2 ? (<div className="error-msg">{this.state.errors2}</div>) : ('') }  
                        <input type="text" id="username" name="username" placeholder="USERNAME"
                         onChange={(e) => {this.changeData(e)}}/>

                    
                        <input type="mail" id="email2" name="email" placeholder="EMAIL"
                        onChange={(e) => {this.changeData(e)}}/>

                    
                        <input type="password" id="password2" name="password" placeholder="PASSWORD"
                         onChange={(e) => {this.changeData(e)}}/>

                        
                        <input type="password" id="repPass" name="repPass" placeholder="REPEAT PASSWORD"
                        onChange={(e) => {this.changeData(e)}}/>

                        <h2 className="blue-text">Choose your avatar</h2>
                        <div className="avatars">
                            <div className="avatar">
                                <img className="av active" src={noImg} alt="noImg" onClick={(e)=>{ this.chooseAvatar(e) }}/>
                            </div>
                            <div className="avatar">
                                <img className="av" src={shrek} alt="shrek" onClick={(e)=>{ this.chooseAvatar(e) }}/>
                            </div>
                            <div className="avatar">
                                <img className="av" src={fiona} alt="fiona" onClick={(e)=>{ this.chooseAvatar(e) }}/>
                            </div>
                            <div className="avatar">
                                <img className="av" src={osiol} alt="osiol" onClick={(e)=>{ this.chooseAvatar(e) }}/>
                            </div>
                            <div className="avatar">
                                <img className="av" src={smoczyca} alt="smoczyca" onClick={(e)=>{ this.chooseAvatar(e) }}/>
                            </div>
                            <div className="avatar">
                                <img className="av" src={ciastek} alt="ciastek" onClick={(e)=>{ this.chooseAvatar(e) }}/>
                            </div>
                            <div className="avatar">
                                <img className="av" src={ksiaze} alt="ksiaze" onClick={(e)=>{ this.chooseAvatar(e) }}/>
                            </div>
                            <div className="avatar">
                                <img className="av" src={karzel} alt="karzel" onClick={(e)=>{ this.chooseAvatar(e) }}/>
                            </div>
                            <div className="avatar">
                                <img className="av" src={baba} alt="baba" onClick={(e)=>{ this.chooseAvatar(e) }}/>
                            </div>
                        </div>
                        <p>
                            By creating an account you agree with our   
                            <Link to='/rulebook' onClick={()=>toggleAuth('', true)}> regulations </Link>   
                            and the fact that shrek is the best movie
                        </p> 
                        <button className="btn-1 light-blue">Register</button>

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
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, {register, clearErrors})(Register);
