import React, { Component } from 'react'

class SingleComment extends Component {
    render() {
        return (
            <div className="single-comment-wrapper">
                <div className="single-comment">
                    <div className="single-comment-user-img">
                        <img src={require('../../../images/avatars/NoImg.png')} alt="user"/>
                    </div>
                    <div className="single-comment-text">
                        <b>MACKO123</b>
                        loremi psym asdas sit amet hahahalo ho emi psym asdas sit amet hahahalo hoemi psym asdas sit amet hahahalo ho
                    </div>
                </div>
                <div className="react-to-comment">
                    <span className="span-hover">
                        I like it!
                    </span>
                    <span className="span-margin">
                        3 hours ago
                    </span>
                    <span className="span-hover">
                        report comment
                    </span>
                </div>
            </div>
        )
    }
}

export default SingleComment
