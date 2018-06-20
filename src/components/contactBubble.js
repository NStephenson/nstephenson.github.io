import React from 'react'

export const ContactBubble = ({link, text, logo}) => {

  return (
    <div className="contact-bubble ">
      <a href={link} target='_blank'>
        <img src={logo} alt={text + '-logo'} className="social-icon"/>
      </a>
    </div>
  )


}