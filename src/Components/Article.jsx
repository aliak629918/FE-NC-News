import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticleById , patchVotesById} from "../api"
import Comments from './Comments'

function Article({articles}) {
        const {article_id} = useParams()
        const [currentArticle, setCurrentArticle] = useState({})
        const [isLoading, setIsLoading] = useState(true)
        const [votes, setVotes] = useState(0)
        const createdAt = new Date(currentArticle.created_at)
            const dt = createdAt.getDate();
            const year = createdAt.getFullYear();
            const month = createdAt.getMonth();
            
        useEffect(() => {

            if(article_id !== undefined) { 
            getArticleById(article_id)
            .then((data) => {
            setIsLoading(true)
             setCurrentArticle(data)
             setIsLoading(false)
         });}
         }, [article_id])

         const handleClick = (num) => {
            setVotes((currVotes) => (currVotes += num));
            patchVotesById(article_id, num)
            .then(() => {
                <p>Vote Submitted</p>;
            })
            console.log(currentArticle.votes)
         }
         return isLoading ? <p>Loading!</p> : (
            <div>
        <div id="article-card">
      <h1 id="article-card-title">{currentArticle.title}</h1>
      <p>Author: {currentArticle.author}</p>
      <p>Date: {`${dt} ${month} ${year}`}</p>
      <p className="ArticleBody">{currentArticle.body}</p>
      <p className="Votes">Votes: {currentArticle.votes + votes}</p>
            <section className="VoteButtons">
        <button disabled={votes ? true : false} onClick={() => handleClick(1)}>
            <span role="plus" aria-label="plus-vote">
                {" "}
                😃
            </span>
        </button>
        <button disabled={votes ? true : false} onClick={() => handleClick(-1)}>
            <span role="plus" aria-label="plus-vote">
            😢
            </span>
        </button>
        {votes ? <p>Thanks for voting!</p> : null}
        </section>
     </div>
      <Comments />
      </div>
    )
}

export default Article