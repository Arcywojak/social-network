import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


class HomeLoggedIn extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }
    
    render(){

        //if(!this.props.isAuthenticated){
        //   return  <Redirect to="/welcome" />
        //}

        return (
            <div>
                Hi ima loged in
            </div>
        )
    }
   
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(HomeLoggedIn);
