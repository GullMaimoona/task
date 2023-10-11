import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
const FooterLink = ({ link }) => {
  return (
    <p className="ml-1 text-lg  text-black/60 inline-flex items-center space-x-4">
    <span className="text-purple-400">
      <AiOutlinePlus />
    </span>
    <span>{link.title}</span>
    </p>
  )
}

export default FooterLink