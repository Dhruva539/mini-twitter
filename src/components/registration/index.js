import React from "react";
import { useNavigate } from "react-router-dom";
const intialState = {
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
  email: "",
  contactNumber: ""
};
const register = () => {
  let navigate = useNavigate();
  const [errors, setErrors] = React.useState([]);
  const [userInfo, setUserInfo] = React.useState(intialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const registerUser = () => {
    if (userInfo.password === userInfo.confirmPassword) {
      setErrors(
        errors.push({
          type: "error",
          message: "Confirm password is not matched "
        })
      );
    }
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign Up</h3>
          {errors.map((err) => (
            <div className={`alert alert-${err.type}`}>{err.message}</div>
          ))}
          <div className="mb-3">
            <label className="form-label">First name</label>
            <input
              name="firstName"
              type="text"
              className="form-control"
              placeholder="First name"
              required
              onChange={handleInputChange}
              value={userInfo.firstName}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Last name</label>
            <input
              name="lastName"
              type="text"
              className="form-control"
              placeholder="Last name"
              required
              onChange={handleInputChange}
              value={userInfo.lastName}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              required
              onChange={handleInputChange}
              value={userInfo.email}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              required
              onChange={handleInputChange}
              value={userInfo.password}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Enter Confirm password"
              required
              onChange={handleInputChange}
              value={userInfo.confirmPassword}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              className="form-control"
              placeholder="Enter Contact Number"
              required
              onChange={handleInputChange}
              value={userInfo.contactNumber}
            />
          </div>
          <div className="d-flex justify-content-between">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={registerUser}
            >
              Sign Up
            </button>
            <p className="forgot-password text-right">
              Already registered{" "}
              <span onClick={() => navigate("/login")}>sign in?</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default register;
