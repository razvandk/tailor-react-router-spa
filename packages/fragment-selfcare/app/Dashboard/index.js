import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Contact from "../Contact";
import "./styles.scss";

class Dashboard extends Component {
  componentWillMount() {
    this.fetchContacts();
  }

  fetchContacts() {
    const { setContacts } = this.props;

    axios.get("https://randomuser.me/api/?results=20").then((response) => {
      setContacts(response.data.results);
    });
  }

  render() {
    const { contacts } = this.props;

    return (
      <div className="contacts">
        {contacts.length > 0 &&
          contacts.map((contact) => {
            return <Contact key={contact.id.value} {...contact} />;
          })}
      </div>
    );
  }
}

const mapProps = ({ contacts }) => {
  return { contacts };
};

const mapActions = {
  setContacts: (contacts) => ({ type: "SET_CONTACTS", contacts }),
};

export default connect(mapProps, mapActions)(Dashboard);
