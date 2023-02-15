import React from "react"

function Comment({ comment }){
    console.log(comment)
    return(
        <div>
            <span style={{ fontWeight: 'bold' }}>{comment.user}</span>
            <p>{comment.comment}</p>
        </div>
    )
}

export default Comment