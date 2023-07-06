import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = ({ setUser }) => {
  // const navigate = useNavigate(); // React Router's useHistory hook
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
        role,
        phone,
      }),
    })
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        } else {
          const data = await response.json();
          throw new Error(data.error);
        }
      })
      .then((user) => {
        setUser(user);
        setError(""); // Reset the error state if login is successful
        // if (user.role.toLowerCase() === "seller") {
        //   navigate("/seller");
        // } else if (user.role.toLowerCase() === "buyer") {
        //   navigate("/buyer"); // Add a forward slash before "buyer"
        // }
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Sign up</h2>
      {error && <p>{error}</p>}
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="role">User Type:</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpPage;