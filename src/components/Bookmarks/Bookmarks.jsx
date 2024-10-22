import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

 
const Bookmarks = ({cart}) => {

//    console.log(cart)
    // console.log(cart)
    return (
        <div className="basis-[30%] ">
            <h1 className="text-2xl font-bold"> BookList:{cart.length}</h1>

           { cart.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)}
           
            
        </div>
    );
};
Bookmarks.propTypes ={
    cart:PropTypes.array
}
export default Bookmarks;