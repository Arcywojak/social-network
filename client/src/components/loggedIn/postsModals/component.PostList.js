import React, {Component} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPosts} from '../../../actions/postActions';
import {getCommentsAll} from '../../../actions/commentActions';
import SinglePost from './component.SinglePost';

class PostList extends Component {

    static propTypes = {
        posts: PropTypes.array,
        getPosts: PropTypes.func,
        getCommentsAll: PropTypes.func
    }

    componentDidMount(){
        this.props.getPosts();
        this.props.getCommentsAll();
        
    }
    componentDidUpdate(){
        this.checkOverflow();
    }

    checkOverflow = () => {
        let contentBlocks = document.querySelectorAll('.single-post-content-inner');

        
        contentBlocks.forEach( (block) => {


            if(block.clientHeight > 408){            
    
                block.nextElementSibling.classList.remove('none');
            }

        })

        
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

export default connect(mapStateToProps, {getPosts, getCommentsAll})(PostList);
