import React, { useState } from 'react'

const Hero = () => {
    const [interactive, setInteractive] = useState(false)
  return (
    <div id='Hero' className="snap-y snap-mandatory w-full h-screen relative cursor-auto">
        <div className="absolute left-0 bottom-0 bg-linear-to-t from-black to-transparent pointer-events-none w-full h-40 z-5"></div>
        <iframe src='https://my.spline.design/untitled-BUyerg6DsToWOYDdH4k0ceh9/'
        title="Spline Background"
        frameBorder='0'
        className={`snap-start absolute inset-0 w-full h-full ${interactive? 'pointer-events-none' : 'pointer-events-auto'}`}
        ></iframe>

        <div className="relative z-10 flex flex-col md:flex-row justify-center md:justify-between items-center h-full  px-6 md:px-20 gap-10 pointer-events-none">
            <div className="text-center md:text-left max-w-xl">
                <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
                    Kancharana <br /> Tanay
                </h1>

                <p className="text-gray-300 mt-4 text-base md:text-lg">
                    Full Stack Developer building scalable products.
                </p>

                <div className="flex flex-wrap gap-4 mt-8 pointer-events-auto">
                    <a
                        href="#Projects"
                        className="inline-block px-6 py-3 bg-purple-600 rounded-full text-white hover:bg-purple-500 transition"
                    >
                        View Projects
                    </a>
                    <a  
                        href="/CV.pdf"
                        download="Kancharana-Tanay-CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white/10 border border-white/30 rounded-full text-white hover:bg-white/20 transition flex items-center gap-2"
                    >
                        <i className="fa-solid fa-download"></i> Download CV
                    </a>
                </div>
            </div>

            <div className="flex justify-center md:justify-end md:pr-20">
                <img
                    src="src/assets/profile-pic.png"
                    className="w-40 md:w-80 rounded-full shadow-2xl"
                    alt="profile"
                />
            </div>
        </div>
        <a href='#About' className='absolute bottom-6 w-full flex justify-center text-gray-400 text-sm z-100 pointer-events-auto'
        onClick={()=>{
            setInteractive(false)
        }}
        >SCROLL <br/><i className="fa-solid fa-angles-down"></i></a>

    </div>
  )
}

export default Hero