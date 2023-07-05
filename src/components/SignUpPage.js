import React, { useState } from 'react';

const SignUpPage = () => {
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
  };

  const renderSignUpForm = () => (
    <form onSubmit={handleSubmit} className="signup-form">
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
    </form>
  );

  const renderThankYouMessage = () => (
    <div className="thank-you-message">
      <h2>Thank you for signing up!</h2>
      <p>Your account has been created.</p>
      <button onClick={() => setSignedUp(false)}>Login</button>
    </div>
  );

  return (
    <div className="signup-page">
      {signedUp ? renderThankYouMessage() : renderSignUpForm()}
    </div>
  );
};

export default SignUpPage;
