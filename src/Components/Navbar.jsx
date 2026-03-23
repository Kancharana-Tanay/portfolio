import React, { useState } from 'react'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <div className='top-0 left-0 h-28 z-100 w-full fixed bg-linear-to-b from-black via-70% via-black to-transparent'>
        <div className="flex justify-between items-center px-8 md:px-16">
            <a className="logo text-white flex items-center" href='#Hero'>
                <img className=' max-h-20 max-w-xs pr-2' src="src\assets\logo1.png" alt="logo.png" />
                <h1 className='pl-2 border-l-2 border-amber-50'>Kancharana <br/> Tanay</h1>
            </a>
            <div className="hidden sm:flex justify-between gap-10 items-center">
                <div className="flex gap-5 text-amber-50 scroll-x justify-between items-center">
                    <a href={`#About`}>About</a>
                    <a href={`#Skills`}>Skills</a>
                    <a href={`#Projects`}>Projects</a>
                    <a href={`#Contact`}>Contact</a>
                    <a
                        href="/CV.pdf"
                        download="Kancharana-Tanay-CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-white/10 border border-white/30 rounded-full text-white hover:bg-white/20 transition flex items-center gap-2"
                    >
                        <i className="fa-solid fa-download"></i> Download CV
                    </a>
                </div>
            </div>
            
            <div className="hidden max-sm:flex flex-1 justify-end items-center">
                <h1 className='w-[28px] h-[28px] object-contain cursor-pointer'
                onClick={()=>{
                    setToggle(!toggle)
                }}>    
                    {toggle ? <i className="fa-solid fa-xmark text-white"></i>
                    : <i className="fa-solid fa-bars text-white"></i>}
                </h1>
                <div className={`${!toggle ? 'hidden' : 'flex'} p-6 md:hidden transition-all duration-300 absolute top-20 right-20 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-black/90`}>
                    <div className="flex flex-col gap-5 text-amber-50 scroll-x justify-between items-center">
                        <a onClick={()=>{setToggle(false)}} className='text-inherit' href={`#About`}>About</a>
                        <a onClick={()=>{setToggle(false)}} className='text-inherit' href={`#Projects`}>Projects</a>
                        <a onClick={()=>{setToggle(false)}} className='text-inherit' href={`#Skills`}>Skills</a>
                        <a onClick={()=>{setToggle(false)}} className='text-inherit' href={`#Contact`}>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar