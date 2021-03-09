import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Tags from '../../components/post/tags';

export default {
    title: 'Tags',
    component: Tags,
};

const Template: Story<ComponentProps<typeof Tags>> = (args) => (
    <Tags {...args} />
);

export const TagsStory = Template.bind({});
TagsStory.args = {
    tags: ['blog', 'swift', 'code', 'life'],
    onTagClicked: action('onTagClicked'),
};
