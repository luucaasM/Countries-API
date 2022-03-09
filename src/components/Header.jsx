import React from 'react'
import moonIcon from "../assets/svg/moon-outline.svg"
const Header = () => {
  return (
    <header className='bg-[#FFFF] h-[90px] flex justify-center border-b-2'>
        <nav className='m-auto flex w-10/12 justify-between'>
        <h1 className='font-bold text-[22px]'>Where in the world?</h1>
        <button className='flex items-center transition-all ease-in-out hover:bg-[#FAFAFA] rounded-full p-2'>
            <img src={moonIcon} width={20} alt="" />
            <h2 className='font-bold ml-2'>Dark Mode</h2>
        </button>
        </nav>
    </header>
  )
}

export default Header