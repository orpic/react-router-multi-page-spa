import React from "react";

//routes
import { NavLink } from "react-router-dom";
import { welcomePath, productsPath } from "../../pages";

//css
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <>
      <header className="main-header-header flex-center">
        <nav className="main-header-nav">
          <ul className="main-header-ul">
            <li>
              <NavLink activeClassName="app-activeNavLinkPage" to={welcomePath}>
                Welcome
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="app-activeNavLinkPage"
                to={productsPath}
              >
                Products
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
