import { NavLink } from "react-router-dom";
import "./Navigation.css";
import styled from "styled-components";
export const Navigation = () => {
  const StyledLink = styled(NavLink)`
    &.active {
      color: #ca9100;
    }

    @media screen and (min-width: 767px) {
      &.active::after {
        content: "";
        position: absolute;
        right: 0;
        width: 100%;
        height: 4px;
        background-color: #ca9100;
        margin-top: 46px;
        border-radius: 2px;
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }
    }
  `;

  return (
    <nav className="nav">
      <StyledLink to="shop" className="nav__link">
        Shop
      </StyledLink>

      <StyledLink to="/shopping-cart" className="nav__link">
        Shopping Cart
      </StyledLink>

      <StyledLink to="/history" className="nav__link">
        History Order
      </StyledLink>
    </nav>
  );
};
