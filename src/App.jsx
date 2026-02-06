import React from 'react'
import Card from './components/Card'

const App = () => {
  
  const people = [
  {
    name: "Sophie Bennett",
    image: "https://images.unsplash.com/photo-1657640606520-e695cbb1e14b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNleHklMjBnaXJsfGVufDB8fDB8fHww",
    description: "Product Designer who focuses on simplicity & usability",
    followers: 345,
    posts: 48,
  },
  {
    name: "Liam Carter",
    image: "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWxzfGVufDB8fDB8fHww",
    description: "Frontend developer passionate about UI animations",
    followers: 512,
    posts: 73,
  },
  {
    name: "Olivia Reed",
    image: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
    description: "UX researcher who loves solving user problems",
    followers: 289,
    posts: 34,
  },
  {
    name: "Noah Walker",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww",
    description: "Full stack developer building scalable apps",
    followers: 610,
    posts: 95,
  },
  {
    name: "Ava Collins",
    image: "https://images.unsplash.com/photo-1602442787305-decbd65be507?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVufGVufDB8fDB8fHww",
    description: "Brand designer crafting clean visual identities",
    followers: 430,
    posts: 52,
  },
  {
    name: "Ethan Brooks",
    image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "JavaScript developer and open source contributor",
    followers: 720,
    posts: 110,
  },
  {
    name: "Mia Foster",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Content creator sharing design tips daily",
    followers: 390,
    posts: 67,
  },
  {
    name: "James Hayes",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVvcGxlfGVufDB8fDB8fHww",
    description: "Backend engineer focused on performance",
    followers: 540,
    posts: 80,
  },
  {
    name: "Isabella Ward",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww",
    description: "UI designer obsessed with minimalism",
    followers: 305,
    posts: 41,
  },
  {
    name: "Benjamin Scott",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    description: "Tech blogger writing about web trends",
    followers: 460,
    posts: 59,
  },
];

  return (
    <div className='bg-gray-400 min-h-screen flex gap-3 flex-wrap justify-center'>
      {people.map((val,idx)=>{
        return  <Card 
                    key={idx}
                    name={val.name}
                    img={val.image}
                    description={val.description}
                    followers={val.followers}
                    posts={val.posts}
                  />  
      })}
      
    </div>
  )
}

export default App
