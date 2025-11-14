import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../utils/auth";

export default function Login() {
  const [form, setForm] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    try {
      login(form);
      navigate("/events", { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="form">
      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Username or Email</label>
          <input
            value={form.usernameOrEmail}
            onChange={(e) =>
              setForm({ ...form, usernameOrEmail: e.target.value })
            }
            required
          />
        </div>

        <div className="field">
          <label>Password</label>
          <input
            type="password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>

      <p style={{ marginTop: 10 }}>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}
