import React, { useContext } from 'react'
import { GeneralContext } from '../context/GeneralContext';

const Login = ({ setAuthType }) => {
  const { setEmail, setPassword, login } = useContext(GeneralContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login();
  }

  return (
    <div
      className="login-bg"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif"
      }}
    >
      <div
        className="login-card"
        style={{
          background: "#fff",
          borderRadius: "2rem",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
          padding: "3rem 2.5rem",
          minWidth: 370,
          maxWidth: 400,
          width: "100%",
        }}
      >
        <div className="card-body">
          <h2
            className="card-title text-center mb-4"
            style={{
              fontWeight: 700,
              fontSize: "2.2rem",
              color: "#4f3c8d",
              letterSpacing: "1px"
            }}
          >
            Sign In
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="loginEmail"
                className="form-label"
                style={{
                  fontWeight: 500,
                  fontSize: "1.1rem",
                  color: "#5a5a89"
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="loginEmail"
                placeholder="you@email.com"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                required
                style={{
                  borderRadius: "1rem",
                  padding: "0.9rem 1.2rem",
                  fontSize: "1rem",
                  border: "1.5px solid #e0e0e0",
                  background: "#f7f7fb"
                }}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="loginPassword"
                className="form-label"
                style={{
                  fontWeight: 500,
                  fontSize: "1.1rem",
                  color: "#5a5a89"
                }}
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="loginPassword"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                style={{
                  borderRadius: "1rem",
                  padding: "0.9rem 1.2rem",
                  fontSize: "1rem",
                  border: "1.5px solid #e0e0e0",
                  background: "#f7f7fb"
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{
                background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
                border: "none",
                borderRadius: "1rem",
                fontWeight: 600,
                fontSize: "1.1rem",
                padding: "0.9rem 0",
                letterSpacing: "0.5px",
                boxShadow: "0 2px 8px rgba(118,75,162,0.08)"
              }}
            >
              Login
            </button>
          </form>
          <div style={{ margin: "2rem 0 1rem 0", textAlign: "center" }}>
            <span style={{ color: "#b0aac0", fontSize: "0.95rem" }}>────────  or  ────────</span>
          </div>
          <div className="text-center">
            <small style={{ fontSize: "1rem", color: "#5a5a89" }}>
              New here?{' '}
              <span
                style={{
                  color: "#764ba2",
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontWeight: 600
                }}
                onClick={() => setAuthType('register')}
              >
                Create an account
              </span>
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login