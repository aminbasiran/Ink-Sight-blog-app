import React from 'react'
import PostDate from './PostComponents/PostDate'
import PostImage from './PostComponents/PostImage'
import PostTitle from './PostComponents/PostTitle'
import PostReactions from './PostComponents/PostReactions'
import PostTags from './PostComponents/PostTags'
import PostDescription from './PostComponents/PostDescription'
import PostUser from './PostComponents/PostUser'



const Post = ({children}) => {
    return (
        <div className='cursor-pointer shadow-lg px-2 py-4 dark:bg-[#11161d]'>
            {children}
        </div>
    )
}

Post.Title = PostTitle
Post.Tags = PostTags
Post.Reactions = PostReactions
Post.Date = PostDate
Post.Image = PostImage
Post.Description = PostDescription
Post.User = PostUser

export default Post
