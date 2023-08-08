import { useEffect, useState } from 'react';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import { Link } from 'react-router-dom';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const [login, { error }] = useMutation(LOGIN_USER);

  useEffect(() => {
    if (error) {
      setLoginError(true);
    } else {
      setLoginError(false);
    }
  }, [error]);

  const closeError = () => {
    if (loginError) {
      setLoginError(false);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // onLogin({ username, password });
    if (username && password) {
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
    }
  };

  return (
    <section className="h-screen">
      <header className="text-center font-kawaii text-white text-3xl p-1 bg-gradient-to-r from-terracotta to-green">
        Login Page</header>
      <div className="bg-cover bg-no-repeat object-cover max-w max-h bg-[url('https://i.imgur.com/RYdZHkL.png')] flex flex-col items-center justify-center h-full">
        <div className="border-box rounded-lg h-2/5 w-2/4 p-4 border-4 bg-green bg-opacity-70">
          {/* Ray: Box that appears if user has wrong user/pass */}
          {loginError && (
            <div className="errorBox">
              <button
                className="text-xl p-1 text-center w-full"
                onClick={closeError}
              >
                Wrong Username or Password!
              </button>
            </div>
          )}
          <div className=" font-kawaii text-center m-6 text-2xl object-contain">
            <form onSubmit={handleSubmit}>
              <label className="text-white text-2xl">
                Username:
                <input
                  className="text-black rounded-sm ml-2"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <br />
              <label className="text-white text-2xl">
                Password:
                <input
                  className="text-black rounded-sm ml-3"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <br />
              <button
                type="submit"
                className="bg-coral text-white rounded-full py-2 px-4 border hover:border-transparent hover:text-terracotta mt-5 "
              >
                Login
              </button>
            </form>
            <Link to="/register">
              <button
                type="submit"
                className="bg-coral text-white rounded-full py-2 px-4 border hover:border-transparent hover:text-terracotta mt-5 "
              >
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
