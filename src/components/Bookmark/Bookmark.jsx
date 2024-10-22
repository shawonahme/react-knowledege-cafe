
import PropTypes from "prop-types";


const Bookmark = ({bookmark}) => {
    const{title} = bookmark
    return (
        <div className="bg-green-400 p-2">
            
   <h1 className=" text-xl font-bold bg-gray-500 my-1 p-1 rounded-md">{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
     
  };
export default Bookmark;