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
         <div className="basis-[67%]">
           
           {blogs.map((date,inx) => <Blog key={inx} data = {date}></Blog>)}
           
         </div>


        </>
    );
};

export default Blogs;