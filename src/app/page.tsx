'use client';

import { useEffect, useState} from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const baseURL: string = 'https://www.reddit.com/r/';

interface Post {
  id: string;
  title: string;
  thumbnail: string | null;
  url: string; 
  permalink: string;
  score: number;
}

export default function Home () {
  const [posts, setPosts] = useState <Post[]> ([]);
  const [subreddit, setSubrredit] = useState <string> ('all');
  const [isLoading, setIsLoading] = useState <boolean> (false);
  const [error, setError] = useState <any> ();

  function extractImageURL(url: string): string {
    // Remove the base path and decode the URL
    const encodedURL = url.replace('https://www.reddit.com/media?url=', '');
    const decodedURL = decodeURIComponent(encodedURL);

    return decodedURL;
  }


  // Fetching Reddit data 
  useEffect(() => {
    const fetchPosts = async (subreddit: string) => {
      setIsLoading(true);

      try {
        const response = await fetch(`${baseURL}${subreddit}.json`)
        const data = await response.json();

        const postData = data.data.children.map((child:any) => {
          const post = child.data;

          // Initialize imageURL as null
          let imageURL: string | null = null;

          // Check for preivew images
          if (post.preview && post.preview.images && post.preview.images[0]) {
            imageURL = post.preview.images[0].source.url;
          }

          // If preview is not avilable, fall back to the url if its an image
          if (!imageURL) {
            if (/\.(jpg|jpeg|png|gif)$/i.test(post.url)) {
              imageURL = post.url
            }
          }

          // If the image URL is a Reddit media URL, extract the actual image URL
          if (imageURL && imageURL.includes('https://www.reddit.com/media?url=')) {
            imageURL = extractImageURL(imageURL);
          }

          return {
            id: post.id,
            title: post.title,
            thumbnail: imageURL,
            url: post.url,
            permalink: post.permalink,
            score: post.score,
        }
      });

        setPosts(postData)

      } catch (e:any) {
        setError(e);
      }
      setIsLoading(false);
    };

    fetchPosts(subreddit);

  }, [subreddit]);


  return (
    <div>
      <Header enterSubreddit={setSubrredit} />
      <div className=" bg-white flex" >
        <div className=" bg-white w-3/4" >
          {posts.map((post) => <Cards key={post.id} post={post} /> )}
        </div>
        <aside className=" shadow-lg ml-2 m-2 bg-white w-auto h-auto">
          <Sidebar onSelectSubreddit={setSubrredit} />
        </aside>        
      </div>
    </div>
  );
}
