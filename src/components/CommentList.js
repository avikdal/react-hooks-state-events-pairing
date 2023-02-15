import React, { useState } from "react";
import Comment from "./Comment"

function CommentList({ comments }){
    const [clicked, setClicked] = useState(true)
    
    const commentList = comments.map((comment) => <Comment key={comment.id} comment={comment} />)
    
    const handleClick = () => {
        setClicked(!clicked)
    }


    return(
        <div className="CommentList">
            <button onClick={handleClick}>{clicked ? "Hide Comments" : "Show Comments"}</button>
            <hr></hr>
            {clicked ? 
            <div>
                <h1>2 Comments</h1>
                {commentList}
            </div> :
            null}
        </div>
    )
}

export default CommentList;