import { IProducts } from "./products.model"
import classes from './Product.module.scss';

export const ProductDetails = (props:{productDetail:IProducts}) => {
    console.log('props productdetail', props)
    return(<div className={classes['product-detail-container']}>
        <div className={`${classes['product-detail-container__image-wrapper']}`}>
            <img src={props.productDetail.attributes.e_image_urls_og} alt={`Product${props.productDetail.type}`} />
        </div>
        <div className={`${classes['product-detail-container__info-wrapper']}`}>
            <h2>{props.productDetail.attributes.product_name}</h2>
            <h3>{props.productDetail.attributes.currency} {props.productDetail.attributes.retailer_price}</h3>
        </div>
    </div>)
}