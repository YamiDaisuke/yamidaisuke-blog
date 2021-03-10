import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import moment from 'moment';

import Head from 'components/post/head';

export default {
    title: 'Head',
    component: Head,
    argTypes: {
        tags: { control: 'array' },
        date: { control: 'date' },
    },
    decorators: [
        (AStory: Story): React.ReactElement => (
            <div style={{ margin: '3em' }}>
                <AStory />
            </div>
        ),
    ],
};

const Template: Story<ComponentProps<typeof Head>> = (args) => (
    <Head {...args} />
);

export const HeadStory = Template.bind({});
HeadStory.args = {
    title: 'This is a post title',
    date: moment(),
    tags: ['blog', 'swift', 'code', 'life'],
    onTagClicked: action('onTagClicked'),
};
