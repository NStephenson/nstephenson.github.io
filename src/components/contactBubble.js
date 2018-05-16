import React from 'react'

export const ContactBubble = ({link, text, img}) => {

  return (
    <div className="contactBubble">
      <a href="{link}"><img src="{img}" alt=""/></a>
      <p>{text}</p>
    </div>
  )


}