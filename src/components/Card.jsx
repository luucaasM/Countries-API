import React from 'react'
//import useFetch from '../hooks/useFetch'

const Card = ({name, flag, population, region, capital}) => {
    //const {fetchPaises, pais} = useFetch()
    return (
    <>
      <div className='bg-white w-72 mt-5 rounded-md overflow-hidden drop-shadow-lg mr-6 mb-5 
      transition-all ease-in-out hover:shadow-lg
      '>
        <img src={flag} alt="" />
        <section className='p-5'>
        <h2 className='font-bold text-xl'>{name}</h2>
        <section className='mt-3 mb-5'>
          <h3 className='font-semibold text-md'>Population: <span className='font-medium'>{population}</span> </h3>
          <h3 className='font-semibold'>Region: <span className='font-medium'>{region}</span></h3>
          <h3 className='font-semibold'>Capital: <span className='font-medium'>{capital}</span></h3>
        </section>
        </section>
      </div>
    </>    
  )
}

export default Card