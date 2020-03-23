import React from 'react'
import {removeAll} from '../../../functions/functions'

const PostAdded = () => {
    return (
        <div className="flying-component post-added-information none">
            <div className="post-added-information-title">
                Post has been added
            </div>
            <div className="post-added-information-second">
                <h2>If you want to delete it, you can do it from your profile</h2>
                <button className="btn-1 light-blue" onClick={removeAll}>Ok</button>
            </div>
        </div>
    )
}

export default PostAdded
