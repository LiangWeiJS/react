var React= require("react"),
    Childa=require("./childa/childa.js"),
    Childb=require("./childb/childb.js")
require('./App.css');
var App= React.createClass({
    render() {
      console.log('render');
      return (
        <div className="App">
          <h1>我是父组件</h1>
          <Childa />
          <Childb />
        </div>
      );
    },
    getDefaultProps(){
      console.log('getDefaultProps');
    },
    getInitialState() {
      console.log('getInitialState');
      return {}
    },
    componentDidMount() {
      console.log('componentDidMount');
    },
    componentWillMount() {
      console.log('componentWillMount');
    }
})
module.exports=App;
