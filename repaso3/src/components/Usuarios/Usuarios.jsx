import React, { useEffect, useState } from 'react'

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsuarios(data))
            .catch(error => console.error('Error fetching users:', error));
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