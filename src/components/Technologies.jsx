import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import {SiMongodb,SiMysql,SiExpress,SiJquery} from "react-icons/si"
import { TbBrandJavascript } from "react-icons/tb";
import {FaNodeJs} from "react-icons/fa"
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24"> 
    <h1 className="my-20 text-center text-4xl text-fuchsia-300">Technologies
        </h1> 
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div> 
       
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandJavascript className="text-7xl text-white"/>
            </div>
            
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-900"/>
            </div>
           
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-red-400"/>
            </div>
      
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-900"/>
            </div>
           
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className="text-7xl text-cyan-400"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJquery className="text-7xl text-red-900"/>
            </div>
            
        </div>
        </div>
  )
}

export default Technologies