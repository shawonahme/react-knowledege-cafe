
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header.jsx/Header'



function App() {
  
  const [cart,setcart] =useState([])
  const addTomark = (blog)=>{
    const newCrat = [...cart,blog];
    setcart(newCrat)
  }
// console.log(cart)


  return (
    <>
   <div className='max-w-[80%]  mx-auto'>
    
    <header>
    <Header></Header>
    </header>
    <main className='flex justify-between gap-4 mt-8'>
 
    <Blogs addTomark ={addTomark}></Blogs>
    <Bookmarks cart ={cart}></Bookmarks>
      
    </main>

    </div>     
   
      
    </>
  )
}

export default App
