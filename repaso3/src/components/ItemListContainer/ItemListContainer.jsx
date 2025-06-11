import {useState, useEffect} from 'react'
import { getProductos, getProductosPorCategoria } from '../asyncmock'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {
        const functionProductos = idCategoria ? getProductosPorCategoria : getProductos;
        functionProductos(idCategoria)
            .then((res) => {
                setProductos(res);
            })
    }, [idCategoria])

  return (
    <div>
        <h2>Productos</h2>
        <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer