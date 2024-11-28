import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Skills from './components/Skills'
import SelfPratice from './components/SelfPratice'
import ContactUs from './components/ContactUs'


const App = () => {
  return (
    <div>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-50 selection:text-cyan-900"></div>
      <div className="fixed top-0 -z-10 h-full w-full "> 
      <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div>
     
     
      </div>
<Navbar />

<Hero/>
<About />
<Technologies/>
<Skills />
<SelfPratice/>
<ContactUs/>
<div className="container mx-auto px-8"></div>
    </div>
  )
}

export default App