import { useState } from 'react';

interface User {
  uid: string;
  name: string;
}

const User = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: 'abc123',
      name: 'John Doe',
    });
  };

  return (
    <div className="mt-5">
      <h3>User: useState</h3>
      <button onClick={login} className="btn btn-outline-primary mt-2">
        Login
      </button>
      <div className="mt-2">
        {!user ? (
          <span>There is no user!</span>
        ) : (
          <span>{JSON.stringify(user)}</span>
        )}
      </div>
    </div>
  );
};

export default User;
