interface IProductAttribute {
    availability:string;
color: string;
e_image_urls_og: string;
retailer_url:string;
retailer_price: number;
product_name:string;
long_description:string;
currency: string;
e_retailer_display_domain:string;
e_image_urls_detail_jpg: [];
}
export interface IProducts {
    attributes:IProductAttribute;
    id: string;
    type: string;
    onClick?: (e:number) => void
}

export interface IPaginationConfig {
    pageSize: number;
    total: number;
}
 interface IParams {
    isPagination?: boolean;
    isProductClickable?: boolean;
 }
export interface IProductStoryArgs extends IProducts{
    data: IProducts;
    meta: IPaginationConfig;
    parameters: IParams;
}