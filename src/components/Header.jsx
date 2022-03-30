import React from 'react'
import moonIcon from "../assets/svg/moon-outline.svg"
const Header = () => {
  return (
    <header className='bg-[#FFFF] h-[90px] flex justify-center border-b-2'>
        <nav className='m-auto flex w-10/12 justify-between'>
        <h1 className='font-bold text-[24px]'>Where in the world?</h1>
        <button className='flex items-center transition-all ease-in-out hover:bg-[#FAFAFA] rounded-full p-2'>
            <img src={moonIcon} width={22} alt="" />
            <h2 className='font-semibold ml-2 text-[18px]'>Dark Mode</h2>
        </button>
        </nav>
    </header>
  )
}

export default Header