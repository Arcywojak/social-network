import React, { Component } from 'react'

class SingleComment extends Component {
    render() {
        return (
            <div className="single-comment">
                <div className="single-comment-user-img">
                    <img src={require('../../../images/avatars/NoImg.png')} alt="user"/>
                </div>
                <div className="single-comment-text">
                    <b>MACKO123</b>
                     loremi psym asdas sit amet hahahalo ho
                </div>
            </div>
        )
    }
}

export default SingleComment
