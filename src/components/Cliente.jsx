import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cliente = ({cliente, handleEliminar}) => {
    const navigate = useNavigate();

    const { nombre, empresa, email, telefono, notas, id} = cliente
  return (
    <tr className='border-b hover:bg-gray-200'>
        <td className='p-3 '>{nombre}</td>
        <td className='p-3 '>
            <p> <span className='text-gray-800 uppercase font-bold'>Email:</span> {email}</p>
            <p> <span className='text-gray-800 uppercase font-bold'>Telefono:</span> {telefono}</p>
        </td>
        <td className='p-3 '>{empresa}</td>
        <td className='p-3 '>

            <button 
                type="button"
                className="bg-green-500 hover:bg-green-800 block w-full text-white p-2 uppercase font-bold text-xs mt-3 rounded-md"
                onClick={() => navigate(`/${id}`)}
            >Ver
            </button>

            <button 
                type="button"
                className="bg-blue-500 hover:bg-blue-800 block w-full text-white p-2 uppercase font-bold text-xs mt-3 rounded-md"
                onClick={() => navigate(`/editar/${id}`)}
            >Editar
            </button>

            <button 
                type="button"
                className="bg-red-500 hover:bg-red-800 block w-full text-white p-2 uppercase font-bold text-xs mt-3 rounded-md"
                onClick={() => handleEliminar(id)}
            >Eliminar
            </button>
        </td>
    </tr>
  )
}

export default Cliente