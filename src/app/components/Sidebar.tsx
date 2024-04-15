import React from 'react';
import Subreddits from './Subreddits';
import { useEffect } from 'react';


export default function Sidebar() {

   
    const subredditImage = async (sub:string) => {

        try {
        const response = await fetch(`https://www.reddit.com/r/${sub}/about.json`)
        const data = await response.json();
        console.log(data.data.icon_img);
        const logo:string = data.data.icon_img;
        return logo;
        } catch (e:any) {
        console.log(e);
        }
    };

    console.log(subredditImage("futurama"));


    return (
        <div className='flex-col items-center'>
        <h2 className=' font-semibold self-center text-3xl p-4 m-2 object-center' >Subreddits</h2>
        <Subreddits subreddit={"Starcraft"} url={"https://b.thumbs.redditmedia.com/vQQgDREdzZUlWLy5KSg0DoaIdtyP8piRjV0K50KmDNI.png"}/>
        <Subreddits subreddit={"Wall Street Bets"} url={"https://a.thumbs.redditmedia.com/w-gbSE-QjkUuNjq2yPpekzEtN4CXRiL4tTO_XfloH80.png"}/>
        <Subreddits subreddit={"Eye Bleach"} url={"https://b.thumbs.redditmedia.com/MD9KQJnI4uIuXFUzA3DWabdGKJYceQ1uk2_ktRQXcgY.png"}/>
        <Subreddits subreddit={"Formula 1"} url={"https://b.thumbs.redditmedia.com/uUkSuTDpTWhU4mW5-OXzca_pVR0RQKHkEq-x_eCQC9I.png"}/>
        <Subreddits subreddit={"Wholesome Memes"} url={"https://b.thumbs.redditmedia.com/voAwqXNBDO4JwIODmO4HXXkUJbnVo_mL_bENHeagDNo.png"}/>
        <Subreddits subreddit={"Aww"} url={("https://a.thumbs.redditmedia.com/A71uOuvJLekakhm6d5jn3SPO2R7IezsXTT72Fq98J30.png") }/>
        <Subreddits subreddit={"Futurama"} url={"https://b.thumbs.redditmedia.com/SHZpVYxZEkO3PpcqjjmWYsrRM3cafEXbCMlR_1ldEEY.png"}/>
        </div>
    )
}
