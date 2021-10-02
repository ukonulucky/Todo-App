import { Component } from "react"



class InportTodo extends Component{
    state ={
        item:""
    };
    handleChange=(e)=>{

        this.setState({
               item: e.target.value
           })
          
       }
    handleSubmit= (e)=>{
        if(e.target.value!==null){
            e.preventDefault()
            this.props.upDateState(this.state)
            this.setState({
                item:""
            })
            
        } else{
            return null
        }
       
       
       }
      
    
   
    render(){
       
        return(
         <div className="wrapper">
             <form onSubmit={this.handleSubmit}>
             <label >input Todo:</label>
             <input type="text" className="text" placeholder="please input todo" onChange={this.handleChange} value={this.state.item}/>
            <button className="txt" onClick={this.handleSubmit}> Submit</button>
             </form>
         </div>
        
            )
    }
   
}
export  default InportTodo