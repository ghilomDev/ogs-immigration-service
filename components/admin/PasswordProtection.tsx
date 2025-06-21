'use client';

import { useState } from 'react';
import { setCookie } from 'cookies-next';

interface PasswordProtectionProps {
  children: React.ReactNode;
  password: string;
  isAuthenticated: boolean;
}

export default function PasswordProtection({
  children,
  password,
  isAuthenticated,
}: PasswordProtectionProps) {
  const [inputPassword, setInputPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(isAuthenticated);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === password) {
      setAuthenticated(true);
      setError(false);
      // Set cookie to expire in 1 year
      setCookie('admin-auth', 'true', { maxAge: 60 * 60 * 24 * 365, path: '/admin' });
    } else {
      setError(true);
    }
  };

  if (authenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Admin Access</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={inputPassword}
              onChange={e => setInputPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter admin password"
              required
            />
          </div>

          {error && (
            <div className="text-sm text-red-600">Incorrect password. Please try again.</div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
          >
            Access Admin Panel
          </button>
        </form>
      </div>
    </div>
  );
}
