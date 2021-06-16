import React, { useState } from "react";
import ContactList from "./ContactList";

const Contact = (props) => {
  const {
    firstName,
    lastName,
    email,
    phoneNo,
    validation,
    contactList,
    setContactList,
    setEmail,
    setFirstName,
    setLastName,
    setPhoneNo,
    submitClickHandler,
  } = props;

  return (
    <div>
      <form className="form" onSubmit={submitClickHandler}>
        <h3> Submit your Contact details here.</h3>
        <div>
          <label>FirstName</label>
          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div>
          <label>LastName</label>
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div>
          <label>Mobile</label>
          <input
            type="number"
            value={phoneNo}
            onChange={(event) => setPhoneNo(event.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
      <ContactList contactList={contactList} />
    </div>
  );
};

export default Contact;
