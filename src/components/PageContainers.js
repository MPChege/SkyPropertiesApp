import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url('https://images.unsplash.com/photo-1455593984172-9f753a2e1ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.7;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const LoginForm = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
`;

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

  return (
    <PageContainer>
      <BackgroundImage />
      <ContentWrapper>
        {loggedIn ? (
          renderCredentials()
        ) : (
          <LoginForm onSubmit={handleLogin}>
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
          </LoginForm>
        )}
      </ContentWrapper>
    </PageContainer>
  );
};

const SignUpForm = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
`;

const SignUpPage = () => {
  const navigate = useNavigate(); // React Router's useHistory hook

  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic or API call here

    // Reset form fields
    setUsername('');
    setPhoneNumber('');
    setUserType('');
    setEmail('');
    setPassword('');
    setSignedUp(true);

    // Redirect to login page
    navigate('/login'); // Replace '/login' with the appropriate route for your login page
  };

  const renderSignUpForm = () => (
    <SignUpForm onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <br />
      <label>
        User Type:
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="">Select...</option>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
      </label>
      <br />
      {userType && (
        <>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
        </>
      )}
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </SignUpForm>
  );

  const renderThankYouMessage = () => (
    <div className="thank-you-message">
      <h2>Thank you for signing up!</h2>
      <p>Your account has been created.</p>
      <button onClick={() => setSignedUp(false)}>Login</button>
    </div>
  );

  return (
    <PageContainer>
      <BackgroundImage />
      <ContentWrapper>
        {signedUp ? renderThankYouMessage() : renderSignUpForm()}
      </ContentWrapper>
    </PageContainer>
  );
};