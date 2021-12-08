import FeedContainer from "./container/FeeContainer";
import {
  Link,
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./components/login/index.js";
import Register from "./components/registration/index.js";
import ForgotPassword from "./components/login/forgotPassword";
import React from "react";

const app = () => {
  // const isAuthenticated = localStorage.getItem("isAuthenticated");
  const isAuthenticated = false;
  const navMenu = () => {
    return isAuthenticated ? (
      <>
        <li className="nav-item">
          <Link className="nav-link" to={"/tweets"}>
            Tweets
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/all-users"}>
            All Users
          </Link>
        </li>
        <li className="nav-item nav-link">Logout</li>
      </>
    ) : (
      <>
        {" "}
        <li className="nav-item">
          <Link className="nav-link" to={"/sign-in"}>
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/sign-up"}>
            Register
          </Link>
        </li>
      </>
    );
  };
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              Mini Twitter
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">{navMenu()}</ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/tweets" exact element={<FeedContainer />} />
          <Route path="/all-users" exact element={() => <div>All Users</div>} />
        </Routes>
        )
      </div>
    </Router>
  );
};

export default app;
