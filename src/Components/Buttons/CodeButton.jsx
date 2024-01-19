import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";

const CodeButton = ({url}) => {
  return (
    <button 
        className='px-4 py-2 border border-[#3f3f3f] rounded-full flex justify-center items-center gap-2'
        onClick={() => window.open(url, '_blank')}
        >
        Code <FaLocationArrow />
    </button>
  )
}

export default CodeButton
