// TO DO THIS PAGE I DREW INSPIRATION FROM CSS TRICKS
import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getPosts} from '../../../actions/postActions';
import PropTypes from 'prop-types';
import {getCommentsAll, addComment} from '../../../actions/commentActions';
import {addTime} from '../../../functions/functions';
import SingleComment from './component.SingleComment';
import Axe from '../../../images/axe.svg';
import GoBack from '../../../images/goBack.svg';

class PostDetails extends Component {

    componentDidMount(){
        if(this.props.post === undefined){
            this.props.getPosts();
        }
        if(this.props.comments.length === 0){
            this.props.getCommentsAll();
        }

        document.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        document.removeEventListener('scroll', this.handleScroll);
    }

    state={
        message:''
    }

    static propTypes = {
        getPosts: PropTypes.func,
        getCommentsAll: PropTypes.func,
        addComment: PropTypes.func
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {message} = this.state;

        if(message.length > 0){
            const {_id} = this.props.post
            
            const newComment = {
                post_id : _id,
                user_name : this.props.user.name,
                user_image : this.props.user.image,
                content : message
            }
            this.setState({
                message: ''
            })
            this.props.addComment(newComment);
        }

        

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {message} = this.state;

        if(message.length > 0){
            const {_id} = this.props.post
            
            const newComment = {
                post_id : _id,
                user_name : this.props.user.name,
                user_image : this.props.user.image,
                content : message
            }
            this.setState({
                message: ''
            })
            this.props.addComment(newComment);
        }    

    }

    showAxe = () => {
        let axe = document.querySelector('.axe');

        if(window.innerWidth<= 850){
            axe.classList.toggle('mobile-shown-axe');
        }
        
    }

    handleScroll = () => {
        let axeBlock = document.querySelector('.axe');
        let axeParentBlock = document.querySelector('.axe-parent');

        if(axeParentBlock.clientHeight < 750){
            return;
        }

        if( //WE ARE INTO CONTENT  
              (
                axeBlock.clientHeight - window.scrollY
              ) < -30 
                &&
              ( 
                axeParentBlock.offsetTop - window.scrollY - 120 + 
                axeParentBlock.clientHeight - axeBlock.clientHeight
              ) > 0
          ){

            axeBlock.classList.add('flying-axe');
            axeBlock.classList.remove('flying-axe-stay-down');
            
        } else if( //WE ARE ABOVE CONTENT
             (
              axeBlock.clientHeight - window.scrollY
             ) > -29){

            axeBlock.classList.remove('flying-axe');
            axeBlock.classList.remove('flying-axe-stay-down');

        } else if( //WE ARE AT THE BOTTOM OF CONTENT
            (
              axeParentBlock.offsetTop - window.scrollY - 120 + 
              axeParentBlock.clientHeight - axeBlock.clientHeight
            ) < 0
            ) {
                if(window.innerWidth > 850){
                    axeBlock.classList.remove('flying-axe');
                    axeBlock.classList.add('flying-axe-stay-down');
                }
                 
            }
    }

    render(){   

        const listOfComments = this.props?.comments?.length ? (
            this.props.comments.map(com => {
                return (
                    <>
                    <SingleComment comment={com} />
                    </>
                )}
        )) : (
        <div className="no-comments">   
            <h2>No comments yet, be first.</h2>
        </div>
        )
        
       const image = this.props?.post?.user_image !==undefined ? (
           <>
              <img src={require(`../../../images/avatars/${this.props?.post?.user_image}`)} alt="me"/>
           </>
       ) : (
        <>
        <img src={require('../../../images/avatars/NoImg.png')} />
     </>
       )


        return (
            <main className="container post-details">

            {/* FLYING BLOCK */}
                <Link to='/'>
                    <div className="flying-block-go-back">
                        <img src={GoBack} alt="go back" />
                    </div>
                </Link>
            {/* ///////////// */}

                <div className="post-details-wrapper">
                    <section className="post-details-presence">
                        <div className="post-details-presence-inner">
                            <h1 className="post-details-presence-inner-h1">
                                {this.props?.post?.title}
                            </h1>
                            <div className="post-details-presence-inner-author">
                                <div className="post-details-presence-inner-author-img">
                                    {image} 
                                </div>
                                <div className="post-details-presence-inner-author-text">
                                    Author <br/>
                                    <Link to={`/user/${this.props?.post?.user_name}`}>
                                        <b>{this.props?.post?.user_name}</b>   
                                    </Link> 
                                </div>
                                <div className="post-details-presence-inner-author-text">
                                    Published <br/>
                                    <b>{addTime(this.props?.post?.add_date)}</b>
                                </div>
                                <div className="post-details-presence-inner-author-text">
                                    5 comments <br/>
                                    <a href="#comments"><b>Have a chat ➡️</b></a>
                                </div>
                            </div>
                            <div className="single-post-tag-list post-details">
                                {this.props?.post?.tags && this.props.post.tags.map(tag => {
                                return (
                                    <div className="single-post-tag">
                                        #{tag}
                                    </div>
                                )
                                    })}
                            </div>
                        </div>  
                    </section>
                    <section className='post-details-author-ad'>
                        <h2>{this.props?.post?.user_name} has added 6 posts. 
                            <Link to={`/user/${this.props?.post?.user_name}`}>
                                 Learn more about his content.
                            </Link>
                        </h2>
                    </section>
                </div>
                <section className="post-details-content-and-sidebar">
                    <article className="post-details-content">
                           <pre> {this.props?.post?.content} </pre>
                    </article>
                    <aside className="post-details-sidebar axe-parent">
                        <div className="post-details-advert-block axe" onClick={this.showAxe}>
                            <h2>
                             THERE SHOULD BE SOME ADVERT BUT I WANT TO SHOW YOU THIS AXE
                            </h2>
                            <img src={Axe} alt="axe" />
                        </div>
                    </aside>
                </section>
                <section className="post-details-comment-block">
                    <div className="post-details-comment-block-inner">    
                        <h1>Leave feedback</h1>

                        <div className="comment-it" id="comments">
                            <div className="comment-it-user-img">
                                {image}
                            </div>
                            <form className="comment-it-user-input">
                                <textarea value={this.state.message} name="message" className="comment-it-input" 
                                onChange={(e) => {this.handleChange(e)}} placeholder="Write a comment" required></textarea>
                                <button className="add-comment-btn" onClick={this.handleSubmit}>Enter</button>
                            </form> 
                        </div>
                        
                        <div className="post-details-comment-list">
                        <h1>Comments</h1>
                            {listOfComments}

                        </div>
                    </div>
                </section>
            </main>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.location.pathname.slice(7);
    let actualPost = state?.posts?.posts.find(post => post?._id === id)
    let filteredComments = [];
        filteredComments = state.comment.comments.filter(com => com?.post_id === actualPost?._id);
   
    return {
        user: state.auth.user,
        post: actualPost,
        comments:filteredComments
    }
}

export default connect(mapStateToProps, {getPosts, getCommentsAll, addComment})(PostDetails);
