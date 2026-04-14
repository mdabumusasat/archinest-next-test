"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "../NavLinks";
import MobileMenu from "../MobileMenu";

interface HeaderProps {
  handleOpen: () => void;
  handleRemove: () => void;
  handleRemove2: () => void;
  scroll: boolean;
  handleToggle?: () => void;
  searchToggle?: boolean;
}

const Header: React.FC<HeaderProps> = ({ handleOpen, handleRemove, handleRemove2, scroll }): JSX.Element => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleToggle = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
  <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""}`}>
    <div className="outer-box">
      <div className="header-top">
        <div className="inner-top">
          <ul className="list">
            <li><Link href="/page-contact"><i className="fa-regular fa-clock"></i>archinest@gmail.com</Link></li>
          </ul>
          <ul className="list">
            <li><Link href="#"><i className="fa-regular fa-envelope"></i>Call Us On (252) 555-0126</Link></li>
            <li className="line"></li>
            <li><Link href="/page-contact"><i className="fa-regular fa-location-dot"></i>Opening Hours: 10:00 to 07:00</Link></li>
          </ul>
        </div>
      </div>
      <div className="header-lower anim-fade-move" data-delay="0.25">
        <div className="inner-lower">
          <div className="main-box">
            <div className="logo-box">
              <div className="logo"><Link href="#"><img src="/assets/images/logo.png" alt="Logo"/></Link></div>
            </div>
            {/* <!--Nav Box--> */}
            <div className="nav-outer">
              <nav className="nav main-menu mx-auto">
                <NavLinks extraClassName="main-menu-list" />
              </nav>
            </div>
            {/* <!-- Outer Box --> */}
            <div className="action-box">
              <button className="ui-btn search-btn" onClick={handleToggle}>
                <i className="icon fal fa-search"></i>
              </button>
              <Link href="#" className="shop-cart">
                <i className="icon fa-regular fa-cart-shopping"></i>
                <span>0</span>
              </Link>
              <Link href="/page-contact" className="theme-btn btn-style-one d-none d-md-flex">
                <span className="btn-title">Get A Quote!</span>
              </Link>
              <ul className="social-link">
                <li><Link href="#"><i className="fa-brands fa-facebook"></i></Link></li>
                <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                <li><Link href="#"><i className="fa-regular fa-x"></i></Link></li>
                <li><Link href="#"><i className="fa-solid fa-link-slash"></i></Link></li>
              </ul>
              {/* <!-- Mobile Nav toggler --> */}
              <div className="mobile-nav-toggler" onClick={handleOpen}><i className="icon fa-solid fa-bars-staggered"></i></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Mobile Menu  --> */}
    <div className="mobile-menu">
      <div className="menu-backdrop" onClick={() => { handleRemove(); handleRemove2(); }} />
      <nav className="menu-box">
        <div className="upper-box">
          <div className="nav-logo"><Link href="#"><img src="/assets/images/logo-2.png" alt=""/></Link></div>
          <div className="close-btn" onClick={() => { handleRemove(); handleRemove2(); }}><i className="icon fa fa-times"></i></div>
        </div>
        <ul className="navigation clearfix">
          <MobileMenu />
        </ul>
        <ul className="contact-list-one">
          <li>
            <i className="icon fal fa-envelope"></i>
            <span className="title">Send Email</span>
            <div className="text"><Link href="#">alma.lawson@example.com</Link></div>
          </li>
        </ul>
        <ul className="social-links">
          <li><Link href="#"><i className="icon fab fa-twitter"></i></Link></li>
          <li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
          <li><Link href="#"><i className="icon fab fa-pinterest-p"></i></Link></li>
          <li><Link href="#"><i className="icon fab fa-vimeo-v"></i></Link></li>
        </ul>
      </nav>
    </div>
    {/* <!-- Header Search --> */}
    <div className={`search-popup ${isSearchActive ? "active" : ""}`}>
      <span className="search-back-drop" onClick={handleToggle} />
      <button className="close-search" onClick={handleToggle}><span className="fa fa-times"></span></button>
      <div className="search-inner">
        <form method="post" action="#">
          <div className="form-group">
            <input type="search" name="search-field" placeholder="Search..." />
            <button type="submit"><i className="fa fa-search"></i></button>
          </div>
        </form>
      </div>
    </div>
    {/* <!-- End Header Search --> */}

    {/* <!-- Sticky Header  --> */}
    <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
      <div className="auto-container">
        <div className="inner-container">
          {/* <!--Logo--> */}
          <div className="logo">
            <Link href="#"><img src="/assets/images/logo.png" alt=""/></Link>
          </div>
          {/* <!--Right Col--> */}
          <div className="nav-outer">
            <nav className="main-menu">
              <div className="navbar-collapse show collapse clearfix">
                <ul className="navigation clearfix">
                   <NavLinks extraClassName="main-menu-list" />
                </ul>
              </div>
            </nav>

            {/* <!--Mobile Navigation Toggler--> */}
            <div className="mobile-nav-toggler" onClick={handleOpen}><i className="icon fa-solid fa-bars-staggered"></i></div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End Sticky Menu --> */}
  </header>
  );
}

export default Header;
