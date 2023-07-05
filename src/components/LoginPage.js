import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic or API call here
    // Check user credentials and set loggedIn state accordingly

    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const renderCredentials = () => {
    // Determine the user's role based on their selection during signup or login
    const userRole = ''; // Set the user's role here (buyer or seller)

    let roleCredentials;
    if (userRole === 'buyer') {
      roleCredentials = <p>Buyer's credentials</p>;
    } else if (userRole === 'seller') {
      roleCredentials = <p>Seller's credentials</p>;
    }

    return (
      <div className="credentials">
        <h2>Welcome!</h2>
        {roleCredentials}
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  };

  const renderLoginForm = () => (
    <form onSubmit={handleLogin} className="login-form">
      <h2>Login</h2>
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
      <button type="submit">Login</button>
    </form>
  );

  return (
    <div className="login-page">
      {loggedIn ? (
        renderCredentials()
      ) : (
        renderLoginForm()
      )}
    </div>
  );
};

export default LoginPage;
