import React from "react";
import Button from "./child/child.js"
var Child=React.createClass({
  render(){
    return (
      <div>
        <h2>按钮</h2>
        <Button size='big' type='button'>hello</Button>
      </div>
    )
  }
})

export default Child
