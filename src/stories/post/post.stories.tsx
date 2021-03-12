import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import PostModel from 'models/post';
import Post from 'components/post/post';

export default {
    title: 'Post',
    component: Post,
    argTypes: {
        post: { control: 'object' },
    },
};

const Template: Story<ComponentProps<typeof Post>> = (args) => (
    <Post {...args} />
);

const post: PostModel = {
    title: 'My Test Post',
    createDate: new Date(),
    publishDate: new Date(),
    tags: ['tag1', 'tag2', 'tag3'],
    status: 'published',
    body: `
    <p>paragraph</p>
    <p><strong>bold</strong</b></p>
    <h2>Title</h2>
    `,
};

export const PostStory = Template.bind({});
PostStory.args = {
    post,
};
