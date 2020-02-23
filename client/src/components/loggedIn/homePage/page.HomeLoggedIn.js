import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../../styles/homeLoggedIn.css';
import CreatePostForm from './component.CreatePostForm';


class HomeLoggedIn extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired
    }
    
    render(){

        if(!this.props.isAuthenticated){
           return  <Redirect to="/welcome" />
        }

        return (
            <main className="container">
                <div className="inner-container">
                    <CreatePostForm/>
                </div>
            </main>
        )
    }
   
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(HomeLoggedIn);
