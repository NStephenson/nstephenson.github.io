import React from 'react'
import {aboutMe} from '../data'

export const AboutMe =  () => {
 return(
    <div className="row align-items-center" id="about-me">

      <p className="col-sm-6 offset-sm-3">
        {aboutMe}
      </p>

    </div>
  )
}