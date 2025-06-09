import React, { useEffect, useState } from 'react'

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

        useEffect(() => {
            // Fetching data from the JSONPlaceholder API
            // fetch('https://jsonplaceholder.typicode.com/users')
            // .then(response => response.json())
            // .then(data => setUsuarios(data))
            // .catch(error => console.error('Error fetching users:', error));

            //Asynchronous function to fetch data
            const fetchUsuarios = async () => {
                    const response = await fetch('https://jsonplaceholder.typicode.com/users');
                    const data = await response.json();
                    setUsuarios(data);
            }
                fetchUsuarios();
        },[])


  return (
    <div>
        <h2>Usuarios</h2>
        <ul>
            {usuarios.map((usuario, index) => (
                <li key={index}>
                    {usuario.name} - {usuario.email}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Usuarios