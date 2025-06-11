import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Map from './components/Map/Map';
import Usuarios from './components/Usuarios/Usuarios';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {

  //Parte de logica
  return (
    //Render
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
        <Route path="/catgoria/:idItem" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter> 
    {/* <Map/>
    <Usuarios/> */}
    
    
    </>
  )
}

export default App