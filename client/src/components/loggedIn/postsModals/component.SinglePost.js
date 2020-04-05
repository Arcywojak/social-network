import React, {Component} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../../styles/singlePost.min.css';
import starIcon from '../../../images/starIcon.svg';
import commentIcon from '../../../images/CommentIcon.svg';
import SingleComment from './component.SingleComment';
import shareIcon from '../../../images/shareIcon.svg';
import {Link} from 'react-router-dom';
import {addTime} from '../../../functions/functions';


class HomeLoggedIn extends Component {

    static propTypes = {
        user: PropTypes.object
    }

    state = {
        noYouDoNot:false,
    }

    noYouDoNot = () => {
        if(!this.state.noYouDoNot){
            this.setState({
                noYouDoNot:true
            })

            setTimeout(() => {
                if(this.state.noYouDoNot){
                    this.setState({
                        noYouDoNot:false
                    })
                }
            },3000)
        }
    }

    
    
    render(){

        const {post} = this.props;

        const noYouDoNotBlock = this.state.noYouDoNot ? (
            <div className="no-you-do-not">
                No, you do not...

                <div className="triangle"></div>
            </div>
        ) : (null)

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
                        <img src={require(`../../../images/avatars/${post.user_image}`)} alt="me" />
                    </div>
                    <div className="single-post-author-text">
                        <b>{post.user_name}</b> has written {addTime(post.add_date)}
                    </div>
                </div>

                    <div className="single-post-line"></div>

                <Link to={`posts/${post._id}`} className="link-to-post">
                    <div className="single-post-title">
                        {post.title}
                    </div>
                </Link>

                    <div className="single-post-line"></div>

                <div className="single-post-content">
                    {post.content}
                </div>

              

                <div className="under-content-block">
                    <div className="info-about-reach">
                        <span className="first">
                            likes:  {Math.round(Math.random()*(50 - 5 + 1) + 5)}
                        </span>
                        <span className="second">
                           comments:  {Math.round(Math.random()*(30 - 0 + 1))}
                        </span>
                        <span className="third">
                           shares:  {Math.round(Math.random()*(30 - 0 + 1))} 
                        </span>
                    </div>

                    <div className="single-post-line"></div>

                    <div className="react-on-post-block">
                        <div className="react-on-post-block-text-and-img">
                            <div className="react-on-post-block-img">
                                <img src={starIcon} alt="super" />
                            </div>
                            <div className="react-on-post-block-text" onClick={this.noYouDoNot}>
                                I like it!
                                {noYouDoNotBlock}
                            </div>
                        </div>

                        <div className="react-on-post-block-vertical-line"></div>

                        <div className="react-on-post-block-text-and-img">
                            <div className="react-on-post-block-img">
                                <img src={commentIcon} alt="comment" />
                            </div>
                            <div className="react-on-post-block-text">
                                See comments
                            </div>
                        </div>

                        <div className="react-on-post-block-vertical-line"></div>

                        <div className="react-on-post-block-text-and-img">
                            <div className="react-on-post-block-img">
                                <img src={shareIcon} alt="share" />
                            </div>
                            <div className="react-on-post-block-text">
                                Share it
                            </div>
                        </div>
                    </div>
                    <div className="comments-block">
                    
                    <div className="comments-list">

                        <SingleComment />
                        <SingleComment />
                        <SingleComment />

                    </div>

                        <div className="comment-it">
                            <div className="comment-it-user-img">
                                <img src={require(`../../../images/avatars/${this.props.user.image}`)} />
                            </div>
                            <form className="comment-it-user-input">
                                <input className="comment-it-input" placeholder="Write a comment" required/>
                                <button className="add-comment-btn" onClick={this.addComment}>Enter</button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </article>
        )
    }
   
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(HomeLoggedIn);
