import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(true);
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const validate = () => {
    if (isRegister && !user.name.trim()) {
      return "Name is required";
    }
    if (!emailRegex.test(user.email)) {
      return "Invalid email address";
    }
    if (!passwordRegex.test(user.password)) {
      return "Password must be strong (8+ chars, uppercase, number, special)";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      if (isRegister) {
        // 🔹 REGISTER
        const res = await fetch("http://localhost:3000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });

        if (!res.ok) throw new Error("Registration failed");

        setSuccess("Registration successful 🎉");
        navigate("/Service");
        setUser({ name: "", email: "", password: "" });
      } else {
        // 🔹 LOGIN
        const res = await fetch(
          `http://localhost:3000/users?email=${user.email}&password=${user.password}`
        );
        const data = await res.json();

        if (data.length === 0) {
          setError("Invalid email or password");
          return;
        }

        setSuccess("Login successful ✅");
        navigate("/Service"); // redirect after login
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="body-bg">
      <div className="card card-main">
        <h2 className="text-center mb-3">
          {isRegister ? "Register" : "Login"}
        </h2>

        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className="form-group mt-3">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={user.name}
                onChange={handleChange}
              />
            </div>
          )}

          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={user.password}
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-primary mt-4 w-100">
            {isRegister ? "Register" : "Login"}
          </button>

          {error && (
            <div className="alert alert-danger mt-3 text-center">
              {error}
            </div>
          )}

          {success && (
            <div className="alert alert-success mt-3 text-center">
              {success}
            </div>
          )}

          <p className="mt-3 text-center">
            {isRegister ? "Already a member?" : "New user?"}{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => {
                setIsRegister(!isRegister);
                setError("");
                setSuccess("");
              }}
            >
              {isRegister ? "Login" : "Register"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
