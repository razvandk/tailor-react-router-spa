import React, { Component } from "react";
import { Link } from "react-router";
import "./styles.scss";
import NavItem from "../NavItem";
import Logo from "../Logo";

const items = [0, 1, 2, 3, 4];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Test",
      active: 0,
    };
  }

  toggle() {
    this.setState({ name: this.state.name === "Test" ? "New" : "Test" });
  }

  selectNavItem(index) {
    this.setState({ active: index });
  }

  render() {
    return (
      <div className="header">
        <Link to="/" onClick={() => this.selectNavItem(0)}>
          <Logo />
        </Link>
        <Link to="/dashboard">
          <NavItem
            active={1 === this.state.active}
            onClick={() => this.selectNavItem(1)}
            name="Dashboard"
          />
        </Link>
        <Link to="/sales">
          <NavItem
            active={2 === this.state.active}
            onClick={() => this.selectNavItem(2)}
            name="Sales"
          />
        </Link>
        <Link to="/mobile">
          <NavItem
            active={3 === this.state.active}
            onClick={() => this.selectNavItem(3)}
            name="Mobile"
          />
        </Link>
        <Link to="/settings">
          <NavItem
            active={4 === this.state.active}
            onClick={() => this.selectNavItem(4)}
            name="Settings "
          />
        </Link>
      </div>
    );
  }
}

export default Header;
