import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = () => {

    const [blogs,setBlogs] = useState([])

    useEffect( ()=>{

        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <>
         <div>
           <ul>
           {blogs.map(date => <Blog key={date.id} data = {date}></Blog>)}
           </ul>
         </div>


        </>
    );
};

export default Blogs;