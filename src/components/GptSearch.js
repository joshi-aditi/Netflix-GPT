import React from 'react'
import {bg_img} from "../utils/constants"
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={bg_img}
          alt="bg-img"
        />
      </div>
  
    <GptSearchBar/>
    </div>
  )
}

export default GptSearch