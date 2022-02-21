import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Addcontact from "./Addcontact";
import Contactlist from "./Contactlist";
import { uuid } from "uuidv4";
import Contactdetails from "./Contactdetails";
import Updatecontact from "./Updatecontact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  const removeContactHandler = (id) => {
    const newContactlist = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactlist);
  };
  const updateContactHandler = (update) => {
    const newContactlist = contacts.map((contact) => {
      if (contact.id == update.id) {
        contact.name = update.name;
        contact.email = update.email;
      }
      return contact;
    });
    setContacts(newContactlist);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) {
      setContacts(retriveContacts);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Contactlist
                {...props}
                contacts={contacts}
                getContactId={removeContactHandler}
                updateContactHandler={updateContactHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <Addcontact {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route path="/contact/:id" component={Contactdetails} />
          <Route path="/update/:id" component={Updatecontact} />
          // {/* <Addcontact addContactHandler={addContactHandler}/> */}
          //{" "}
          {/* <Contactlist contacts={contacts} getContactId={removeContactHandler}/>   */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
