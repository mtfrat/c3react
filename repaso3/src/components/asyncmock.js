const productos = [
  {
    id: 1,
    nombre: "Auriculares",
    precio: 39.99,
    img: "https://placedog.net/400/387?id=41",
    idCat: "2"
  },
  {
    id: 2,
    nombre: "Teclado",
    precio: 59.99,
    img: "https://placedog.net/400/438?id=33",
    idCat: "3"
  }
];

export const getProductos = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(productos);
    }, 2000); // Simula un retraso de 2 segundos
  });
}

export const getUnProducto = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const productoBuscado = productos.find(prod => prod.id === id);
      resolve(productoBuscado);
    }, 100); // Simula un retraso de 2 segundos
  });
}

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const productosFiltrados = productos.filter(prod => prod.idCat === idCategoria);
      resolve(productosFiltrados);
    }, 100); // Simula un retraso de 2 segundos
  });
}