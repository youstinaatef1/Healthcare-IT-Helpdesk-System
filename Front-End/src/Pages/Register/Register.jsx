import { useState } from "react";
import Input from "../../Components/Ui/Input";
import Button from "../../Components/Ui/Button";
import img from "../../assets/images (1).png";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("nurse");
  const [profileImage, setProfileImage] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log({ username, email, password, role, profileImage });

    // To connect to the backend, you'll need to use FormData like this:
    /*
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", role);
    if (profileImage) formData.append("profileImage", profileImage);
    
    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
    */
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

      <form
        onSubmit={handleRegister}
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

        {/* Email */}
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        {/* Role */}
        <div className="mb-3">
          <select
            className="form-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="nurse">Nurse</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
            <option value="it">IT Staff</option>
          </select>
        </div>

        {/* Profile Image */}
        <div className="mb-4">
          <label className="form-label text-muted small mb-1">Profile Image</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setProfileImage(e.target.files[0])}
          />
        </div>


        {/* Button */}
        <button className="btn btn-primary w-100" type="submit">
          Register
        </button>

        <p className="text-center text-muted mt-3 small">
          Secure Government System
        </p>

      </form>
    </div>
  );
}

export default Register;
