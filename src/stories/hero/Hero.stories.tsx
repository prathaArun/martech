import { ComponentStory, ComponentMeta } from "@storybook/react";
import {Hero} from './Hero';
import {IHeroProps} from './hero.model';

export default {
    title: 'Example/Hero',
    
    component: Hero,
    argTypes: {
        backgroundColor: { control: 'color' }
        
      }
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero>=(args) => <Hero {...args} />;
export const LowResolution = Template.bind({});
LowResolution.args = {
     title:'Nike React Sneakers',
    subTitle: 'Pay in 4 interest-free installments.',
    buttonGroup: [{size:'large', label:'Men', type:'primary'}, {size:'large', label:'Women', type:'secondary'}]
}

