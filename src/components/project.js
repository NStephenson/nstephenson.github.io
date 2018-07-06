import React, {Component} from 'react'

export class Project extends Component {


  render(){
    let props = this.props
    return (
      <div className="project col-md-3" id={'project-' + props.id} style={{backgroundImage: `url(${process.env.PUBLIC_URL + props.image}`}}>
        <figcaption className="invis">
          <a href={props.link} target="_blank">
            <h2>{props.name}</h2>
          </a>
          <p>{props.description}</p><br></br><br></br>
          <a href={props.github} target="_blank">Github Repo</a>
        </figcaption>
      </div>
    )
  }

}