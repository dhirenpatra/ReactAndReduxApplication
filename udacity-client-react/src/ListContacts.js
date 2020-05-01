import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ListContacts extends Component {
  state = {
    query: "",
  };

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    removeContact: PropTypes.func.isRequired,
  };

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim(),
    }));
  };

  render() {
    const { query } = this.state;
    const { contacts, removeContact } = this.props;

    const matchedContacts =
      query === ""
        ? contacts
        : contacts.filter((contact) =>
            contact.name.toLowerCase().includes(query.toLowerCase())
          );

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search Here.."
            value={this.state.query}
            onChange={(e) => this.updateQuery(e.target.value)}
          />
          <Link to="/create" className="add-contact"></Link>
        </div>

        {matchedContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>
              {" "}
              Now Showing {matchedContacts.length} of {contacts.length}{" "}
            </span>
            <button onClick={() => this.updateQuery("")}>Show All</button>
          </div>
        )}

        <ol className="contact-list">
          {matchedContacts.map((contact) => (
            <li key={contact.id} className="contact-list-item">
              <div
                className="contact-avatar"
                style={{
                  backgroundImage: `url(${contact.avatarURL})`,
                }}
              ></div>
              <div className="contact-details">
                <h3>
                  <p> {contact.name} </p>
                </h3>
                <p> {contact.handle} </p>
              </div>
              <button
                onClick={() => removeContact(contact.id)}
                className="contact-remove"
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListContacts;
