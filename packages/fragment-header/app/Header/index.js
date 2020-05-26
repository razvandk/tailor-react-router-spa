import React, { Component } from "react";
import { Link } from "react-router";
import "./styles.scss";
import NavItem from "../NavItem";
import Logo from "../Logo";

const items = [0, 1, 2, 3, 4, 5, 6];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
  }

  selectNavItem(index) {
    this.setState({ active: index });
  }

  render() {
    const { active } = this.state;

    return (
      <div className="header">
        <Link to="/" onClick={() => this.selectNavItem(0)}>
          <Logo />
        </Link>
        <Link to="/dashboard">
          <NavItem
            active={1 === active}
            onClick={() => this.selectNavItem(1)}
            name="Dashboard"
          />
        </Link>
        <Link to="/sales">
          <NavItem
            active={2 === active}
            onClick={() => this.selectNavItem(2)}
            name="Sales"
          />
        </Link>
        <Link to="/mobile">
          <NavItem
            active={3 === active}
            onClick={() => this.selectNavItem(3)}
            name="Mobile (all)"
          />
        </Link>
        <Link to="/mobile/123456">
          <NavItem
            active={4 === active}
            onClick={() => this.selectNavItem(4)}
            name="Mobile (40 40 40 40)"
          />
        </Link>
        <Link to="/mobile/987654">
          <NavItem
            active={5 === active}
            onClick={() => this.selectNavItem(5)}
            name="Mobile  (50 50 50 50)"
          />
        </Link>
        <Link to="/settings">
          <NavItem
            active={6 === active}
            onClick={() => this.selectNavItem(6)}
            name="Settings"
          />
        </Link>
      </div>
    );
  }
}

export default Header;
