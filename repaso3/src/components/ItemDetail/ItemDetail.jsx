import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div>
        <h2> Nombre: {nombre}</h2>
        <h3> Precio: {precio}</h3>
        <h3> ID: {id}</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem deserunt animi aliquam, unde laborum commodi deleniti quis rem aperiam ipsam consequatur in corrupti, repellendus iure. Ea et natus accusamus.</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail