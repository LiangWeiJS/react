import React from "react";
require('./child.css')
var Button=React.createClass({
  render(){
    return(
      <button className={this.props.size} type={this.props.type}>{this.props.children}</button>
    )
  }
})

export default Button