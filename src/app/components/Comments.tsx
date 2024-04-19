'use client'

import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
import React, { useState, useEffect } from 'react'


interface CommentsProp {
  permalink: string;
}

const Comments: React.FC<CommentsProp> = ( {permalink} )  => {

  const [isCommentClicked, setCommentIsClicked] = useState(false);
  const [comments, setComments] = useState<any[]>([]);

  const fetchComments = async () => {
    try {

      const url = `https://www.reddit.com${permalink}.json`;
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      } 

      const data = await response.json();
      const commentsData = data[1].data.children.slice(0,5);
      setComments(commentsData);
      
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    if (isCommentClicked) {
      fetchComments();
    }
  }, [isCommentClicked, permalink]);


  return (
    <div className=' relative flex justify-end mt-2'>
      {/* Chat bubble icon */}
        <button 
        className=' absolute bottom-0 right-0 flex items-center justify-end p-2 rounded-full' 
        onClick={ () => setCommentIsClicked(!isCommentClicked)}
        >
        	<ChatBubbleLeftIcon className='w-5 h-5 text-gray-500 hover:text-black'/>
        </button>

      {/* Render comments */}
        {isCommentClicked && comments.length > 0 && (
          <div className='mt-4 flex flex-col space-y-3'>
            {/* Render comments */}
            {comments.map((comment) => (
              <div key={comment.data.id} className='p-2 border rounded-md' >
                <p className='text-gray-700 mb-2' >{comment.data.body} </p>
                <p className='text-gray-500 text-sm' >By:  {comment.data.author} </p>
              </div>
            ))}

          </div>
        )}

    </div>
  )
}

export default Comments;