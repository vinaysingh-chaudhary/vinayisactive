import React from 'react'
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";

const SocialButton = ({platform,url, username}) => {

  const iconMap = {
    twitter: FaXTwitter,
    linkedin: FaLinkedin,
    github: FaGithubAlt,
  };

  const SocialIcon = iconMap[platform]; 
  console.log(SocialIcon);

  return (
    <button 
        className='px-4 py-2 border border-[#3f3f3f] rounded-full flex justify-center items-center gap-1'
        onClick={() => window.open(url, '_blank')}
        >
        <SocialIcon /> @{username}
    </button>
  )
}

export default SocialButton
