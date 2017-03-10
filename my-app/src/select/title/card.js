import React from 'react';
import './title.css'
var Card=React.createClass({
  render(){
    return(
      <div>{this.props.children}</div>
    )
  }
})
var Titlebar=React.createClass({
  render(){
    return(
      <div>{this.props.children}</div>
    )
  }
})
var Title=React.createClass({
  render(){
    var c='title';
    if(this.props.index===this.props.current){
      c='title active'
    }
    return(
      <button className={c}  onClick={this.handleclick}>{this.props.children}</button>
    )
  },
  handleclick(){
    this.props.onClick(this.props.index)
  }
})
var Contentbar=React.createClass({
  render(){
    return(
      <div>{this.props.children}</div>
    )
  }
})
var Content=React.createClass({
contextTypes:{
  current:React.PropTypes.number
},
  render(){
    var c='select';
    if(this.props.index===this.props.current){
      c='select show'
    }
    return(
      <div className={c}>{this.props.children}</div>
    )
  }
})
Card.Titlebar=Titlebar
Card.Title=Title
Card.Contentbar=Contentbar
Card.Content=Content
export default Card