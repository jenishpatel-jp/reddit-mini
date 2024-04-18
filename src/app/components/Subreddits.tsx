import Image from 'next/image';
import React from 'react';

interface Subreddits {
  subreddits: string; 
  onSelectSubreddit: (subreddits: string) => void;
  image: string | null;
}


const Subreddits: React.FC<Subreddits> = ({ subreddits, onSelectSubreddit, image }) => {

  return (
    <button className='flex col mx-3 h-30 p-3 items-center hover:bg-neutral-200 active:bg-neutral-400 rounded-md cursor-pointer w-5/6'
    onClick={ () => onSelectSubreddit(subreddits) }
    >
      {
        image ? (
        <Image
        src={image}
        height={50}
        width={50}
        alt='Logo'
        className='mx-3 rounded-full'
        />) : (
          <div className='w-50 h-50' ></div>
        )
      } 
        <h2 className=' text-lg font-medium overflow-hidden align-middle hidden lg:block md:block'>{subreddits}</h2>
    </button>
  )
};

export default Subreddits;
