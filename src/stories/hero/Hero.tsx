import classes from "./Hero.module.scss";
import { IHeroProps } from "./hero.model";

export const Hero = ({ backgroundColor, ...props }: IHeroProps) => {
  return (
    <div style={{ backgroundColor }} className={`${classes["hero-container"]}`}>
      <div
        className={`${classes["hero-container__ellipse-wrapper"]}  ${
          props?.isMobile
            ? classes["hero-container__ellipse-wrapper__low-res"]
            : ""
        }`}
      >
        <div
          className={`${classes["hero-container__ellipse-wrapper__product-img-bg"]}`}
        ></div>
      </div>
      {props?.isMobile && (
        <div className={`${classes["hero-container__overlay"]}`}></div>
      )}

      <div
        className={`${classes["hero-container__product-desc"]}  ${
          props?.isMobile
            ? classes["hero-container__product-desc__low-res"]
            : ""
        }`}
      >
        <h1>Nike React Sneakers</h1>
        <p>Pay in 4 interest-free installments.</p>
        <div className={`${classes["hero-container__btn-group"]}`}>
          {props.buttonGroup.map((btn) => {
            const mode =
              btn.type === "primary"
                ? "hero-container__btn-group__button--primary"
                : "hero-container__btn-group__button--secondary";
            const size = `hero-container__btn-group__button--${btn.size}`;
            return (
              <button
                key={btn.type}
                type="button"
                className={`${classes["hero-container__btn-group__button"]} ${classes[mode]} ${classes[size]}`}
                {...props.buttonGroup}
              >
                {btn.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
