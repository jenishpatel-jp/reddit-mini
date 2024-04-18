import Image from 'next/image';
import React from 'react';

interface Subreddits {
  subreddits: string; 
  onClickSubreddit: (subreddits: string) => void;
  image: string | null;
  activeSubreddit: string | null;
}


const Subreddits: React.FC<Subreddits> = ({ subreddits, onClickSubreddit, image, activeSubreddit }) => {

  const isActive = subreddits === activeSubreddit; 


  return (
    <button className={`flex flex-col md:flex-row mx-3 h-30 p-3 items-center justify-center md:justify-start hover:bg-neutral-200 active:bg-neutral-400 rounded-md cursor-pointer w-full ${
      isActive ? ' bg-sky-300' : ''
  }`}
    onClick={ () => onClickSubreddit(subreddits) }
    >
      {
        image ? (
        <Image
        src={image}
        height={50}
        width={50}
        alt='Logo'
        className='rounded-full mb-2 md:mb-0 md:mr-4'
        />) : (
          <div className='w-50 h-50' ></div>
        )
      } 
        <h2 className=' text-lg font-medium overflow-hidden align-middle hidden lg:block md:block'>{subreddits}</h2>
    </button>
  )
};

export default Subreddits;
