import React from 'react'

export default const Project = (project) => {
  return (
    <div className="project">
    <h2>{project.title}</h2>
    {/* List of technologies*/}
    <a href="{project.link}">
      <img src="{project.image}" alt="" className="project-image"/>
    </a>
    <p>{project.description}</p>
    <a href="{project.github}">Github Repo</a>

    </div>
  )
}