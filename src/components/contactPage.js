import React from 'react'
import {ContactBubble} from './contactBubble'
import { contactData } from '../data'

export const ContactPage = () => {
  const contactBubbles = contactData.map((t) => <ContactBubble {...t}/>)

  return (
    <div>
      <p>Hello!</p>
      {contactBubbles}
    </div>
  )
}


// Contact page: