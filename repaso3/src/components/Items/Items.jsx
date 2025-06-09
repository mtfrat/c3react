import React from 'react'

const Items = ({id, nombre, precio, img}) => {
  return (
    <div>
        <img src={img} alt={nombre} />
        <h3>Nombre: {nombre}</h3>
        <p>Precio: {precio}</p>
        <p>ID: {id}</p>
    </div>
  )
}

export default Items