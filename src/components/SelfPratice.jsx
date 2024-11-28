import React from 'react'
import shoes from "../assets/shoes.png"
import food from "../assets/foodweb.png"
import va from "../assets/virtualassiant.png"
import gym from "../assets/gym.png"
import code from "../assets/code.png"
import mp from "../assets/myportfolio.png"
const SelfPratice = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl text-fuchsia-300">Projects</h1>
        <div>
       
        <div  className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                    <img src={mp} height={200} width={250} className='my-2'/>
                    
                    </div>
                    <div className="w-full max-w-xl lg:3/4">
                    <h6 className="mb-2 font-semibold text-violet-500"> My Portfolio</h6>
                    <p className="mb-4 text-neutral-400">
                   
                   I am an full-stack developer with expertise in building dynamic and scalable web applications. Combining strong skills in front-end and back-end development, Utkarsh crafts intuitive user interfaces and ensures robust server-side functionality. With a passion for problem-solving and innovation</p>
        <span  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"><a href="myportfolio"><button>Visit Site</button> </a> </span>
                   </div>
                  </div>
        <div  className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                    <img src={va} height={200} width={250} className='my-2'/>
                    
                    </div>
                    <div className="w-full max-w-xl lg:3/4">
                    <h6 className="mb-2 font-semibold  text-violet-500"> Virtual Assistant</h6>
                    <p className="mb-4 text-neutral-400">✨ Key Features:
                   
                    🎉 My assistant can perform basic tasks, respond to user queries, and provides a friendly interface for a smooth user experience. It’s a simple yet effective start toward creating more complex interactive tools. 🚀</p>
        <span  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"><a href="https://utkarshbhadauria03.github.io/virtual_assistant/"><button>Visit Site</button> </a> </span>
                   </div>
                  </div>
                

            
        <div  className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                    <img src={gym} height={200} width={250} className='my-4 '/>
                    
                    </div>
                    <div className="w-full max-w-xl lg:3/4">
                    <h6 className="mb-2 font-semibold  text-violet-500"> Gym Ai website</h6>
                    <p className="mb-4 text-neutral-400">✨ Key Features:
                   
                    ✨ Key Features:
AI-Driven Personalization: Tailored workout plans and diet suggestions.
Real-Time Feedback: Tracking progress and providing instant insights.
Interactive Interface: Dynamic dashboards and user-friendly navigation.
</p>
        <span  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"><a href="https://utkarshbhadauria03.github.io/gymwebsite_aichat/"><button>Visit Site</button> </a> </span>
                   </div>
                  </div>

               
                  
                <div  className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                    <img src={food} height={200} width={250} className='my-4' />
                    
                    </div>
                    <div className="w-full max-w-xl lg:3/4">
                    <h6 className="mb-2 font-semibold  text-violet-500"> Food Website</h6>
                    <p className="mb-4 text-neutral-400">✨ Key Features:
                   
                    "Built a food ordering website from scratch using HTML, CSS, and JavaScript to enhance my front-end development skills. This project allowed me to dive deeper into UI design, interactivity, and functionality, creating a seamless user experience for easy ordering."</p>
        <span  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"><a href="https://utkarshbhadauria03.github.io/food_website/"><button>Visit Site</button> </a> </span>
                   </div>
                  </div>


  
                  <div  className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                  <img src={code} height={200} width={250} className='my-4' />
                    </div>
                    <div className="w-full max-w-xl lg:3/4">
                    <h6 className="mb-2 font-semibold  text-violet-500">Code Editor</h6>
                    <p className="mb-4 text-neutral-400">✨ Key Features:
                   
                    Syntax Highlighting: A clean and color-coded display makes reading and editing code intuitive.
Auto-Indentation: Enhances the coding experience by maintaining neat formatting.
Responsive Design: Works seamlessly on different devices, from desktops to tablets.</p>
 <span  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"><a href="https://utkarshbhadauria03.github.io/code_editor/"><button>Visit Site</button> </a> </span>
                   </div>
                  </div>   
                   
                 
          

                  <div  className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                  <img src={shoes} height={200} width={250} className='my-4' />
                    </div>
                    <div className="w-full max-w-xl lg:3/4">
                    <h6 className="mb-2 font-semibold  text-violet-500"> Shoes Website</h6>
                    <p className="mb-4 text-neutral-400">✨ Key Features:
                   
✔️ Responsive design for a smooth experience on any device.
 Intuitive navigation for effortless browsing. Interactive product displays and dynamic features powered by JavaScript.Secure and hassle-free checkout.</p>
 <span  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"><a href="https://utkarshbhadauria03.github.io/shoes_e-commerce/"><button>Visit Site</button> </a> </span>
                   </div>
                  </div>    
                  </div> 
        </div>
  
  )
}

export default SelfPratice