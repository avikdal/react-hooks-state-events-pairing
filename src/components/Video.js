import React from "react";

function Video({ video }){
    return (
    <iframe
    width="919"
    height="525"
    src={video.embedUrl}
    frameBorder="0"
    allowFullScreen
    title="Thinking in React"
    />
    )
}

export default Video;