import React from 'react'
import Items from '../Items/Items'

const ItemList = ({productos}) => {
  return (
    <div>
        {productos.map(producto => (
            <Items key={producto.id} {...producto} />
        ))}
    </div>
  )
}

export default ItemList