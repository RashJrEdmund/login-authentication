import React from 'react';

export default function Register() {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <form>
      <h1>Please Create your account</h1>
      <p>{isLoading ? 'Loadin...' : ''}</p>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Email" required />
      <input type="text" placeholder="phone" />
      <input type="password" placeholder="Create password" required />
      <input type="password" placeholder="reEnter password" required />
      <button type="submit">Submit</button>
    </form>
  );
}
