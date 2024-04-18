import React from 'react';
import Subreddits from './Subreddits';
import { useEffect, useState } from 'react';

interface SidebarProps {
    onSelectSubreddit: (subreddit: string) => void;
}

interface Subreddit {
    name: string;
    icon_img: string | null;
}


const Sidebar: React.FC<SidebarProps> = ({ onSelectSubreddit }) => {
    const [initialSubreddits] = useState<string[]>(['starcraft', 'wallstreetbets', 'eyebleach', 'formula1', 'wholesomememes', 'aww', 'futurama']);
    const [subreddits, setSubreddits] = useState<Subreddit[]>([]);

    useEffect(() => {
        const fetchSubreddits = async () => {
            const fetchedSubreddits = await Promise.all(
                initialSubreddits.map(async (subreddit) => {
                    const response = await fetch (`https://www.reddit.com/r/${subreddit}/about.json`);
                    const data = await response.json();
                    console.log(subreddit);
                    console.log(data.data.icon_img);
                    return {
                        name: subreddit,
                        icon_img: data.data.icon_img || null,
                    };
                })
            );
            setSubreddits(fetchedSubreddits);
        };
        fetchSubreddits();
    }, []);


    return (
        <div className='flex-col items-center rounded-md'>
        <h2 className=' font-semibold self-center text-lg p-3 m-2 text-center lg:text-3xl' >Subreddits</h2>
        {
            subreddits.map((subreddit) => (
                <Subreddits key = {subreddit.name} 
                subreddits = {subreddit.name}
                onSelectSubreddit = {onSelectSubreddit}
                image = {subreddit.icon_img}
                />
            ))
        }
        </div>
    )
}

export default Sidebar;