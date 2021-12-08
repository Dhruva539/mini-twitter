import React from "react";

const forgotPassword = () => {
  const [email, setEmail] = React.useState("");
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };
  const sendConfirmation = () => {};
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              required
              onChange={handleInputChange}
              value={email}
            />
          </div>
          <button className="btn btn-dark" onClick={sendConfirmation}>
            {"Send Confirmation"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default forgotPassword;
