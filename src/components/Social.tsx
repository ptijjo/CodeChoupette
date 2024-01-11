import React from 'react';
import { TfiInstagram } from "react-icons/tfi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Social : React.FC= () => {
  return (
    <div className='social'>
          <TfiInstagram/>
          <FaFacebookSquare />
          <FaTiktok value={{ color: "white", className: "global-class-name" }}/>
          
    </div>
  )
}

export default Social
