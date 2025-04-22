import React from 'react'

function Newsletter() {
  return (
      <div className='w-auto h-auto bg-violet-500 p-2 flex flex-col flex-wrap gap-y-3 text-white mt-5 rounded-md'>
          <p className='text-[25px] text-black underline-offset-auto'>NewsLetter</p>
          <p className='text-[20px]'>Stay updated with our latest news and articles. Subscribe to our newsletter.</p>
          <input className="bg-white border-2 border-black text-black p-1" type="text" />
          <button className='bg-black py-2'>Subscibe</button>
    </div>
  )
}

export default Newsletter