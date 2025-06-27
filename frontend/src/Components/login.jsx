import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      setLoading(false);

      if (!response.ok) {
        setError(data.message || 'Login failed');
        return;
      }

      localStorage.setItem('token', data.token);
      navigate('/landingpage.jsx');
    } catch {
      setLoading(false);
      setError('Something went wrong. Please try again.');
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-600 flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl px-10 py-12 w-full max-w-md text-gray-800">
        <h2 className="text-4xl font-extrabold mb-4 text-center text-blue-800">Welcome Back</h2>
        <p className="text-sm text-center text-gray-500 mb-8">
          Login to your SMART DHAN account
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full mb-6 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          {error && <p className="text-red-600 mt-4 text-center font-medium">{error}</p>}

          <p className="text-sm text-center mt-6">
            Don’t have an account?{' '}
            <span
              onClick={() => navigate('/signup')}
              className="text-blue-700 font-semibold cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
