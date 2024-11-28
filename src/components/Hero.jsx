import React from 'react'

import profilePic from "../assets/Profile.webp"



const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className='flex flex-wrap'>
            <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
            <h1 
            
            className="pb-16 mx-20 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl text-white">Utkarsh Bhadauria</h1>
            <span 

 className=" mx-20 bg-gradient-to-r from-green-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent" >Full Stack Developer </span>
            <p
             className="text-red-50 my-2 mx-20 max-w-xl py-6 font-light tracking-tighter ">I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies, as well as back-end technologies. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.</p>
               <a href='https://drive.google.com/file/d/1EqpMAF_2ulolw9NutGAH7u62JLYgcohD/view?usp=sharing'> <button
      className="bg-blue-900 hover:bg-blue-900 text-white font-bold py-2 px-10 mx-20 rounded transition duration-300">
     My Resume
    </button></a>
     </div>
       </div>
       <div className=" lg:w-1/2">
       <div className="flex justify-center ">
        <img src={profilePic} alt="Utkarsh Bhadauria"/>
       </div>
       </div>
    </div>
    </div>
  )
}

export default Hero