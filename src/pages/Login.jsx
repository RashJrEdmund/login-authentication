import React from 'react';

export default function Login() {
  return (
    <div>
      <form>
        <h1>Login to your account</h1>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Create password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
