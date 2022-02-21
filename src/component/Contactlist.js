import React from "react";
import { Link } from "react-router-dom";
import Contactcard from "./Contactcard";
const Contactlist = (props) => {
  console.log(props);
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactlist = props.contacts.map((contact) => {
    return (
      <Contactcard
        contact={contact}
        clickHandler={deleteContactHandler}
        updatecontact={props.updateContactHandler}
      ></Contactcard>
    );
  });
  return (
    <div className="main" style={{ marginTop: "100px" }}>
      <h2>contact list</h2>
      <div className="ui celled list">{renderContactlist}</div>
      <Link to="/add">
        <button className="ui button blue right">ADD CONTACT</button>
      </Link>
    </div>
  );
};

export default Contactlist;
