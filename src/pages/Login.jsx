/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function Login({ credentials }) {
  return (
    <div>
      <form>
        <h1>Login to your account</h1>
        <input
          type="email"
          defaultValue={credentials.email}
          placeholder="Email"
          required
        />
        <input type="password" placeholder="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
