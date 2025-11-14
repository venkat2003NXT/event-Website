// simple localStorage based auth utilities

const USERS_KEY = "ev_users_v1";
const TOKEN_KEY = "ev_token_v1";

export function signup({ email, username, password }) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  if (users.find(u => u.email === email || u.username === username)) {
    throw new Error("User already exists");
  }
  users.push({ email, username, password });
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

  // auto-login after signup
  const token = btoa(`${username}:${Date.now()}`);
  localStorage.setItem(TOKEN_KEY, JSON.stringify({ token, username }));
  return { token, username };
}

export function login({ usernameOrEmail, password }) {
  const users = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  const user = users.find(
    u => (u.email === usernameOrEmail || u.username === usernameOrEmail) && u.password === password
  );
  if (!user) throw new Error("Invalid credentials");

  const token = btoa(`${user.username}:${Date.now()}`);
  localStorage.setItem(TOKEN_KEY, JSON.stringify({ token, username: user.username }));
  return { token, username: user.username };
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

export function getCurrentUser() {
  const t = JSON.parse(localStorage.getItem(TOKEN_KEY) || "null");
  return t ? t.username : null;
}

export function isAuthenticated() {
  return !!localStorage.getItem(TOKEN_KEY);
}
