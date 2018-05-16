import React from 'react'

export const Project = ({title, link, image, github, description}) => {
  return (
    <div className="project">
    <h2>{title}</h2>
    {/* List of technologies*/}
    <a href="{link}">
      <img src="{image}" alt="" className="project-image"/>
    </a>
    <p>{description}</p>
    <a href="{github}">Github Repo</a>

    </div>
  )
}