import React from "react";

import { rest } from "msw";

import { Products } from "./Products";
import { IProducts } from "./products.model";
import { ComponentStory } from "@storybook/react";

export default {
  component: Products,
  title: "Martech/Products",
};

// TODO: mocked data to use in story


//TODO: Add Memoryrouter decorator to wrap the component
const PageTemplate: ComponentStory<typeof Products> = (args, parameters) => (
  <Products onClick={fetchProduct} {...args} {...parameters} />
);

export const ProductWithImage = PageTemplate.bind({});

ProductWithImage.parameters = {
  isPagination: false,
  msw: [
    rest.get(
      "https://api.theurge.com.au/search-results?brands=Nike",
      (_req: any, res: any, ctx: any) => {
        return res(ctx.json());
      }
    ),
  ],
};

const fetchProduct = (pageNumber: number) => {
  return {
    msw: [
      rest.get(
        "https://api.theurge.com.au/search-results?brands=Nike",
        (_req: any, res: any, ctx: any) => {
          return res(ctx.json());
        }
      ),
    ],
  };
};
export const ProductPagination = PageTemplate.bind({});
ProductPagination.parameters = {
  isPagination: true,  
  isProductClickable: false
};
ProductPagination.argTypes = {
  onClick: { action: () => fetchProduct(0) },
};

export const ProductDetails = PageTemplate.bind({});
ProductDetails.parameters = {
  isProductClickable: true,
  isPagination: false
};

