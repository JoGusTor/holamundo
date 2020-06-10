//Importado de librerias, modulos y componentes
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

//creacion de componentes
/* const App= () =>{
  return <div>Hola mundo</div>
} */


//Renderizados 
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)