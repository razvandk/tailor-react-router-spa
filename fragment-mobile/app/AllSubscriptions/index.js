import React from "react";
import { Link } from "react-router";
import "./styles.scss";

const AllSubscriptions = () => (
  <div className="mobile-subscriptions">
    <Link to="/mobile/123456">Mobile (40 40 40 40)</Link>
    <Link to="/mobile/987654">Mobile (50 50 50 50)</Link>
  </div>
);

export default AllSubscriptions;
