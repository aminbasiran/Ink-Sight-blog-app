import React from 'react'
import Comment from '../Comment/Comment'
import CommentReply from '../CommentReply/CommentReply'

const CommentSection = () => {
    return (
        <div className='bg-zinc-100 p-3'>
            <Comment/>
            <CommentReply/>
            <CommentReply/>
        </div>
    )
}

export default CommentSection
