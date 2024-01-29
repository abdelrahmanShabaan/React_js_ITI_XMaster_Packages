import { useEffect, useState } from "react";
import MyTitle from "../Components/MyTitle";
import axios from "axios";
import Cart from "../Components/Cart";


function Blogs() {

         // Save dataname
    const [blogs, setBlogs] = useState([])
    const [keyword, setKeyword] = useState(["sports"])

    //https://newsapi.org/v2/everything?q={name}&apiKey=681cc0004a6e4c13862d656ae468bdcc

    // Call API
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?apiKey=681cc0004a6e4c13862d656ae468bdcc&q=${keyword}`)
            .then((res)=> {setBlogs(res.data.articles)})
            .catch((err) => console.log(err));
        },[keyword])


            //function change
            const handleChange = (e) => {
                setKeyword(e.target.value)
            } 

        return (
            <>

                <select class="form-select" aria-label="Defualt select example" 
                     onChange={(e)=> handleChange(e)}>
                    <option selected>Choose...</option>
                    <option value="sports">sport</option>
                    <option value="programming">programming</option>
                    <option value="foods">foods</option>
                </select>


                <MyTitle title="Blogs" />
    
                {blogs.map(blog => (
                    <Cart image={blog.urlToImage} name={blog.author} email={blog.title} />
                ))}
            </>
        );
    }
    
    export default Blogs;
    