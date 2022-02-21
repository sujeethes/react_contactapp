import React from "react";
import { Link } from "react-router-dom";
const Contactdetails = (props) => {
  console.log(props);
  const { id, name, email } = props.location.state.contact;
  return (
    <div className="main">
      <div
        className="ui card centered"
        style={{ marginTop: "100px", padding: "10px" }}
      >
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>

        <Link
          style={{ marginRight: "10px" }}
          to={{
            pathname: `/update/${id}`,
            state: { contact: props.location.state.contact },
            updatecontact: props.location.updatecontact,
          }}
        >
          <button className="ui button blue" style={{ margin: "1px" }}>
            UPDATE
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Contactdetails;
