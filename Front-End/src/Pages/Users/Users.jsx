import { useState } from "react";

function Users({ setIsDraft }) {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        role: "nurse",
        profileImage: ""
    });

   function handleChange(e){

    const { name, value, files } = e.target;

    const updatedData = {
        ...formData,
        [name]: files ? files[0] : value
    };

    setFormData(updatedData);

    const hasData =
        updatedData.username.trim() !== "" ||
        updatedData.email.trim() !== "" ||
        updatedData.password.trim() !== "";

    setIsDraft(hasData);
}
    function handleSubmit(e){
        e.preventDefault();

        console.log(formData);

      
    }

    return (
        <div className="container">

            <form onSubmit={handleSubmit}>

                {/* Username */}
                <div className="mb-3">
                    <label className="form-label">
                        Username
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label className="form-label">
                        Email
                    </label>

                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                {/* Password */}
                <div className="mb-3">
                    <label className="form-label">
                        Password
                    </label>

                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                {/* Role */}
                <div className="mb-3">
                    <label className="form-label">
                        Role
                    </label>

                    <select
                        className="form-select"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                    >
                        {/* <option value="admin">Admin</option> */}
                        <option value="doctor">Doctor</option>
                        <option value="nurse">Nurse</option>
                        <option value="it">IT</option>
                    </select>
                </div>

              {/* Profile Image */}
<div className="mb-3">

    <label className="form-label">
        Profile Image
    </label>

    <input
        type="file"
        className="form-control"
        name="profileImage"
        onChange={handleChange}
    />

</div>

                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Submit
                </button>

            </form>

        </div>
    );
}

export default Users;
