import Image from 'next/image';
import React from 'react'

interface PostCardProps {
  post: {
    id: string;
    title: string; 
    thumbnail: string | null;
    url: string; 
    permalink: string;
    score: number;
  }
}

const Cards: React.FC<PostCardProps> = ( { post } ) => {

  let decodedThumbnail = post.thumbnail ? decodeURIComponent(post.thumbnail) : null;

  if (decodedThumbnail) {
    decodedThumbnail = decodedThumbnail.replace(/&amp;/g, '&')
  }

  console.log(decodedThumbnail);

  return (
    <div className='bg-white shadow-lg m-3 p-3 flex-col items-center rounded-md' >
      {
        decodedThumbnail ? (
        <div>
          <Image
          src= {decodedThumbnail}
          width={1400}
          height={1400}
          alt={post.title}
          />
          <h1> {post.title} </h1>
          </div>)
        :
        ( 
          <h1>{post.title}</h1>
        )
      }
        
    </div>
  )
}

export default Cards;