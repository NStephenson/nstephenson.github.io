import React from 'react'
import {Project} from './project'
import {projectData} from '../data'

export const Projects = () => {

  const projectList = projectData.map((d) => <Project {...d}/>)

  return (
    <div>
      {projectList}
    </div>
  )
}