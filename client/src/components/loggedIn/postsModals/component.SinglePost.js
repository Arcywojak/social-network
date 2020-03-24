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
            <article className="single-post">
                <div className="single-post-tag-list">
                    {post.tags.map(tag => {
                        return (
                            <div className="single-post-tag">
                                #{tag}
                            </div>
                        )
                    })}
                </div>
                <div className="single-post-author">
                    <div className="single-post-author-img">

                    </div>
                    <div className="single-post-author-text">
                        <b>{post.user_name}</b> has written yesterday
                    </div>
                </div>

                    <div className="single-post-line"></div>

                <div className="single-post-title">
                    {post.title}
                </div>

                    <div className="single-post-line"></div>

                <div className="single-post-content">
                    {post.content}
                </div>
            </article>
        )
    }
   
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps)(HomeLoggedIn);
