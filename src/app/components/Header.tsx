'use client';

import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';

interface HeaderProps {
  enterSubreddit: (subreddit: string) => void;
}

const Header: React.FC<HeaderProps> = ( {enterSubreddit} ) => {
  const {data: session} = useSession();
  const [searchInput, setSearchInput] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (e.key === "Enter") {
      e.preventDefault(); //Prevents form submission 
      enterSubreddit(searchInput);
      setSearchInput("");
      console.log("searchInput state after clearing:", searchInput);
    }
  };

  const search = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    enterSubreddit(searchInput);
    setSearchInput("");
  }



    return (
      <div className='sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm'>
        <div className='flex justify-center align-middle' >
        <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer' >
          <Image
          objectFit='contain'
          src="/logo.jpg"
          width={30}
          height={30}
          alt='reddit logo'
          />
        </div>
        <div className='mx-7 flex items-center xl:min-w-[150px]' >
          <p className='flex-1 ml-2 hidden lg:inline' >Reddit Lite</p>
        </div>
        </div>

        {/* Search Box*/}
        <form className='flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1' >
          <input 
          className='flex-1 bg-transparent outline-none' 
          type='text' 
          value={searchInput}
          placeholder='Enter subreddit'
          onChange={ (e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
          />
          <button type='submit' onClick={search}>
          <MagnifyingGlassIcon className='h-6 w-6 text-gray-400'/>
          </button>
        </form>

        {/* Sign in/ Sign out button */}
        {session ? (
            <div
              onClick={()=> signOut() }
              className='hidden cursor-pointer lg:flex space x-2 border border-gray-100 p-2'>
              <div className='relative h-5 w-5 flex-shrink-0 ml-5'>
                <Image
                  src="/reddit.svg"
                  height={30}
                  width={30}
                  alt='Reddit icon'
              />
              </div>
              <div className='flex-1 text-xs'>
                <p className='truncate m-1 text-black font-semibold' > {session?.user?.name} </p>
              </div>
                <p className='text-black ml-2 mr-3 my-1' >Sign Out</p>
              </div>
          ) : (
            <div
            onClick={()=> signIn() }
            className='hidden cursor-pointer lg:flex space x-2 border border-gray-100 p-2'>
            <div className='relative h-5 w-5 flex-shrink-0 ml-5'>
              <Image
                src="/reddit.svg"
                height={30}
                width={30}
                alt='Reddit icon'
              />

            </div>
            <p className='text-black ml-2 mr-3 my-1' >Sign In</p>
            </div>
          )
          }
      </div>

    );
  }

export default Header;