import PropTypes from "prop-types";
import { FaBookmark } from 'react-icons/fa';

const Blog = ({data}) => {
  const  {title,cover,profile_img,hashtags,read_time,post_date,author} = data
//   console.log(hashtags)
 
    return (
        <div>
            <img className="my-2 rounded-md" src={cover} alt="" />
            <div className="flex justify-between mt-4 py-2">
                <div  className="flex justify-between gap-3 items-center">
                    <div ><img width={60} src={profile_img} alt="" /></div>
                    <div>
                        <h4 className="text-2xl font-bold">{author}</h4>
                        <p className="text-sm text-gray-500 font-semibold">{post_date}</p>
                    </div>
                </div>
                
                <div>
                    <button className="flex items-center gap-4 text-gray-500">  {read_time} min read <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h2 className="py-4 text-4xl font-bold">{title}</h2>
            <p className="gap-4 text-gray-500 flex font-semibold">{
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a> </span>)
            }</p>
            <button className="text-purple-700 underline font-semibold py-3" >Mark as read </button>

           
        </div>
    );
};

Blog.propTypes = {
    data: PropTypes.object
  };
export default Blog;