import React from 'react'

export const ContactBubble = ({link, text, logo}) => {

  return (
    <div className="contact-bubble ">
      <a href={link} target='_blank'>
        <img src={process.env.PUBLIC_URL + logo} alt={text + '-logo'} className="social-icon"/>
      </a>
    </div>
  )


}