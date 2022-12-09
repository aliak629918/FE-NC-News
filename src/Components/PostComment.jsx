import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../api";
import { UserContext } from "../Context/user";


function PostComment({setComments}) {
    const [newBody, setNewBody] = useState("");
    const { article_id } = useParams();
    const  {loggedInUser}  = useContext(UserContext);

    const handleClick = (event) => {
        event.preventDefault();
        setNewBody("")
        postComment(article_id, newBody, loggedInUser.username).then((comment) => {
          return setComments((allComments) => [comment, ...allComments]);
        });
        const button = document.getElementById("btn");
        event.currentTarget.disabled = true;

        button.textContent = "Comment posted!";

      };
    return(
        <div>
            <section>
                <form method="post" onSubmit={handleClick}>
                    <h3>Comment On This Article</h3>
                    <textarea value={newBody} id="commenbody" onChange={(event) => {
                        setNewBody(event.target.value);
                    }}
                    
                    type="text"
                    name="commentbody"
                    minLength="1"
                    maxLength="5000"
                    required
                    />
                    <br />
                    <button id="btn" type="submit" onClick={handleClick}>
                        Post Comment
                    </button>
                </form>
            </section>
        </div>
    )
}

export default PostComment;