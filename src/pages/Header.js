import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Header = ({ logoutUser, setLogoutUser }) => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    hydrateStateWithLocalStorage();
  }, [logoutUser]);

  const logout = () => {
    localStorage.removeItem("login");
    setLogoutUser(true);
  };

  const hydrateStateWithLocalStorage = () => {
    if (localStorage.hasOwnProperty("login")) {
      let value = localStorage.getItem("login");
      try {
        value = JSON.parse(value);
        console.log("value", value);
        setLogin(value);
      } catch (e) {
        setLogin("");
      }
      console.log("logoutUser", logoutUser);
      console.log("login", login);
    }
  };
  
  return (
    <div>
      <header style={{ marginTop: "20px" }}>
      {!logoutUser && login && login.userLogin ? (
          <Button
            style={{ width: "100px" }}
            onClick={logout}
          >
            Logout
          </Button>
        ) : (
          <Link to="/login">
            <Button
              style={{ width: "100px" }}
            >
              Login
            </Button>
          </Link>
        )}
      </header>
    </div>
  );
};

export default Header;
