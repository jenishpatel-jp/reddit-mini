'use client';

import { useEffect, useState} from "react";
import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar";

const baseURL: string = 'https://www.reddit.com/r/';

export default function Home() {
  const [posts, setPosts] = useState <Post> ([]);
  const [subreddit, setSubrredit] = useState <string> ('Eyebleach');
  const [isLoading, setIsLoading] = useState <boolean> (false);
  const [error, setError] = useState <any> ();


  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${baseURL}${subreddit}.json`)
        const posts = await response.json();
        setPosts(posts.data.children)
        console.log(posts.data.children)
      } catch (e:any) {
        setError(e);
      }

      setIsLoading(false);
    };

    fetchPosts();

  }, []);


  
  return (
    <main className="flex min-h-screen flex-col p-3 bg-white">
      <header>
        <SearchBar/>
      </header>
      <div className=" bg-white flex" >
        <div className=" bg-white w-5/6" >
          { (posts != null) ? posts.map((post, index) => <Cards key = {index} redditPosts = {post.data}/> ) : ""  }
        </div>
        <aside className=" shadow-lg m-3 bg-white w-1/6">
          <h2 >Subreddit</h2>
          <ul>
            <li>Wall Stret Bets</li>
          </ul>
        </aside>        
      </div>
    </main>
  );
}
