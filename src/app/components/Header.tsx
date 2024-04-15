'use client';

import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { HomeIcon } from '@heroicons/react/16/solid';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const {data: session} = useSession();


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
        <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
        <input className='flex-1 bg-transparent outline-none' type='text' placeholder='Search Reddit' />
        <button type='submit' hidden />
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
              <p className='truncate m-1 text-black font-semibold' > {session?.user.name} </p>
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