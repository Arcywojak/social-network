import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


class UserProfile extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    
    
    render(){
        console.log(this.props)
      //  if(!this.props.isAuthenticated){
      //     return  <Redirect to="/welcome" />
        //}

        return (
            <div>
                user name 
            </div>
        )
    }
   
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(UserProfile);
