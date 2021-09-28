import {  useState } from "react";
import { useFetchData } from "./useFetchData";
import {IProducts, IProductStoryArgs} from './products.model';
import classes from './Product.module.scss';
import { ProductDetails } from "./ProductDetails";


export const Products = ({   
    ...props
  }: IProductStoryArgs) => {
    const { status, products, paginationMeta, fetchProducts } = useFetchData();
    const [ProductDetailData, setProductDetailData] = useState<IProducts>();

const calculatePageLength = () => {
    const dom_content = [];
    if(paginationMeta) {
    
    const noOfpages = Math.ceil(paginationMeta?.total/paginationMeta?.pageSize);
    //TODO: Iterate with noOfpages and do a proper logic to show max 10 pages 
    for (let i=1; i< 10; i++) {
        dom_content.push(<li onClick={()=>props?.onClick ?fetchProducts(i):null}><span>{i}</span></li>)
    }
    return(<><ul className={classes['pagination']}><li>prev</li>{dom_content}<li>next</li></ul></>)    
    }
    return(<></>)
}

//TODO: Move to util function
const redirectToProductDetails = (product:IProducts) => {
    if(props.parameters && props.parameters.isProductClickable) {    
        setProductDetailData(product)
    }
}
  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  if (status === 'error') {
    return <p>There was an error fetching the data!</p>;
  }
    return(<>
     {!ProductDetailData ? products && products.length> 0 &&
     <>
    <div className={classes['product-list']}>     
         
        {products.map((item) => {
            return(<div className={`${classes['product-list__product-card']} ${props.parameters && props.parameters.isProductClickable ? classes['product-list__product-card__cursor']:""}` } key={item.id} onClick={() => redirectToProductDetails(item)}>
                <div className={classes['product-list__product-card__product-image']}>
                    <img src={item.attributes.e_image_urls_og} alt='product' />
                </div>
                <div className={classes['product-list__product-card__product-info']}>
                    <h5>{item.attributes.product_name}</h5>
                    <a href={item.attributes.retailer_url}  rel="noreferrer" target="_blank">{`www.${item.attributes.e_retailer_display_domain}`}</a>
                    <p className={classes['product-list__product-card__product-info__price']}>{`${item.attributes.currency} ${item.attributes.retailer_price}`}</p>
                </div>
            </div>)
        })} 
          
        </div>
        <div>
        {props?.parameters?.isPagination && calculatePageLength()}
        </div>  
        </>
    : <ProductDetails productDetail={ProductDetailData} />}
    </>)
}