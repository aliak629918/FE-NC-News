import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById } from "../api"
import Comments from './Comments'

function Article({articles}) {
        const {article_id} = useParams()
        const [currentArticle, setCurrentArticle] = useState({})
        const [isLoading, setIsLoading] = useState(true)
        const createdAt = new Date(currentArticle.created_at)
            const dt = createdAt.getDate();
            const year = createdAt.getFullYear();
            const month = createdAt.getMonth();
            
        useEffect(() => {

            if(article_id !== undefined) { 
            getArticleById(article_id)
            .then((data) => {
             setCurrentArticle(data)
             setIsLoading(false)
         });}
         }, [article_id])
            
         return isLoading ? <p>Loading!</p> : (
        <div id="article-card">
      <h1 id="article-card-title">{currentArticle.title}</h1>
      <p>Author: {currentArticle.author}</p>
      <p>Date: {`${dt} ${month} ${year}`}</p>
      <p>{currentArticle.body}</p>
      <Comments />
     </div>
    )
}

export default Article