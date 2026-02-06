import React, { useState } from 'react'

const Card = (props) => {
  const [follow, setfollow] = useState("Follow")
  const [count, setcount] = useState(props.followers)
  return (
    <div className='bg-white w-62 h-100 rounded-2xl overflow-hidden '>
      <div className='w-full h-full p-2 relative '>
         <img className='h-full object-cover rounded-2xl' src={props.img} alt="" />
         <div className='absolute bottom-1.5  rounded-2xl left-2 right-2 
                py-3  text-white
                 bg-gradient-to-t 
                      from-white/70 via-black/2 to-transparent
                backdrop-blur-xs '>
            <div className='space-y-2 px-4 mb-3 font-bold'>
            <h1>{props.name}</h1>
            <p className='text-xs font-semibold'>{props.description}</p>
            </div>
            <div className='flex gap-3  px-1 text-white'>
                <div className='flex   '>
                <p  className=' rounded-xl py-1 px-2 font-semibold'><i className="ri-user-line "></i> {count}</p>
                <p className=' rounded-xl py-1 px-2 font-semibold'><i class="ri-checkbox-multiple-line "></i> {props.posts}</p>
                </div>
                <button 
                onClick={(e)=>{
                  if(follow==="Follow"){
                   setfollow("Unfollow")
                   setcount(count + 1)
                   }else{
                    setfollow("Follow")
                    setcount(count -1)
                   }
                }}
                className='bg-white text-black py-1 px-3 rounded-xl font-semibold w-22'>{follow}
                {follow === "Follow" ? <i className="ri-add-line "></i>: ""}
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
