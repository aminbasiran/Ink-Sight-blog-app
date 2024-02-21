import React from 'react'

const PostUser = ({children}) => {
    return (
        <div className='flex flex-row gap-2 my-2 '>
            <div className=' h-6 aspect-square bg-violet-600 rounded-full '></div>
            <h1 className='text-sm font-semibold text-sky-600 '>{children}</h1>
        </div>
    )
}

export default PostUser
