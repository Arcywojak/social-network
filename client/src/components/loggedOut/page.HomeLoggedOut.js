import React, { Component } from 'react'
//import {Redirect}
import {toggleAuth} from '../../functions/functions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import logo from '../../images/Logo.svg';
import readingGlass from '../../images/ReadingGlass.svg';
import man from '../../images/Man.svg';
import okShield from '../../images/OkShield.svg';



class HomeLoggedOut extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    componentDidMount(){
        //console.log(document.querySelector('.register'))
    }   
    
    render() {

        if(this.props.isAuthenticated){
            return  <Redirect to="/" />
         }

    return (
        <main className="container">          
            <div className="grid-block">
            <section className="grid-block-child2">
                    <div className="text-with-img">
                        <img src={readingGlass} alt='SomeProp'/>
                        <p>lorem ipsum dolor sit ame blah blah blah</p>
                    </div>
                    <div className="text-with-img">
                        <img src={man} alt='SomeProp'/>
                        <p>Cheese ipsum tab better than</p>
                    </div>
                    <div className="text-with-img">
                        <img src={okShield} alt='SomeProp'/>
                        <p>Shrek is the best movie in the world</p>
                    </div>
                </section>
                <section className="grid-block-child1">
                    <img src={logo} alt="SM"/>
                    <h1>See, what happen to your friends and share your own thoughts</h1>
                    <h3>Join our Social Media</h3>
                    <button className="btn-1 blue" onClick={() => {toggleAuth('REGISTER')}}>Register</button>
                    <button className="btn-1 light-blue" onClick={() => {toggleAuth('LOGIN')}}>Login</button>
                </section>
            </div>
        </main>
    )
  }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(HomeLoggedOut);
