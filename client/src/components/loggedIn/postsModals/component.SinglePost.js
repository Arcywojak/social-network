import React, {Component} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


class HomeLoggedIn extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    
    
    render(){
        const {post} = this.props;

        return (
            <div className="single-post">
                {post.title} <br/>
                {post.content}
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
