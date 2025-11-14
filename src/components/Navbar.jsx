import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const username = getCurrentUser();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="navbar container">
      <div className="logo">Evently</div>

      <div>
        {username ? (
          <>
            <span style={{ marginRight: 12 }}>Hi, {username}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ marginRight: 12 }}>
              Login
            </Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </div>
  );
}
