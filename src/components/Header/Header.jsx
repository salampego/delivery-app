import "./Header.css";
import logo from "../../images/logo.svg";
import { NavLink, Outlet } from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react";
import { ReactComponent as MobileMenuIcon } from "../../images/mobile-menu.svg";
import { ReactComponent as MobileMenuIconCross } from "../../images/mobile-menu-cross.svg";
import { Loader } from "../Loader/Loader";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    if (showMobileMenu && mobileMenuRef.current) {
      const mobileMenuHeight = mobileMenuRef.current.scrollHeight;
      mobileMenuRef.current.style.height = `${mobileMenuHeight}px`;
    } else if (mobileMenuRef.current) {
      mobileMenuRef.current.style.height = "0";
    }
  }, [showMobileMenu]);

  const handleMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <div className="header__content">
            <NavLink to="/">
              <img src={logo} alt="logo" className="header__logo" />
            </NavLink>
          </div>

          <div className="navigation">
            <Navigation />
          </div>

          <div className="mobile__menu--wrapper">
            <button className={`mobile__menu__btn`} onClick={handleMenuToggle}>
              {showMobileMenu ? (
                <MobileMenuIconCross className="mobile__menu__icon" />
              ) : (
                <MobileMenuIcon className="mobile__menu__icon" />
              )}
            </button>
          </div>
        </div>
        {showMobileMenu && (
          <div className="mobile__menu" ref={mobileMenuRef}>
            <div className="container">
              <div className="mobile__menu--wrap">
                <Navigation />
              </div>
            </div>
          </div>
        )}
      </header>
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
