import React from 'react'

const PostTitle = ({children}) => {
    return (
        <h1 className='text-xl font-bold text-left mb-1 dark:text-white'>{children}</h1>
    )
}

export default PostTitle
