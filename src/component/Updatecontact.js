import React from "react";
class Updatecontact extends React.Component {
  state = {
    id: this.props.location.state.contact.id,
    name: this.props.location.state.contact.name,
    email: this.props.location.state.contact.email,
  };
  updated = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("all imp");
      return;
    }
    this.props.location.updatecontact(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="ui main">
        <h2>UPDATE CONTACT</h2>
        <form className="ui form" onSubmit={this.updated}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">UPDATE</button>
        </form>
      </div>
      // <div style={{marginTop:"100px"}}> <button className="ui button blue">UPDATE</button></div>
    );
  }
}
export default Updatecontact;
