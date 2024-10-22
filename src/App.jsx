
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header.jsx/Header'



function App() {
  
  //add cart function
  const [cart,setcart] =useState([])
  const addTomark = (blog)=>{
    const newCrat = [...cart,blog];
    setcart(newCrat)
  }


  //add read time count
  const [read,setreadtime] = useState(0);

  const readtime = (current,id) =>{
  const totaltime = read + current
  setreadtime(totaltime)
  const remainingBookmarks = cart.filter(bookmark => bookmark.id !== id);
  setcart(remainingBookmarks);
  
 }

  return (
    <>
   <div className='max-w-[80%]  mx-auto'>
    
    <header>
    <Header></Header>
    </header>
    <main className='flex justify-between gap-4 mt-8'>
 
    <Blogs readtime={readtime}  addTomark ={addTomark}></Blogs>
    <Bookmarks read={read}  cart ={cart}></Bookmarks>
      
    </main>

    </div>     
   
      
    </>
  )
}

export default App
