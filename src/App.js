import "./App.css";
import Header from "./components/header/Header";
import "./styles/main.scss";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment, useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [contactList, setContactList] = useState([]);

  const validateEmail = () => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const validation = () => {
    if (firstName == "" && lastName == "" && phoneNo == "" && email == "") {
      alert("All Fields are mandatory!");
    } else if (firstName.length > 50) {
      alert("FirstName must be less than 50 characters");
    } else if (lastName.length > 50) {
      alert("LastName must be less than 50 characters");
    } else if (phoneNo.length != 10) {
      alert("Invalid Phone No");
    } else if (!validateEmail(email)) {
      alert("Invalid Email ID");
    } else {
      return true;
    }
    return false;
  };

  const submitClickHandler = (event) => {
    event.preventDefault();
    if (validation()) {
      let list = [...contactList];

      list = [
        ...list,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNo: phoneNo,
        },
      ];
      setContactList(list);
      setEmail("");
      setFirstName("");
      setLastName("");
      setPhoneNo("");
    }
  };
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contacts">
            <Contact
              contactList={contactList}
              validation={validation}
              firstName={firstName}
              lastName={lastName}
              email={email}
              phoneNo={phoneNo}
              setLastName={setLastName}
              setFirstName={setFirstName}
              setPhoneNo={setPhoneNo}
              setEmail={setEmail}
              setContactList={setContactList}
              submitClickHandler={submitClickHandler}
            />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
