'use client';

import { useEffect, useState} from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const baseURL: string = 'https://www.reddit.com/r/';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [subreddit, setSubrredit] = useState <string> ('Eyebleach');
  const [isLoading, setIsLoading] = useState <boolean> (false);
  const [error, setError] = useState <any> ();


  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${baseURL}${subreddit}.json`)
        const data = await response.json();
        setPosts(data.data.children)
        console.log(data.data.children)
      } catch (e:any) {
        setError(e);
      }

      setIsLoading(false);
    };

    fetchPosts();

  }, []);


  
  return (
      <div className=" bg-white flex" >
        <div className=" bg-white w-3/4" >
          { (posts != null) ? posts.map((post, index) => <Cards key = {index} redditPosts = {post.data}/> ) : ""  }
        </div>
        <aside className=" shadow-lg ml-2 mr-5 bg-white w-1/4 h-auto">
          <Sidebar/>
        </aside>        
      </div>
  );
}
