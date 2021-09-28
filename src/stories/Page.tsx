import React from 'react';

import { Hero } from './hero/Hero';
import { IHeroProps } from './hero/hero.model';
import './page.css';
import { Products } from './products/Products';
import { IProductStoryArgs } from './products/products.model';

interface PageProps extends IProductStoryArgs, IHeroProps {
  user?: {};
}

export const Page = ({ user}: PageProps) => (
  <> 
    <Hero subTitle={''} title={''} buttonGroup={[{size:'large', label:'Men', type:'primary'}, {size:'large', label:'Women', type:'secondary'}]}/>
    <Products />
  </>

);
