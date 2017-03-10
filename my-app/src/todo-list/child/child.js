var React= require("react");
require("./child.css")
var Child=React.createClass({
  render(){
    var that=this;
    return (
      <ul>
        {
          this.props.items.map(function(child,index){
            return (
              <li key={index}>
                {child}
                <button onClick={that.Del.bind(that,index)}>删除</button>
                <input value={child} />
              </li>
            )
          })
        }
      </ul>
    )
  },
  Del(index){
    this.props.onDel(index)
  }
})
module.exports=Child;