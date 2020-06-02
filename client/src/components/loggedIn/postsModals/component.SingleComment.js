import React, { Component } from 'react';
import {addTime} from '../../../functions/functions';
import {Link} from 'react-router-dom'

class SingleComment extends Component {

    
    render() {
        return (
            <div className="single-comment-wrapper">
                <div className="single-comment">
                    <div className="single-comment-user-img">
                        <img src={require(`../../../images/avatars/${this.props.comment.user_image}`)} alt="user"/>
                    </div>
                    <div className="single-comment-text">
                        <Link to={`/user/${this.props.comment.user_name}`}>
                            <b>{this.props.comment.user_name}</b>
                        </Link>
                        {this.props.comment.content}
                    </div>
                </div>
                <div className="react-to-comment">
                    <span className="span-hover">
                        I like it!
                    </span>
                    <span className="span-margin">
                        {addTime(this.props.comment.date)}
                    </span>
                    <span className="span-hover">
                        report
                    </span>
                </div>
            </div>
        )
    }
}

export default SingleComment
