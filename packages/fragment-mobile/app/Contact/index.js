import React from "react";
import cx from "classnames";
import "./styles.scss";

const Contact = ({ gender, name: { title, first, last }, email }) => (
  <div className="contact">
    <div
      className={cx("contact-details", {
        "contact-details--female": gender === "female",
      })}
    >
      <h3>
        {title} {first} {last}
      </h3>
      <p>{email}</p>
    </div>
  </div>
);

export default Contact;
