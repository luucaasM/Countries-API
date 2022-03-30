import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Search from '../components/Search'
import useFetch from '../hooks/useFetch'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const HomePage = () => {
  const {fetchAllCountries, paises, isLoading} = useFetch()
  const [busqueda, setBusqueda] = useState({resultado: ""})
  const [filtrado, setFiltrado] = useState({continente: ""})



  useEffect(() => {
    fetchAllCountries()
  },[])
  return (
    <>
      <div className='mt-10 w-10/12 m-auto'>
      <Search busqueda={busqueda} setBusqueda={setBusqueda} setFiltrado={setFiltrado} filtrado={filtrado}/>
      </div>
      
      <>
        {isLoading ? <>Loading...</> : 
        <>
        { 
        busqueda.resultado === ""  ? 
        (
        <section className=' mt-5 m-auto w-10/12 flex justify-center flex-wrap shrink'>
          {paises.map((pais, key) =>(
          <Card key={key} {...pais} />
          ))}
        </section>
        ):(
          paises.filter((pais) => {
          if(pais.name.toLowerCase().includes(busqueda.resultado.toLowerCase())){
              return <>{pais.name}</>
            }}).map((pais, key) => (<Card key={key} {...pais}/>))
        )
        }
        
        </> 
        }

      </>
    </>

    /*{
          paises.filter((pais) => {
            if(filtrado.continente === ""){
              return <>{pais.name}</>
            }else if(pais.name.toLowerCase().includes(filtrado.continente.toLowerCase())){
              return <>{pais.name}</>
            }
              }).map((pais, key) => (
                <Card key={key} {...pais}/>
              ))
  }*/
  )
}




export default HomePage