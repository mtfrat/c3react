import ItemDetail from '../ItemDetail/ItemDetail'
import { getUnProducto } from '../asyncmock'
import { useState, useEffect } from 'react'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        getUnProducto(2) // Cambia el ID según el producto que quieras obtener
            .then((res) => setProducto(res))
            .catch((err) => console.error(err));
    }
    , []);


  return (
    <div>
        <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer