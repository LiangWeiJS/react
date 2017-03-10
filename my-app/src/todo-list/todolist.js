var React= require("react"),
    Child=require("./child/child.js");
var Todo=React.createClass({
  getInitialState(){
    return {
      val:"react",
      item:['aaa']
    }
  },
  render(){
    return (
      <div className="child">
        <input type="text" value={this.state.val} onChange={this.handleChange}/>
        <button onClick={this.handerClick}>提交</button>
        <Child items={this.state.item} onDel={this.handledel}/>
      </div>
    )
  },
  handleChange(ev){
    var val=ev.target.value;
    this.setState({
      val: val
    })
  },
  handledel(n){
    var arr=this.state.item;
    arr.splice(n,1)
    this.setState({
      item:arr
    })
  },
  handerClick(){
    var arr=this.state.item;
    arr.push(this.state.val);
    this.setState({
      item:arr,
      val:''
    })
  }
})
module.exports=Todo;