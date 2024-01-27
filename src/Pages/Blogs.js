import { useEffect, useState } from "react";
import MyTitle from "../Components/MyTitle";
import axios from "axios";
import Cart from "../Components/Cart";


function Blogs() {

         // Save data
    const [blogs, setBlogs] = useState([])

    // Call API
    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=food&apiKey=681cc0004a6e4c13862d656ae468bdcc")
            .then((res)=> {setBlogs(res.data.articles)})
            .catch((err) => console.log(err));
        },[])

        return (
            <>
                <MyTitle title="Blogs" />
    
                {blogs.map(blog => (
                    <Cart image={blog.urlToImage} name={blog.author} email={blog.title} />
                ))}
            </>
        );
    }
    
    export default Blogs;
    