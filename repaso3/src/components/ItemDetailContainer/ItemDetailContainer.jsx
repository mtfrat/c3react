import ItemDetail from '../ItemDetail/ItemDetail'
import { getUnProducto } from '../asyncmock'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const { idItem } = useParams();

    useEffect(() => {
        getUnProducto(2) // Cambia el ID según el producto que quieras obtener
            .then((res) => setProducto(res))
            .catch((err) => console.error(err));
    }
    , [isItem]);


  return (
    <div>
        <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer