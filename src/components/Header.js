import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faChevronDown from "@fortawesome/fontawesome-free-solid/faChevronDown";
import faChevronUp from "@fortawesome/fontawesome-free-solid/faChevronUp";

const Header = (props) => (
  <div className="header">
    <div className="header__container">
      <img src="/images/logo@2x.png" width="22px" />
      <h1 className="header__title">Dice Roller</h1>
      {/* <button
        onClick={props.handleOpenDrawer}
        className="header__drawer-control"
      >
        {props.drawerOpen ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </button> */}
      <div
        className={
          "header__drawer-content " +
          (props.drawerOpen ? "header__drawer--open" : "header__drawer--closed")
        }
      >
        <p>Drawer Content</p>
      </div>
    </div>
  </div>
);

export default Header;
