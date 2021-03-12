import React from 'react';
import PostModel from 'models/post';
import Head from './head';

type PostProps = {
    /** An model object containing all the post information */
    post: PostModel;
};

/** Renders a blog post with title, tags, date and HTML body */
function Post({ post }: PostProps): React.ReactElement {
    /// For the time being will use dangerouslySetInnerHTML
    /// we'll switch for something better later on.
    /* eslint-disable react/no-danger */
    return (
        <div className="post">
            <Head
                title={post.title}
                tags={post.tags}
                date={post.publishDate || post.createDate}
            />
            <div
                className="body"
                dangerouslySetInnerHTML={{ __html: post.body }}
            />
        </div>
    );
}

export default Post;
