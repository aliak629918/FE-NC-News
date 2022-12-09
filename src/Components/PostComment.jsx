import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../api";
import { UserContext } from "../Context/user";


function PostComment({setComments}) {
    const [newBody, setNewBody] = useState("");
    const { article_id } = useParams();
    const  {loggedInUser}  = useContext(UserContext);
    console.log(loggedInUser)
    

    const handleSubmit = (e) => {
        e.preventDefault();
        postComment(article_id, newBody, loggedInUser.username).then((comment) => {
          return setComments((allComments) => [comment, ...allComments]);
        });
    };

    const handleClick = () => {
        const button = document.getElementById("btn");
        button.textContent = "Comment posted!";
      };
       
    return(
        <div>
            <section>
                <form method="post" onSubmit={handleSubmit}>
                    <h3>Comment On This Article</h3>
                    <input value={newBody} onChange={(event) => {
                        setNewBody(event.target.value);
                    }}
                    type="text"
                    id="commentbody"
                    name="commentbody"
                    minLength="1"
                    maxLength="5000"
                    required
                    />
                    <br />
                    <button id="btn" onClick={handleClick}>
                        Post Comment
                    </button>
                </form>
            </section>
        </div>
    )
}

export default PostComment;