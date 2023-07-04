import React, { useState } from 'react';

const SignUpPage = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic or API call here

    // Reset form fields
    setFirstName('');
    setMiddleName('');
    setLastName('');
    setUserType('');
    setEmail('');
    setPassword('');
    setSignedUp(true);
  };

  const renderSignUpForm = () => (
    <form onSubmit={handleSubmit} className="signup-form">
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Middle Name:
        <input
          type="text"
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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
