import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
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
    <div className='bg-white shadow-lg m-3 p-3 flex-col rounded-md' >
      {
        decodedThumbnail ? (
        <div className='mb-2'>
          <Image
          src= {decodedThumbnail}
          width={1300}
          height={1000}
          alt={post.title}
          />
          <h1 className=' mt-2'> {post.title} </h1>
          </div>)
        :
        ( 
          <h1>{post.title}</h1>
        )
      }
      <div className='flex justify-end mt-2'>
        <button className=' flex items-center justify-end'>
        	<ChatBubbleLeftIcon className='w-5 h-5 text-gray-500 hover:text-black'/>
        </button>
      </div>
    </div>
  )
}

export default Cards;