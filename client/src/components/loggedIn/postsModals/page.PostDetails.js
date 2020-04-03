import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getPosts} from '../../../actions/postActions';
import PropTypes from 'prop-types';
import {addTime} from '../../../functions/functions';
import '../../../styles/postDetails.min.css'

class PostDetails extends Component {

    componentDidMount(){
        if(this.props.post === undefined){
            this.props.getPosts();
        }
    }

    static propTypes = {
        getPosts: PropTypes.func
    }

    render(){   
        
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
                                    <b>{this.props?.post?.user_name}</b>    
                                </div>
                                <div className="post-details-presence-inner-author-text">
                                    Published <br/>
                                    <b>{addTime(this.props?.post?.add_date)}</b>
                                </div>
                                <div className="post-details-presence-inner-author-text">
                                    5 comments <br/>
                                    <b>Have a chat</b>
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
                        <h2>{this.props?.post?.user_name} has added 6 posts. Learn more about his content.</h2>
                    </section>
                </div>
                <section className="post-details-content-and-sidebar">
                    <article className="post-details-content">
                            {this.props?.post?.content}
                    </article>
                    <aside className="post-details-sidebar">
                        
                    </aside>
                </section>
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

export default connect(mapStateToProps, {getPosts})(PostDetails);
