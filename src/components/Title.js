import React from "react";

function Title({ title, views, uploadDate }){
    return (
        <>
           <h1>{title}</h1>
           <h5>{views} Views | Uploaded {uploadDate}</h5> 
        </>
    )
}

export default Title