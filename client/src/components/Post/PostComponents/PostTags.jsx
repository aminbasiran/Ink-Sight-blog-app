import React from 'react'

const PostTags = ({children}) => {
    return (
        <div className='flex flex-row gap-4 mb-2'>
            {children}
        </div>
    )
}

export default PostTags
