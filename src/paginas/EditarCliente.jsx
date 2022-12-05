import {useState, useEffect} from 'react'
import Formulario from '../components/Formulario'
import { useParams } from 'react-router-dom';


const EditarCliente = () => {

  const [ cliente, setCliente ]= useState({});
  const [cargando, setCargando] = useState(false)
  const {id} = useParams()
  useEffect(() => {
      setCargando(!cargando)
      const obtenerClienteAPI = async () =>{
          try {
              const url =`http://localhost:4000/clientes/${id}` 
              const respuesta = await fetch(url)
              const resultado = await respuesta.json()
              setCliente(resultado)
          } catch (error) {
              console.log(error)
          }
          setCargando(false)
          // setTimeout(() => {
          //     setCargando(false)
          // }, 3000);
      
      }
      obtenerClienteAPI()
  }, [])
  return (
    <>
    {cliente?.nombre && 
    <>
      <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
      <p className='mt-3'>Edite su cliente</p> 
    </>
    }
      {/* <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1> */}
      

      {cliente?.nombre ? (
        <Formulario
          cliente={cliente}
          cargando={cargando}
        />
      ) : <p className='font-black text-4xl text-blue-900'>ID No valido</p> }
      
    </>
  )
}

export default EditarCliente