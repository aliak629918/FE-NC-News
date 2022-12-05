import Article from "./Article"
import { useState, useEffect } from "react";
function Articles() {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch("https://long-blue-snapper-robe.cyclic.app/api/articles") 
     .then((response) => response.json()
     ).then((data) => {
         console.log(data.articles[0])
         setArticles(data.articles)
     });
     }, [])

    return(
    <div>
    <h1>Articles</h1>
    <Article articles={articles}/>
    </div>
    )
}

export default Articles