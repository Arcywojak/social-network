import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getSinglePost} from '../../../actions/postActions';
import PropTypes from 'prop-types';

class PostDetails extends Component {

    static propTypes = {
        getSinglePost: PropTypes.func
    }

    render(){      

        return (
            <main className="container">
                {this.props.post.title}
            </main>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.location.pathname.slice(7);
    return {
        post: state.posts.posts.find(post => post._id === id)
    }
}

export default connect(mapStateToProps, {getSinglePost})(PostDetails);
