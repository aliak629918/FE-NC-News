import Article from "./Article"
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
function Articles() {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch("https://long-blue-snapper-robe.cyclic.app/api/articles") 
     .then((response) => response.json()
     ).then((data) => {
         setArticles(data.articles)
         setIsLoading(false)
     });
     }, [])

     return isLoading ? (<p>Loading!</p>) : ( 
        <div>  

    <ul>
        {articles.map((article) => {
            const createdAt = new Date(article.created_at);
            const time = new Date(createdAt).toLocaleTimeString('en',
                 { timeStyle: 'short', hour12: false, timeZone: 'GMT' });
            const dt = createdAt.getDate();
            const year = createdAt.getFullYear();
            const month = createdAt.getMonth();
        return (<li className="ArticleList" key={article.article_id}
            >
                <div>
                <Link to={`/articles/${article.article_id}`}>
              {" "}
              <h2>{article.title}</h2>{" "}
            </Link>
                    <h3>Author - {article.author}</h3>
                    <p>{`${dt}.${month}.${year} ${time}`}</p>
                    </div>
            </li>)
    
        })}
    </ul>
    <Article articles={articles}/>
    </div> 
    )
}

export default Articles