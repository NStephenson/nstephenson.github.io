import React, {Component} from 'react'
import {Project} from './project'
import {projectData} from '../data'
import '../stylesheets/projects.css'

export class Projects extends Component {
  
  render(){
    const projects = projectData.map(p =>  <Project {...p} id={p.key}/>)

    return (
      <div className="row" id="projects">
      <div className="row">
        <div className="col-8 offset-3">
          <div className="row">
          {projects}
          </div>
        </div>
      </div>
    </div>
    )
  }
}