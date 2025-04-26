import React from 'react'

function Cardsmall(val) {
    const random = Object.values(val);
    const data = random[0];
    const { headline, snippet, newsDesk, imageUrl, writtenby } = data;
  return (
      <div className='w-[390px] h-auto bg-white mt-2 gap-y-4 flex flex-col flex-wrap rounded-[10px] border-2 border-black'>
          <img className='w-auto h-auto rounded-t-[10px]'
          src={imageUrl} alt="" />
          <p className='text-[25px] text-black mx-3 '>{headline}</p>
          <p className='text-md mx-3 text-black'>{snippet}</p>
          <div className='flex flex-wrap flex-row justify-between px-3 mb-3 text-black'>
              <p>7min read</p>
              <p>{writtenby}</p>
          </div>
    </div>
  )
}

export default Cardsmall