import React from 'react'

const Container = ({children}) => {
    return (
        <div className="w-full  dark:bg-gradient-to-br from-[#0D0D0D] to-[#040c16]">
            <div className="max-w-[1000px] mx-auto my-0 py-7 px-6 ">
                {children}
            </div>
        </div>
    )
}

export default Container
