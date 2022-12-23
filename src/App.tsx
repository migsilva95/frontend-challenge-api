import React, { useEffect, useState } from 'react';
import './App.css';
import { FrontPage } from './Components/FrontPage/FrontPage';
import { PostDetails } from './Components/PostDetails/PostDetails';

type MyType = {
  id: number;
  title: string;
  author: string;
  publish_date: string;
  slug: string;
  description: string;
  content: string;
}

function App() {

  const [posts, setPosts] = useState<MyType[]>([]);
  const [idPost, setIdPost] = useState<number>(0);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  useEffect(() => {
    fetch('http://localhost:9000/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.sort((a: any, b: any) => a.publish_date > b.publish_date ? -1 : 1));
      });
  },[]);

  return (
    <div className="App">
      {!showDetails ?
        <FrontPage posts={posts} setIdPost={setIdPost} setShowDetails={setShowDetails} />
      :
        <PostDetails posts={posts} idPost={idPost} setShowDetails={setShowDetails} />
      }
    </div>
  );
}

export default App;