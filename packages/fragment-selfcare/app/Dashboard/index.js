import React, { useState, useEffect } from "react";
import axios from "axios";
import Contact from "../Contact";
import "./styles.scss";

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then(({ data: { results } }) => setContacts(results));
  }, []);

  return (
    <div className="contacts">
      {contacts.map((contact) => {
        return <Contact key={contact.id.value} {...contact} />;
      })}
    </div>
  );
};

export default Dashboard;
