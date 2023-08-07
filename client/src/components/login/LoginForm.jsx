import { useState } from 'react';
import Auth from '../../utils/auth';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // onLogin({ username, password });
  }

  return (
    <section className='bg-green h-screen  '>
      <header className="text-center font-kawaii text-white text-3xl bg-gradient-to-r from-terracotta via-dirt to-sage">Login Page</header>
        <div className="font-kawaii bg-green">
          <div className="card ">
            

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
              <button type="submit" className="bg-gradient-to-r from-coral via-sage to-dirt text-white rounded-full py-2 px-4 border hover:border-transparent hover:text-terracotta mt-5 ">Login</button>
            </form>
          </div>
        </div>
    </section>
  );
};

export default LoginForm;