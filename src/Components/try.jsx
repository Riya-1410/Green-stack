import React from 'react';
import { useAppContext } from '../Context/AppContext';

const Login = () => {
  const { setShowUserLogin } = useAppContext();
  const [state, setState] = React.useState('login');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div
      onClick={() => setShowUserLogin(false)}
      className="fixed inset-0 z-30 flex items-center justify-center bg-black/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-8 rounded-xl shadow-lg w-[90%] max-w-md text-gray-700"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          <span className="text-primary">User</span> {state === 'login' ? 'Login' : 'Sign Up'}
        </h2>

        {state === 'register' && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dull text-white py-2 rounded-lg transition-all"
        >
          {state === 'register' ? 'Create Account' : 'Login'}
        </button>

        <p className="mt-4 text-sm text-center">
          {state === 'register' ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span
            onClick={() => setState(state === 'login' ? 'register' : 'login')}
            className="text-primary hover:text-primary-dull cursor-pointer font-medium"
          >
            Click here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
