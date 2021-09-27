import React from "react";

import { rest } from "msw";

import { Products } from "./Products";
import { IProducts } from "./products.model";
import { ComponentStory } from "@storybook/react";
import { Button } from "../Button";
import { useFetchData } from "./useFetchData";

export default {
  component: Products,
  title: "Example/Products",
};

//👇The mocked data that will be used in the story
const TestData: IProducts[] = [
  {
    attributes: {
      availability: "in-stock",
      color: "Black/Black",
      currency: "USD",
      e_image_urls_og: "www",
      retailer_url: "Nike.com",
      retailer_price: 10,
      product_name: "Nike",
      long_description: "",
      e_retailer_display_domain: "Nike",
    },
    id: "Test",
    type: "Test product",
  },
];

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
        return res(ctx.json(TestData));
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
          return res(ctx.json(TestData));
        }
      ),
    ],
  };
};
export const ProductPagination = PageTemplate.bind({});
ProductPagination.parameters = {
  isPagination: true,
};
ProductPagination.argTypes = {
  onClick: { action: () => fetchProduct(0) },
};

export const ProductDetails = PageTemplate.bind({});
ProductDetails.parameters = {
  isProductClickable: true,
  isPagination: false
};

