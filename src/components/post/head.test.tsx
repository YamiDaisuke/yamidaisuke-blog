import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import moment from 'moment';
import Head from './head';

afterEach(cleanup);

test('Renders the title, date and tags from a blog post', () => {
    const title = 'My title';
    const date = moment('1988-09-12T15:10:00.000Z').utc();
    const tags = ['tag1', 'tag2', 'tag3'];

    const { container } = render(
        <Head title={title} date={date} tags={tags} />
    );

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H1');

    const dateElement = screen.getByText('12-09-1988 15:10');
    expect(dateElement).toBeInTheDocument();
    expect(dateElement.tagName).toBe('H6');

    const tagsElements = container.querySelectorAll('ul li');
    expect(tagsElements.length).toBe(tags.length);
    tagsElements.forEach((t, index) => {
        expect(t.textContent).toBe(tags[index]);
    });
});

test('Renders a header without the date blog post', () => {
    const title = 'My title';
    const tags = ['tag1', 'tag2', 'tag3'];

    render(<Head title={title} tags={tags} />);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H1');

    const dateElement = screen.queryByText('12-09-1988 15:10');
    expect(dateElement).not.toBeInTheDocument();

    const tag = screen.getByText(tags[0]);
    expect(tag).toBeInTheDocument();
});

test('Renders a header without tags from a blog post', () => {
    const title = 'My title';
    const date = moment('1988-09-12T15:10:00.000Z').utc();

    const { container } = render(<Head title={title} date={date} />);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H1');

    const dateElement = screen.getByText('12-09-1988 15:10');
    expect(dateElement).toBeInTheDocument();
    expect(dateElement.tagName).toBe('H6');

    const tagsElement = container.querySelector('li');
    expect(tagsElement).not.toBeInTheDocument();
});
