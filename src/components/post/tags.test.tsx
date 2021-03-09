import React from 'react';
import { render, screen } from '@testing-library/react';
import Tags from './tags';

test('Renders the tags from a blog post and allows selection', () => {
    const tags = ['tag1', 'tag2'];
    let selected = -1;
    const onSelected = (index: number) => {
        selected = index;
    };

    render(<Tags tags={tags} onTagClicked={onSelected} />);
    tags.forEach((t, index) => {
        const tagElement = screen.getByText(new RegExp(t));
        expect(tagElement).toBeInTheDocument();
        expect(tagElement.tagName).toBe('LI');
        tagElement.click();
        expect(selected).toBe(index);
    });
});
