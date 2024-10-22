
import './App.css'
import Blogs from './components/blogs/blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header.jsx/Header'



function App() {
  

  return (
    <>
   <div className='max-w-[80%]  mx-auto'>
    
    <header>
    <Header></Header>
    </header>
    <main className='flex justify-between gap-4 mt-8'>
 
    <Blogs></Blogs>
    <Bookmarks></Bookmarks>
      
    </main>

    </div>     
   
      
    </>
  )
}

export default App
