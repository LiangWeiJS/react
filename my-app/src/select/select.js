import React from 'react';
import Card from './title/card.js';
var Titlebar=Card.Titlebar;
var Title=Card.Title;
var Contentbar=Card.Contentbar;
var Content=Card.Content;
var Select=React.createClass({
  getInitialState(){
    return({
      current:2
    })
  },
  render(){
    var arr=[1,2,3];
    var that=this;
    return(
      <Card>
        <Titlebar>
          {
            arr.map(function(child){
              return <Title index={child} current={that.state.current} onClick={(index)=>that.setState({current:index})}>{child}</Title>
            })
          }
        </Titlebar>
        <Contentbar>
        {
          arr.map(function(child){
            return <Content index={child} current={that.state.current}>{child}</Content>
          })
        }
        </Contentbar>
      </Card>
    )
  }
})
export default Select