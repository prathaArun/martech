import classes from './Hero.module.scss';
import {IHeroProps} from './hero.model';

export const Hero = ({backgroundColor,...props}:IHeroProps) => {
    console.log('props', props);
     
    return(<div style={{ backgroundColor }} className={`${classes['hero-container']}`}>
        <div className={`${classes['hero-container__ellipse-wrapper']}`}>
        <div className={`${classes['hero-container__ellipse-wrapper__product-img-bg']}`}></div>
        </div>
         <h1>{props?.title}</h1>
        <p>{props?.subTitle}</p> 
        {props.buttonGroup.map((btn) => {
            const mode = btn.type === 'primary'  ? 'hero-container__button--primary' : 'hero-container__button--secondary';
            const size = `hero-container__button--${btn.size}`;
            return( <button
                key={btn.type}
                type="button"
                className={`${classes['hero-container__button']} ${classes[mode]} ${classes[size]}`}
                {...props.buttonGroup}
              >
                {btn.label}
              </button>)
        })
    }        
    </div>)
}