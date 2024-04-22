import Cards from '@/app/components/Cards';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Cards Component', () => {
    test('renders post titles correctly', ()=> {
        const post = {
            id: '1',
            title: 'Test Post',
            thumbnail: 'https://example.com/image.jpg',
            url: 'https://example.com',
            permalink: '/r/testpost',
            score:100,
        };

        render(<Cards post={post} />)

        // Check if post title is rendered correctly 
        const postTitle = screen.getByText('Test Post');
        expect(postTitle).toBeInTheDocument();
    });
});