import React from "react";
import cx from "classnames";
import "./styles.scss";

const NavItem = ({ onClick, active, name }) => (
  <div
    className={cx("nav-item", {
      current: active,
    })}
    onClick={onClick}
  >
    {name}
  </div>
);

export default NavItem;
