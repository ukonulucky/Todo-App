import React, {Component} from "react";
import Addtodo from "./components/Addtodo";
import InportTodo from "./components/inputTod";
import "./components/styles/addtodo.css"



class App extends Component{
  state = {
    todo:
      [
        {item:"clean the kitchen",id:1},
        {item:"code the web",id:2},
        {item:"arrange the room",id:3}
  
      ]
  }
  upDateState= (data)=>{
    data.id = Math.random();
    let todo = [...this.state.todo, data];
    this.setState({
      //  (note since the key and the value are the same then we can write as below instead of like this >>> todo:todo 
      todo
    })

  }
  deleteTodo =(id)=>{
 let todo =   this.state.todo.filter((todo)=>{
      return(todo.id!==id)

    })
    this.setState({
      todo
    })

  }
  
  render(){

    // console.log(this.state.todo)
    return(
  
     <div className="Container">
    <h2><span>L</span>ist  <span className="nam">of</span> todos...<i class="fal fa-pencil-alt"></i></h2>
        <Addtodo todo={this.state.todo} deleteTodo={this.deleteTodo} />
        <InportTodo upDateState={this.upDateState}/>
     </div >
  
    )
  }
}
 export default App