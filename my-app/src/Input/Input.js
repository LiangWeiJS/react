import React from 'react';
var Input=React.createClass({
  render(){
    return(
      <input type="text" onKeyDown={this.keydown}/>
    )
  },
  keydown(ev){
    if(ev.key === 'Enter'){
      this.enter(ev.target.value)
    };
  },
  enter(val){
    alert(val)
  }
})
export default Input