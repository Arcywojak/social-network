import React, {Component} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../../styles/postDetails.min.css';


class HomeLoggedIn extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    
    
    render(){
        const {post} = this.props;
       
        const AddTime = () => {

            const actualTime = Date.now();
            
            const timeInMinutes = (actualTime - post.add_date) / 60000;
            console.log(Math.floor(timeInMinutes))
            if(timeInMinutes > 58){
                const timeInHours = timeInMinutes / 60;

                if(timeInHours > 22){
                    
                    return `${Math.floor(timeInHours/24)} days ago`
                } else {
                    return `${Math.floor(timeInHours)} hours ago`
                }

            } else {
                return `${Math.floor(timeInMinutes)} minutes ago`
            }

        }

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
                        <b>{post.user_name}</b> has written {AddTime()}
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

                <div className="single-post-line"></div>

                <div className="under-content-block">
                    <div className="info-about-reach">
                        <span className="first">
                            likes:32
                        </span>
                        <span className="second">
                           comments:16 
                        </span>
                        <span className="third">
                           shares:3 
                        </span>
                    </div>

                    <div className="single-post-line"></div>

                    <div className="super-and-comment">
                        <div>
                            Super!
                        </div>
                        <div>
                            Comments
                        </div>
                    </div>
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
