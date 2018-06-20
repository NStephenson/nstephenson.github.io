import React from 'react'
import {aboutMe} from '../data'

export const AboutMe =  () => {
 return(
    <div className="row middle" id="about-me">

      <p className="col-md-8">
        {aboutMe}
      </p>

    </div>
  )
}