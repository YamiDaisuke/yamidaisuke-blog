import React from 'react';
import { render, screen } from '@testing-library/react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import NavBar, { NavLink } from './navbar';

test('Renders a nav bar with a title an icon and two links with icons', () => {
    const title = 'My title';
    const icon = faCoffee;
    const links: Array<NavLink> = [
        {
            icon: faCoffee,
            link: '#one',
        },
        {
            icon: faCoffee,
            link: '#two',
        },
    ];

    const { container } = render(
        <NavBar siteName={title} siteIcon={icon} links={links} />
    );

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H1');

    const iconElement = container.querySelector('.icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement?.tagName).toBe('svg');

    const linkElements = container.querySelectorAll('.link');
    expect(linkElements.length).toBe(2);
});

test('Renders a nav bar with a title an icon', () => {
    const title = 'My title';
    const icon = faCoffee;

    const { container } = render(<NavBar siteName={title} siteIcon={icon} />);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H1');

    const iconElement = container.querySelector('.icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement?.tagName).toBe('svg');

    const linkElements = container.querySelectorAll('.link');
    expect(linkElements.length).toBe(0);
});

test('Renders a nav bar with only a title', () => {
    const title = 'My title';

    const { container } = render(<NavBar siteName={title} />);

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H1');

    const iconElement = container.querySelector('.icon');
    expect(iconElement).not.toBeInTheDocument();

    const linkElements = container.querySelectorAll('.link');
    expect(linkElements.length).toBe(0);
});
