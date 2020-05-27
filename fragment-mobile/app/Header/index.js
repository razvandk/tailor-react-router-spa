import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import "./styles.scss";

const Header = ({ params: { subscriptionId } }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios("http://localhost:5017/msisdn/" + subscriptionId)
      .then((res) => res.data)
      .then((data) => setData(data));
  }, [subscriptionId]);

  const { msisdn, subscriptionPlan } = data;

  return !msisdn ? null : (
    <div className="mobile-header">
      <h1>Mobile Tribe</h1>
      <h2>{msisdn}</h2>
      <h2>{subscriptionPlan}</h2>
    </div>
  );
};

export default withRouter(Header);
