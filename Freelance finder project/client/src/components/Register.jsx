import React, { useContext } from 'react'
import { GeneralContext } from '../context/GeneralContext';

const Register = ({ setAuthType }) => {
  const { setUsername, setEmail, setPassword, setUsertype, register } = useContext(GeneralContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    await register();
  }

  return (
    <form
      className="authForm"
      style={{
        maxWidth: 420,
        margin: "60px auto",
        padding: 40,
        borderRadius: 24,
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        background: "linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)",
        fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
        border: "1px solid #e0e7ff"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: 32,
          fontWeight: 800,
          fontSize: 32,
          letterSpacing: 1,
          color: "#3730a3",
          fontFamily: "'Montserrat', 'Inter', Arial, sans-serif"
        }}
      >
        Register Account
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <label style={{ fontWeight: 600, fontSize: 16, color: "#3730a3" }}>
          Username
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
            style={{
              marginTop: 8,
              padding: "14px 12px",
              borderRadius: 10,
              border: "1.5px solid #c7d2fe",
              fontSize: 16,
              background: "#fff",
              fontFamily: "inherit",
              outline: "none",
              transition: "border 0.2s"
            }}
          />
        </label>
        <label style={{ fontWeight: 600, fontSize: 16, color: "#3730a3" }}>
          Email Address
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
            style={{
              marginTop: 8,
              padding: "14px 12px",
              borderRadius: 10,
              border: "1.5px solid #c7d2fe",
              fontSize: 16,
              background: "#fff",
              fontFamily: "inherit",
              outline: "none",
              transition: "border 0.2s"
            }}
          />
        </label>
        <label style={{ fontWeight: 600, fontSize: 16, color: "#3730a3" }}>
          Password
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            style={{
              marginTop: 8,
              padding: "14px 12px",
              borderRadius: 10,
              border: "1.5px solid #c7d2fe",
              fontSize: 16,
              background: "#fff",
              fontFamily: "inherit",
              outline: "none",
              transition: "border 0.2s"
            }}
          />
        </label>
        <label style={{ fontWeight: 600, fontSize: 16, color: "#3730a3" }}>
          User Type
          <select
            className="form-select"
            onChange={(e) => setUsertype(e.target.value)}
            style={{
              marginTop: 8,
              padding: "14px 12px",
              borderRadius: 10,
              border: "1.5px solid #c7d2fe",
              fontSize: 16,
              background: "#fff",
              fontFamily: "inherit",
              outline: "none",
              transition: "border 0.2s"
            }}
          >
            <option value="">Select user type</option>
            <option value="freelancer">Freelancer</option>
            <option value="client">Client</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <button
          className="btn btn-primary"
          onClick={handleRegister}
          style={{
            marginTop: 12,
            padding: "14px 0",
            borderRadius: 10,
            fontWeight: 700,
            fontSize: 18,
            background: "linear-gradient(90deg, #6366f1 60%, #3730a3 100%)",
            color: "#fff",
            border: "none",
            boxShadow: "0 2px 8px rgba(99,102,241,0.10)",
            cursor: "pointer",
            letterSpacing: 0.5,
            transition: "background 0.2s"
          }}
        >
          Sign Up
        </button>
      </div>
      <p style={{ textAlign: "center", marginTop: 32, fontSize: 15, color: "#6366f1" }}>
        Already registered?{" "}
        <span
          onClick={() => setAuthType('login')}
          style={{
            color: "#3730a3",
            cursor: "pointer",
            textDecoration: "underline",
            fontWeight: 700
          }}
        >
          Login
        </span>
      </p>
    </form>
  )
}

export default Register