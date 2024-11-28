import React from 'react'
import aboutImg from "../assets/about.jpg"


const About = () => { 
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">
           
             <span className="text-fuchsia-300">About Me</span>
        </h1>
        <div className="flex flex-wrap">
<div className="w-full lg:w-1/2 lg:p-8">
<div className="flex items-center justify-center">
<img className="rounded-2xl" src={aboutImg} alt="about"/>
</div>
</div>
<div className="w-full lg:w-1/2">
<div className="flex justify-center lg:justify-start">
    <p className="my-2 max-w-xl py-6 text-white">As a passionate full-stack developer, I specialize in crafting seamless, dynamic, and user-focused digital solutions. With expertise spanning front-end and back-end development, I thrive on bridging the gap between visually compelling interfaces and robust server-side functionality. My toolkit includes modern framework like React.js on the front end, complemented by solid experience in back-end technologies such as Node.js.With a keen eye for detail, I prioritize clean, maintainable code and adhere to agile methodologies, collaborating seamlessly with teams to deliver projects on time. My passion for learning keeps me updated on emerging technologies like cloud computing, serverless architectures, and AI-driven applications.

Whether developing from scratch or enhancing existing systems, I am committed to delivering innovative, impactful solutions that align with business goals. Let's create something exceptional together!</p>
</div>
</div>
        </div>
    </div>
  )
}

export default About