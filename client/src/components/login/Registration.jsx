import { useEffect, useState } from 'react';
import { ADD_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

export default function RegistrationForm() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [regError, setRegError] = useState(false);

  const [register, { error }] = useMutation(ADD_USER);

  useEffect(() => {
    if (error) {
      setRegError(true);
    } else {
      setRegError(false);
    }
  }, [error]);

  const closeError = () => {
    if (regError) {
      setRegError(false);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === 'regUserName') {
      setUserName(value);
    }
    if (id === 'regEmail') {
      setEmail(value);
    }
    if (id === 'regPassword') {
      setPassword(value);
    }
    if (id === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(userName, email, password, confirmPassword);

    try {
      if (password === confirmPassword) {
        const { data } = await register({
          variables: { username: userName, email: email, password: password },
        });
        console.log(data);
        Auth.login(data.addUser.token);
      }
      throw 'Password Does Not Match!';
    } catch (error) {
      console.error(error);
      setRegError(true);
    }

    setUserName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <section className="bg-sand h-screen">
      <header className="text-center font-kawaii text-3xl bg-gradient-to-r text-white from-terracotta to-green">
        Register Now
      </header>
      <div className="bg-cover bg-no-repeat object-cover bg-[url('https://i.imgur.com/MJR2Bcc.png')] flex flex-col items-center justify-center h-full">
        <div className="border-box rounded-lg h-fit w-fit p-4 border-4 bg-green bg-opacity-70">
          {/* Ray: Box that appears if user has wrong user/pass for registering */}
          {regError && (
            <div className="errorBox">
              <button
                className="text-xl px-1 text-center w-full font-kawaii text-white"
                onClick={closeError}
              >
                Something went wrong with registering! Check your email and
                confirm your password.
              </button>
            </div>
          )}
          <form
            className="font-kawaii text-2xl flex flex-col px-5"
            onSubmit={handleSubmit}
          >
            <label className="text-white" htmlFor="userName">
              Username
            </label>
            <input
              className="px-3"
              type="text"
              value={userName}
              onChange={(e) => handleInputChange(e)}
              id="regUserName"
              placeholder="Username"
            />

            <label className="text-white" htmlFor="email">
              Email
            </label>
            <input
              className="px-3"
              type="email"
              id="regEmail"
              value={email}
              onChange={(e) => handleInputChange(e)}
              placeholder="Email"
            />

            <label className="text-white" htmlFor="password">
              Password
            </label>
            <input
              className="px-3"
              type="password"
              id="regPassword"
              value={password}
              onChange={(e) => handleInputChange(e)}
              placeholder="Password"
            />

            <label className="text-white" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="px-3"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => handleInputChange(e)}
              placeholder="Confirm Password"
            />
            <div className='flex justify-between items-end'>
              <button
                onSubmit={handleSubmit}
                type="submit"
                className="bg-coral text-white rounded-full py-2 px-5 my-4 border hover:border-transparent hover:text-terracotta"
              >
                Register
              </button>
              <Link to="/login">
                <button className="text-white rounded-full py-2 px-5 my-4 hover:underline hover:text-terracotta text-base">
                  Need to Login?
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
