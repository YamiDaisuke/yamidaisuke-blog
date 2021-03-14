import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import NavBar, { NavLink } from 'components/common/navbar';

import Post from 'components/post/post';
import { home } from 'data/posts';

// Register FontAwesome icons here
library.add(faGithubAlt, faLaptopCode, faLinkedin);

function App(): React.ReactElement {
    const postsElements = home.map(
        (p): React.ReactElement => {
            return <Post post={p} />;
        }
    );

    const navLinks: Array<NavLink> = [
        {
            link: 'https://github.com/YamiDaisuke',
            icon: faGithubAlt,
        },
        {
            link: 'https://www.linkedin.com/in/franklin-cruz-a8b213ba/',
            icon: faLinkedin,
        },
    ];

    return (
        <div className="wrapper">
            <NavBar
                siteName="YamiDaisuke Blog"
                siteIcon="laptop-code"
                links={navLinks}
            />
            <section className="container">{postsElements}</section>
        </div>
    );
}

export default App;
