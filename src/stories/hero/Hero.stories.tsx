import { ComponentStory, ComponentMeta } from "@storybook/react";
import {Hero} from './Hero';

export default {
    title: 'Martech/Hero',
    
    component: Hero,
    argTypes: {
        backgroundColor: { control: 'color' }        
      }
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero>=(args) => <Hero {...args} />;
export const mobile = Template.bind({});
mobile.args = {
     title:'Nike React Sneakers',
    subTitle: 'Pay in 4 interest-free installments.',
    isMobile: true,
    buttonGroup: [{size:'large', label:'Men', type:'primary'}, {size:'large', label:'Women', type:'secondary'}]
}

export const desktop = Template.bind({});
desktop.args = {
     title:'Nike React Sneakers',
    subTitle: 'Pay in 4 interest-free installments.',
    isMobile: false,
    buttonGroup: [{size:'large', label:'Men', type:'primary'}, {size:'large', label:'Women', type:'secondary'}]
}

