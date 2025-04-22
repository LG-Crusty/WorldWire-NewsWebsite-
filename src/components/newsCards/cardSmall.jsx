import React from 'react'

function Cardsmall() {
  return (
      <div className='w-[390px] h-auto bg-white mt-2 gap-y-4 flex flex-col flex-wrap rounded-[10px] border-2 border-black'>
          <img className='w-auto h-auto rounded-t-[10px]'
            src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg" alt="" />
          <p className='text-[25px] text-black mx-3 '>Lorem ipsum dolor sit amet consectetur.</p>
          <p className='text-md mx-3 text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eligendi rem praesentium</p>
          <div className='flex flex-wrap flex-row justify-between px-3 mb-3 text-black'>
              <p>7min read</p>
              <p>written by</p>
          </div>
    </div>
  )
}

export default Cardsmall