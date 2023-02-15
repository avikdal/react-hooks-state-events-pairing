import video from "../data/video.js";
import Video from "./Video.js"
import Title from "./Title.js"
import Votes from "./Votes.js"
import CommentList from "./CommentList.js"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video video={video} />
      <Title title={video.title} views={video.views} uploadDate={video.createdAt}/>
      <Votes upvotes={video.upvotes} downvotes={video.downvotes} />
      <CommentList comments={video.comments} />
    </div>
  );
}

export default App;
