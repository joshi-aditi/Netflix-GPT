import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[18rem] w-[97vw] h-screen aspect-video absolute bg-gradient-to-r from-black text-white'>
      <h1 className='font-bold text-3xl pl-8'>{title}</h1>
      <p className=' w-[60%] pl-8 my-2'>{overview}</p>
      <button className='bg-white text-black px-8  py-3 text-md font-semibold rounded-lg mx-8 my-2 hover:opacity-80'>▶ Play</button>
      <button className='bg-gray-500 text-black px-8  py-3 text-md font-semibold rounded-lg hover:opacity-80'>ℹ More info</button>
      
    </div>
  )
}

export default VideoTitle;