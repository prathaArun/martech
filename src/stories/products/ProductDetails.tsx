import { IProducts } from "./products.model"
import classes from './Product.module.scss';

export const ProductDetails = (props:{productDetail:IProducts}) => {
    console.log('props productdetail', props)
    return(<div className={classes['product-detail-container']}>
        <div className={`${classes['product-detail-container__image-wrapper']}`}>
        <div className={`${classes['product-detail-container__image-wrapper__tile']}`}>
            {props.productDetail.attributes.e_image_urls_detail_jpg.map((arr: string[], index) => {   
                    return(<img key={index} src={ arr[0]} alt={`Product${props.productDetail.type}`} />)
            })}
             </div>
           
        </div>
        <div className={`${classes['product-detail-container__info-wrapper']}`}>
            <h2>{props.productDetail.attributes.product_name}</h2>
            <h3>{props.productDetail.attributes.currency} {props.productDetail.attributes.retailer_price}</h3>
            <h4>Avaialbility: {props.productDetail.attributes.availability} </h4>           
            <hr/>
            <h4>Quanity:</h4> 
            <div className={classes['product-detail-container__info-wrapper__btn-group']}>
                <button type='button' >ADD TO CART</button>
                <button type='button'>BUY NOW</button>
            </div>
            <hr/>
            <h5>Product description</h5>
            <div dangerouslySetInnerHTML={{ __html: props.productDetail.attributes.long_description }} />
        </div>
    </div>)
}