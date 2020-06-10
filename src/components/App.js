import React from 'react'

import Regards from './regards'

class App extends React.Component{
    constructor(){
      super()
      this.state = {
          name: 'Gustavo'
      }
     
      
    }

    ChangeState(objectName){
        this.setState(objectName)
    }
    
    render(){
      return(
      <div>
        <Regards objectName={this.state}/>
        <h2>{this.state.name}</h2>
        <button onClick={()=>this.ChangeState({name:'Yeah'})}>Manuel</button>
        <button onClick={()=>this.ChangeState({name:'Fer'})}>Fer</button>
        <button onClick={()=>this.ChangeState({name:'Fany'})}>Fany</button>
      </div>

      )
    }
  }

  export default App