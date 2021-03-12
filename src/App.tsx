import React from 'react';

import Post from 'components/post/post';
import { home } from 'data/posts';

function App(): React.ReactElement {
    const postsElements = home.map(
        (p): React.ReactElement => {
            return <Post post={p} />;
        }
    );

    return <div className="container">{postsElements}</div>;
}

export default App;
