import { useEffect } from "react"
function Article({articles}) {

        return ( <ul>
        {articles.map((article) => {

        return (<li key={article.article_id}
            >
                <div>
                    <h2>{article.title}</h2>
                    <h4>£{article.author}</h4>
                    <p>{article.created_at}</p>
                    </div>
            </li>)
    
        })}
    </ul>
    )

    
    
}

export default Article