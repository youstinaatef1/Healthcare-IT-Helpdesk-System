import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/images (1).png";
import styles from "./Login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // هنا المفروض تعمل API check
    console.log({ username, password });

    // لو login success
    navigate("/dashboard");
  };

  return (
    <div className={`${styles.parent} d-flex justify-content-center align-items-center vh-100 bg-light`}>

      <form
        onSubmit={handleLogin}
        className={`${styles.form} p-5 rounded shadow w-100`}
        style={{ maxWidth: "400px" }}
      >

        {/* Logo */}
        <div className="text-center mb-4">
          <img src={img} alt="logo" style={{ width: "80px" }} />
          <h4 className="mt-2">Ministry of Health</h4>
          <small className="text-muted">
            Healthcare IT Helpdesk System
          </small>
        </div>

        {/* Username */}
        <input
          className="form-control mb-3"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button className="btn btn-primary w-100" type="submit">
          Sign In
        </button>

      </form>
    </div>
  );
}

export default Login;