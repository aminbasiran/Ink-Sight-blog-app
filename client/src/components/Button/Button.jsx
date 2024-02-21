import React from 'react'

const Button = ({children,...props }) => {

    return (
        <button {...props} className='text-right bg-black rounded-md font-semibold text-sm text-zinc-300  dark:text-white dark:bg-indigo-800'>{children}</button>
    )
}

export default Button
