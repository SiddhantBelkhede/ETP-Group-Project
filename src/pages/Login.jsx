import React, { useState } from 'react';
import styles from './Login.module.css';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      setLoading(false);
      return;
    }

    // --- Replace this with your actual API call ---
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000)); 

      // Simulate successful login (e.g., check credentials against a database/API)
      // For demonstration, let's assume a hardcoded success:
      if (email === 'test@example.com' && password === 'password') {
        alert('Login Successful!');
        // Call a function passed from the parent component on success
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      setError('An error occurred during login. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
    // ----------------------------------------------
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>My Project Library</h2>
      <p className={styles.subtitle}>Sign in to access your projects</p>
      
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
            aria-label="Email address"
            disabled={loading}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
            aria-label="Password"
            disabled={loading}
          />
        </div>

        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      
      <p className={styles.footerText}>
        Don't have an account? <a href="/register" className={styles.link}>Register</a>
      </p>
    </div>
  );
};

export default Login;