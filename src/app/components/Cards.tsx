import Image from 'next/image';
import React from 'react'
import Comments from './Comments';

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


  return (
    <div className='bg-white shadow-lg m-3 p-3 flex-col rounded-md' >
      {
        decodedThumbnail ? (
        <div className='mb-2'>
          <Image
          src= {decodedThumbnail}
          width={1300}
          height={1000}
          alt={post.title}
          unoptimized={true}
          />
          <h1 className=' mt-2'> {post.title} </h1>
          </div>)
        :
        ( 
          <h1>{post.title}</h1>
        )
      }
      <Comments permalink = {post.permalink}/>
    </div>
  )
}

export default Cards;