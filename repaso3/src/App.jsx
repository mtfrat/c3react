import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Map from './components/Map/Map';
import Usuarios from './components/Usuarios/Usuarios';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {

  //Parte de logica
  return (
    //Render
    <>
    <NavBar/> 
      <h1>Clase 3</h1>
    {/* <Map/>
    <Usuarios/> */}
    <ItemListContainer/>
    <ItemDetailContainer/>
    </>
  )
}

export default App