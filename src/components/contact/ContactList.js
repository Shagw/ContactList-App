import React, { useState } from "react";

const ContactList = (props) => {
  const { contactList } = props;
  return (
    <>
      <ul className="contactList">
        <h3>Contact List</h3>
        {contactList.length !== 0 ? (
          <table className="table" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email Id</th>
                <th>Phone No</th>
              </tr>
            </thead>
            {contactList.map((data, index) => (
              <tbody key={index}>
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.email}</td>
                  <td>{data.phoneNo}</td>
                </tr>
              </tbody>
            ))}
          </table>
        ) : (
          <div style={{ textAlign: "center" }}>No Contact Found!</div>
        )}
      </ul>
    </>
  );
};

export default ContactList;
