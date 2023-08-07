import { useState } from 'react';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [login, { error }] = useMutation(LOGIN_USER);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // onLogin({ username, password });

    try {
      const { data } = await login({
        variables: { username: username, password: password },
      });

      console.log(data);
      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
    }

    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
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
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
