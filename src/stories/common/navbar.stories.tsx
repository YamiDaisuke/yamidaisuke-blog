import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import { faCoffee, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import NavBar from 'components/common/navbar';

export default {
    title: 'Navigation Bar',
    component: NavBar,
    // argTypes: {
    //     links: { control: 'object' },
    // },
};

const Template: Story<ComponentProps<typeof NavBar>> = (args) => (
    <NavBar {...args} />
);

export const NavBarStory = Template.bind({});
NavBarStory.args = {
    siteName: 'My Site',
    siteIcon: faCoffee,
    links: [
        {
            link: 'https://yamidaisuke.github.io/',
            icon: faLaptopCode,
        },
    ],
};
