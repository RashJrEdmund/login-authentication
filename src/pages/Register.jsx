/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register({ setCredentials }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [password, setPassword] = React.useState({ pass: '', confirm: '' });
  const navigate = useNavigate();

  const proceedToNext = () => {
    navigate('/login');
  };

  const handleSubmit = (firstName, lastName, email, phone, passwords) => {
    if (passwords.pass === passwords.confirm) {
      setCredentials({ firstName, lastName, email, phone, password });
      proceedToNext();
    }
    setIsLoading(true);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        proceedToNext();
        handleSubmit(
          e.target.first_name.value,
          e.target.last_name.value,
          e.target.email.value,
          e.target.phone.value,
          {
            pass: e.target.create_password.value,
            confirm: e.target.confirm_password.value,
          }
        );
      }}
    >
      <h1>Create New account</h1>
      <p>{isLoading ? 'Loadin...' : ''}</p>
      <input type="text" name="first_name" placeholder="First Name" />
      <input type="text" name="last_name" placeholder="Last Name" />
      <input type="email" name="email" placeholder="Email" required />
      <input type="text" name="phone" placeholder="phone" />
      <input
        type="password"
        name="create_password"
        placeholder="Create password"
        onChange={(e) =>
          setPassword(() => ({ ...password, pass: e.target.value }))
        }
        required
      />
      <input
        type="password"
        name="confirm_password"
        placeholder="confirm password"
        style={{
          border:
            password.pass === password.confirm
              ? '1px solid blue'
              : '1px solid red',
        }}
        required
        onChange={(e) => {
          setPassword({ ...password, confirm: e.target.value });
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
