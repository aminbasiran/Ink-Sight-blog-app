import React from 'react'
import { MdReply } from "react-icons/md";


const Comment = () => {
    return (
        <div className=''>
            <div className='flex justify-between mb-2'>

                <div className='flex gap-2 place-items-center'>
                    <div className='h-8 aspect-square rounded-full bg-black'></div>
                    <p className='text-sm font-semibold'>nrsyzwn1#</p>
                </div>

                <div className='flex gap-2 place-items-center'>
                    <MdReply className='text-lg' />
                    <p className='text-xs font-semibold'>Reply</p>
                </div>
            </div>
            <p className='text-xs text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus minus vitae alias, necessitatibus aliquid culpa modi at laborum dignissimos veritatis sequi tempora esse repudiandae veniam expedita illum soluta porro voluptatibus!.</p>
         
        </div>
    )
}

export default Comment
