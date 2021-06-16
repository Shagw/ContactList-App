import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3 style={{ margin: "10px 80px" }}>
        If you have a query or complaint about our services, please contact us
        using the appropriate contact details below.
      </h3>
      <div className="contact-details">
        <div className="address">
          <h4>Our Address</h4>
          <p>121, Clear Water Bay Road Clear Water Bay, Kowloon HONG KONG</p>
        </div>
        <div>
          <h4>Email Id : shashanka141@gmail.com</h4>
          <h4>Phone No : 1234567890</h4>
        </div>
      </div>
      <h3 style={{ margin: "10px 80px" }}>
        or you can submit your details on <Link to="./contacts">contact</Link>{" "}
        page. We will contact you
      </h3>
    </div>
  );
};

export default Home;
