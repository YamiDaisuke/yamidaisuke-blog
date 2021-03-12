import React from 'react';
import { render, screen } from '@testing-library/react';
import moment from 'moment';
import PostModel from 'models/post';
import Post from './post';

test('Renders a blog post', () => {
    const post: PostModel = {
        title: 'My Test Post',
        createDate: moment('1988-09-12T15:10:00.000Z').utc(),
        publishDate: moment('2020-09-12T15:10:00.000Z').utc(),
        tags: ['tag1', 'tag2', 'tag3'],
        status: 'published',
        body: `
        <p>paragraph</p>
        <p><strong>bold</strong</b></p>
        <h2>Title</h2>
        `,
    };

    const { container } = render(<Post post={post} />);
    const titleElement = screen.getByText(post.title);
    expect(titleElement).toBeInTheDocument();

    // Date element should have publish date
    const dateElement = screen.getByText('12-09-2020 15:10');
    expect(dateElement).toBeInTheDocument();

    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs.length).toBe(2);

    const bold = container.querySelector('p strong');
    expect(bold).toBeInTheDocument();

    const h2 = container.querySelector('h2');
    expect(h2).toBeInTheDocument();
});
