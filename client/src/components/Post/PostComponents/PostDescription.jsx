import React from 'react'
import clsx from 'clsx';

const PostDescription = ({children,isExpanded}) => {

    const expandPost = clsx("text-xs font-semibold text-zinc-500 text-left mb-1 ", {
        '': isExpanded,
        'h-[7.80rem] overflow-hidden':!isExpanded
    })
    return (
        <h2 className={expandPost}>
                {children}
        </h2>
    )
}

export default PostDescription
