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
    const [initialSubreddits] = useState<string[]>(['Starcraft', 'Wallstreetbets', 'Eyebleach', 'Formula1', 'Wholesomememes', 'Aww', 'Futurama', 'TheLastAirbender', 'Pics', 'Damnthatsinteresting', 'Gaming' ]);
    const [subreddits, setSubreddits] = useState<Subreddit[]>([]);
    const [activeSubreddit, setActiveSubreddit] = useState<string | null>(null);

    useEffect(() => {
        const fetchSubreddits = async () => {
            const fetchedSubreddits = await Promise.all(
                initialSubreddits.map(async (subreddit) => {
                    const response = await fetch (`https://www.reddit.com/r/${subreddit}/about.json`);
                    const data = await response.json();
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

    const onClickSubreddit = (subreddit: string) => {
        setActiveSubreddit(subreddit);
        onSelectSubreddit(subreddit);
    }


    return (
        <div className=' flex flex-col items-center w-full'>
        <h2 className=' font-semibold self-center text-lg p-3 m-2 text-center lg:text-3xl' >Subreddits</h2>
        {
            subreddits.map((subreddit) => (
                <Subreddits key = {subreddit.name} 
                subreddits = {subreddit.name}
                onClickSubreddit = {onClickSubreddit}
                activeSubreddit = {activeSubreddit}
                image = {subreddit.icon_img}
                />
            ))
        }
        </div>
    )
}

export default Sidebar;