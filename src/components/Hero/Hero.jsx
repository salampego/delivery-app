import { Link } from "react-router-dom";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__wrap">
        <h1 className="hero__title">Food Delivery App</h1>
        <Link to="shop" className="hero__link">
          Let's order
        </Link>
      </div>
    </section>
  );
};
