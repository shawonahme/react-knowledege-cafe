import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({addTomark,readtime}) => {

    const [blogs,setBlogs] = useState([])

    useEffect( ()=>{

        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <>
         <div className="basis-[67%]">
           
           {blogs.map((date,inx) => <Blog readtime={readtime} addTomark ={addTomark} key={inx} data = {date}></Blog>)}
           
         </div>


        </>
    );
};

Blogs.propTypes = {
    addTomark: PropTypes.func,
    readtime: PropTypes.func
     
  };
export default Blogs;