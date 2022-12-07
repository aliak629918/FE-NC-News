import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
function Article({articles}) {
        const {article_id} = useParams()
        const [currentArticle, setCurrentArticle] = useState({})
        const [isLoading, setIsLoading] = useState(true)
        useEffect(() => {

            if(article_id !== undefined) {fetch(`https://long-blue-snapper-robe.cyclic.app/api/articles/${article_id}`) 
         .then((response) => response.json()
         ).then((data) => {
             setCurrentArticle(data.article)
             setIsLoading(false)
         });}
         }, [article_id])
            const createdAt = new Date(currentArticle.created_at)
            const dt = createdAt.getDate();
            const year = createdAt.getFullYear();
            const month = createdAt.getMonth();
         console.log(currentArticle)
         return isLoading ? <p>Loading!</p> : (
        <div id="article-card">
      <h1 id="article-card-title">{currentArticle.title}</h1>
      <p>Author: {currentArticle.author}</p>
      <p>Date: {`${dt} ${month} ${year}`}</p>
      <p>{currentArticle.body}</p>
     </div>
    )
}

export default Article