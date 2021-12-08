import React from "react";
import { useNavigate } from "react-router-dom";

const login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign In</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter User Id"
              onChange={(e) => setUserId(e.target.value)}
              value={userId}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
            <p className="forgot-password text-right">
              Forgot{" "}
              <span onClick={() => navigate("/forgot-password")}>sign in?</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
