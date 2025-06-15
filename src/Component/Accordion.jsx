import React from 'react'
import { useState } from 'react';
import '../style.css'
const Accordion = ({title,content}) => {
    const[isActive, setIsActive]= useState(false);

  return (
    
    <div className='accordion-wrapper' key={title}>
    <div className="header" onClick={()=>setIsActive(!isActive)} >
        <div>{title}</div>
        <p>{isActive? "-" : "+"}</p>
    </div>
    <div>
        {isActive && <p>{content}</p>}
    </div>
    </div>
  )
}

export default Accordion
