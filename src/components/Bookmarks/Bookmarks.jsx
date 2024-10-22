import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

 
const Bookmarks = ({cart,read}) => {
console.log(read)
//    console.log(cart)
    // console.log(cart)
    return (
        <div className="basis-[30%] ">
            <h1 className="text-2xl font-semibold bg-purple-400 rounded-lg py-2 px-1 mb-4">Total Read time{read}</h1>
            <h1 className="text-2xl font-bold"> BookList:{cart.length}</h1>

           { cart.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)}
           
            
        </div>
    );
};
Bookmarks.propTypes ={
    cart:PropTypes.array,
    read:PropTypes.number}
export default Bookmarks;