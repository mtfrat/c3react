import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'

const Items = ({id, nombre, precio, img, idCat}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3>Nombre: {nombre}</h3>
        <p>Precio: {precio}</p>
        <p>ID: {id}</p>
        <Link to={`/categoria/${idCat}`}>
          <button className='btn'>Ver detalle</button>
        </Link>
    </div>
  )
}

export default Items