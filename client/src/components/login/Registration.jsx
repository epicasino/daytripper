import React, { useEffect, useState } from 'react';
import { ADD_USER } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';

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
  }

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
      <div className="bg-cover bg-no-repeat object-cover max-w max-h bg-[url('https://i.imgur.com/MJR2Bcc.png')] flex flex-col items-center justify-center h-full">
        <div className="border-box rounded-lg h-2/5 w-2/4 p-4 border-4 bg-green bg-opacity-70">
          {/* Ray: Box that appears if user has wrong user/pass for registering */}
          {regError && (
            <div className="errorBox">
              <button
                className="text-xl px-1 text-center w-full"
                onClick={closeError}
              >
                Something went wrong with registering! Check your email and confirm your password.
              </button>
            </div>
          )}
          <form
            className="font-kawaii text-center m-6 text-2xl object-contain"
            onSubmit={handleSubmit}
          >
            <label className="form__label text-white" htmlFor="userName">
              Username
            </label>
            <input
              className="form__input ml-1"
              type="text"
              value={userName}
              onChange={(e) => handleInputChange(e)}
              id="regUserName"
              placeholder="userName"
            />

            <div className="email">
              <label className="form__label text-white ml-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="regEmail"
                className="form__input mt-2 ml-1"
                value={email}
                onChange={(e) => handleInputChange(e)}
                placeholder="Email"
              />
            </div>

            <div className="password">
              <label className="form__label text-white" htmlFor="password">
                Password
              </label>
              <input
                className="form__input m-2 ml-1"
                type="password"
                id="regPassword"
                value={password}
                onChange={(e) => handleInputChange(e)}
                placeholder="Password"
              />
            </div>

            <div className="confirm-password">
              <label
                className="form__label text-white"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="form__input ml-1"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => handleInputChange(e)}
                placeholder="Confirm Password"
              />
            </div>
            <button
              onSubmit={handleSubmit}
              type="submit"
              className="bg-coral text-white rounded-full py-2 px-4 border hover:border-transparent hover:text-terracotta mt-5"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
