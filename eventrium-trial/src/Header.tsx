import React from "react";

const Header = () => {
  const isMenuItemActive = (menuItemName: string) => {
    const currentPath = window.location.pathname;
    const currentPageName = currentPath.split("/").pop() || "index.html"; // Default to "index.html" if no path

    return menuItemName === currentPageName;
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <a href="./index.html">
                  <img src="img/logo.png" alt=""></img>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <nav className="header__menu">
                <ul>
                  <li
                    className={isMenuItemActive("index.html") ? "active" : ""}
                  >
                    <a href="./index.html">Home</a>
                  </li>
                  <li
                    className={
                      isMenuItemActive("create-event.html") ? "active" : ""
                    }
                  >
                    <a href="./my-event.html">My Event</a>
                  </li>
                  <li
                    className={
                      isMenuItemActive("register-event.html") ? "active" : ""
                    }
                  >
                    <a href="./register-event.html">Register Event</a>
                  </li>
                  <li
                    className={
                      isMenuItemActive("certificates.html") ? "active" : ""
                    }
                  >
                    <a href="./certificates.html">Certificates</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-2">
              <div className="header__cart">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-heart"></i> <span>1</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-shopping-bag"></i> <span>3</span>
                    </a>
                  </li>
                </ul>
                <div className="header__cart__price">
                  item: <span>$150.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
