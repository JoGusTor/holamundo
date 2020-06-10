//Importado de librerias, modulos y componentes
import React from 'react';
import ReactDOM from 'react-dom';


//creacion de componentes
/* const App= () =>{
  return <div>Hola mundo</div>
} */

class App extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
    <div>
      <h1>Hola</h1>
      <h2>mundo</h2>
    </div>
    )
  }
}

//Renderizados 
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)