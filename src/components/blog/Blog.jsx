

const Blog = ({data}) => {
  const  { title,cover} = data
 
    return (
        <div>
            <ul>
                <li>{title}</li>
            </ul>
            <ul>
                <li>
                   <img src={cover} alt="" />
                </li>
            </ul>
        </div>
    );
};

export default Blog;