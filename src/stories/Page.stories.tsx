import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Page } from './Page';
import * as HeaderStories from './Header.stories';
import * as ProductStories from './products/Products.stories';
import * as HeroStories from './hero/Hero.stories';

export default {
  title: 'Example/Page',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;


export const ProductPage = Template.bind({});
ProductPage.args = {
  ...HeroStories.LowResolution.args,
  ...ProductStories.ProductPagination.args,
};