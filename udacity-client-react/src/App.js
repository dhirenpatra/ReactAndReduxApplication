import React, { Component } from "react";
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact";
import { getAll, remove, create } from "./utils/ContactsAPI";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    contacts: [],
  };

  componentDidMount = () => {
    getAll()
      .then((contacts) => {
        this.setState({
          contacts,
        });
      })
      .catch((err) => console.log(err));
  };

  removeContact = (id) => {
    console.log("id", id);
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => c.id !== id),
    }));
    remove(id);
  };

  onAddUser = (newContact) => {
    create(newContact)
      .then((contact) => {
        this.setState((currentState) => ({
          contacts: [...currentState.contacts, contact],
        }));
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <ListContacts
              contacts={this.state.contacts}
              removeContact={this.removeContact}
            />
          )}
        />
        <Route
          path="/create"
          render={({ history }) => (
            <CreateContact
              onAddUser={(contact) => {
                this.onAddUser(contact);
                history.push("/");
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
