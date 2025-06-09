import React from 'react'

const Map = () => {
    const productos = [
        { id: 1, nombre: "Camiseta", precio: 19.99 },
        { id: 2, nombre: "Pantalón", precio: 29.99 },
        { id: 3, nombre: "Zapatos", precio: 49.99 },
        { id: 4, nombre: "Gorra", precio: 9.99 }
    ];

  return (
    <div>
        <h2>Productos</h2>
        <ul>
            {productos.map((producto, index) => (
                <li key={index}>
                    {producto.nombre} - ${producto.precio.toFixed(2)}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Map