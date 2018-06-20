import React, {Component} from 'react'
import {Project} from './project'
import {projectData} from '../data'

export class Projects extends Component {

  constructor(props){
    super(props)
    this.state = {index: 0}
    this.handlePrev = this.prevClick.bind(this)
    this.handleNext = this.nextClick.bind(this)
  }

  prevClick(){
    if(this.state.index === 0){
      this.setState({index: projectData.length - 1})
    } else {
      this.setState({index: --this.state.index})
    }
  }

  nextClick(){
    if(this.state.index === projectData.length - 1){
      this.setState({index: 0})
    } else {
      this.setState({index: ++this.state.index})
    }
  }

  
  render(){
    // if(!this.state){
    //   return ("Loading")
    // }
    return (
      <div className="row projects">
      <div className="col-md-2" onClick={this.handlePrev}>Prev</div>
      <div className="col-md-8">
        <Project {...projectData[this.state.index]}/>
      </div>
      <div className="col-md-2" onClick={this.handleNext}>Next</div>
    </div>
    )
  }
}