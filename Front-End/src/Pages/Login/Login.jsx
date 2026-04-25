import { useState } from "react";
import Input from "../../Components/Ui/Input";
import Button from "../../Components/Ui/Button";
import img from "../../assets/images (1).png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ username, password });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

      <form
        onSubmit={handleLogin}
        className="bg-white p-5 rounded shadow w-100"
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
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <button className="btn btn-primary w-100" type="submit">
          Sign In
        </button>

        <p className="text-center text-muted mt-3 small">
          Secure Government System
        </p>

      </form>
    </div>
  );
}

export default Login;