import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './navbar.scss';

/**
 * Represents a single icon links to be added in the
 * right hand side of the Navigation Bar
 */
type NavLink = {
    /** The link to open when clicked */
    link: string;
    /** A FontAwesome icon to display */
    icon: IconProp;
};

type NavBarProps = {
    /** The site name to display in the navigation bar */
    siteName: string;
    /** An optional FontAwesome to display left of the siteName */
    siteIcon?: IconProp;
    /** An optional list of links to display on the right side */
    links?: Array<NavLink>;
};

/**
 * Presents a fixed Navigation bar containing the site name, an optional
 * FontAwesome icon to the left of the title a list of icon based links
 * on the right side of the bar
 *
 * @param {NavBarProps} props: The props for this component
 * @returns The `React.ReactElement`
 */
function NavBar({
    siteName,
    siteIcon,
    links,
}: NavBarProps): React.ReactElement {
    const linkElements = (links || []).map(
        (l): React.ReactElement => {
            return (
                <a
                    key={`link_${l.link}`}
                    href={l.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={l.icon} size="2x" className="link" />
                </a>
            );
        }
    );

    return (
        <nav className="navbar">
            {siteIcon && (
                <FontAwesomeIcon icon={siteIcon} size="2x" className="icon" />
            )}
            <h1 className="title">{siteName}</h1>
            <div className="links">{linkElements}</div>
        </nav>
    );
}

NavBar.defaultProps = {
    /** By default no icon will be showed */
    siteIcon: undefined,
    /** By default no link will be showed */
    links: [],
};
export type { NavLink };
export default NavBar;
