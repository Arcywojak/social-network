import React, {Component} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPosts} from '../../../actions/postActions';
import SinglePost from './component.SinglePost';

class PostList extends Component {

    static propTypes = {
        posts: PropTypes.object,
        getPosts: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.getPosts();
    }

    render(){

    const listOfPosts = this.props.posts.map(post => {
        return (
            <SinglePost post={post} key={post.id}/>
        )
        
    })
    
        return (
            <div>
                {listOfPosts}
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps, {getPosts})(PostList);
