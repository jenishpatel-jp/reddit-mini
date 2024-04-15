import Image from 'next/image';
import React from 'react';
import { useEffect } from 'react';

export default function Subreddits({subreddit, url }) {

  return (
    <div className='flex col mx-3 h-30 p-3 items-center hover:bg-neutral-200 active:bg-neutral-400' >
        <Image
        src={url}
        height={50}
        width={50}
        alt='Logo'
        className='mx-3 rounded-full'
        />
        <h2>{subreddit}</h2>
    </div>
  )
}
