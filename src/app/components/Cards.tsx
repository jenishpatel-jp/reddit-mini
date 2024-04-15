import React from 'react'


export default function Cards( {redditPosts} ) {

  return (
    <div className='bg-white shadow-lg m-3 p-3' >
        <img
        src= {redditPosts.thumbnail}
        width={redditPosts.thumbnail_height}
        height={redditPosts.thumbnail_width}
        />
        <h1> {redditPosts.title} </h1>
        <p>Description of the reddit post</p>
        <button>Comments</button>
    </div>
  )
}
