import Home from "@/app/page";
import {render, waitFor} from '@testing-library/react';

// Mock the fetch funciton to return samel JSON data 

jest.mock('node-fetch', ()=> jest.fn().mockResolvedValue({
    json: () => Promise.resolve( {data: {chidren:[]}} ),
}));

describe('Page Component', () => {
    test('fetches subreddit data correctly', async () => {
        render(<Home/>);

        await waitFor( () => {
            expect(fetch).toHaveBeenCalledWith('https://www.reddit.com/r/all.json');
        });
    });
});

