const productos = [
  {
    id: 1,
    nombre: "Auriculares",
    precio: 39.99,
    img: "/images/auriculares.jpg"
  },
  {
    id: 2,
    nombre: "Teclado",
    precio: 59.99,
    img: "/images/teclado.jpg"
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
    }, 2000); // Simula un retraso de 2 segundos
  });
}