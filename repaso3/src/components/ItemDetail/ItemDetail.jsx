import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2> Nombre: {nombre}</h2>
        <h3> Precio: {precio}</h3>
        <h3> ID: {id}</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem deserunt animi aliquam, unde laborum commodi deleniti quis rem aperiam ipsam consequatur in corrupti, repellendus iure. Ea et natus accusamus.</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail