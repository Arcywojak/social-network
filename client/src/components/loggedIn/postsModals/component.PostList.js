import React, {Component} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPosts} from '../../../actions/postActions';
import SinglePost from './component.SinglePost';

class PostList extends Component {

    state = {
        posts : []
    }

    static propTypes = {
        posts: PropTypes.array,
        getPosts: PropTypes.func
    }

    componentDidMount(){
        this.props.getPosts();
        console.log('I MOUNTED')
    }
    componentDidUpdate(prevProps){
        //console.log(this.state.posts)
        if(prevProps.posts.length === 0){
          //  this.props.getPosts();
            this.setState({
                posts: this.props.posts
            })
        }
    }

    render(){

    const listOfPosts = this.props.posts.map(post => {
        return (
            <SinglePost post={post} key={post._id}/>
        )
        
    })
    
        return (
            <div className="post-list-container">
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
