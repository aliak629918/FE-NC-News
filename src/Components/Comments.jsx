import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCommentsById } from "../api"
import PostComment from "./PostComment"




function Comments() {
    const {article_id} = useParams()
        const [currentArticle, setCurrentArticle] = useState({})
        const [isLoading, setIsLoading] = useState(true)
        const [comments, setComments] = useState([])
        
            
        useEffect(() => {
            if(article_id !== undefined) { 
            getCommentsById(article_id)
            .then((data) => {
                setComments(data)
                setIsLoading(false)
         });}
         }, [article_id])
        
         return isLoading ? (<p>Loading!</p>) : comments.length === 0 ? (<div><p>No Comments for this Article </p> <PostComment /></div> ) : ( 
            <div>  
                <PostComment setComments={setComments}/>
    <h3>Comments for Article {article_id}</h3>
        <ul>
            {comments.map((comment) => {
                const createdAt = new Date(comment.created_at);
                const time = new Date(createdAt).toLocaleTimeString('en',
                     { timeStyle: 'short', hour12: false, timeZone: 'GMT' });
                const dt = createdAt.getDate();
                const year = createdAt.getFullYear();
                const month = createdAt.getMonth();
            return (<li className="CommentList" key={comment.article_id}
                >
                    <div>
                  <p>{comment.body}</p>
                        <p>User - {comment.author}</p>
                        <p>Comment Created - {`${dt}.${month}.${year} ${time}`}</p>
                        </div>
                </li>)
        
            })}
        </ul>
        </div> 
        )
}

export default Comments;