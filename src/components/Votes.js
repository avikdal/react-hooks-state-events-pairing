import React, {useState} from "react";

function Votes({ upvotes, downvotes }){
    const [upvote, setUpvote] = useState(upvotes)
    const [downvote, setDownvote] = useState(downvotes)
    console.group("downvotes", downvotes)

    const handleUpvotes = () => {
        setUpvote(upvotes + 1)
    }

    const handleDownvotes = () => {
        setDownvote(downvote + 1)
    }

    return(
        <div>
            <button onClick={handleUpvotes}>{upvote} 👍</button>
            <button onClick={handleDownvotes}>{downvote} 👎</button>
        </div>
    )
}

export default Votes;