import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getOtherUser} from '../../../actions/userActions';


class UserProfile extends Component {


    componentWillMount(){
        let userId = this.props.history.location.pathname.slice(6);

        console.log(userId)
        console.log(this.props.history.location.pathname)

        this.props.getOtherUser(userId);
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        getOtherUser: PropTypes.func
    }

    
    
    render(){
        
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

    console.log(state.otherUser)

    return {
        isAuthenticated: state.auth.isAuthenticated,
        otherUser: state.otherUser
    }
}

export default connect(mapStateToProps, {getOtherUser})(UserProfile);
