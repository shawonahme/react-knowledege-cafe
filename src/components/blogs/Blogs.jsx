import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({addTomark}) => {

    const [blogs,setBlogs] = useState([])

    useEffect( ()=>{

        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <>
         <div className="basis-[67%]">
           
           {blogs.map((date,inx) => <Blog addTomark ={addTomark} key={inx} data = {date}></Blog>)}
           
         </div>


        </>
    );
};

Blogs.propTypes = {
    addTomark: PropTypes.func,
     
  };
export default Blogs;