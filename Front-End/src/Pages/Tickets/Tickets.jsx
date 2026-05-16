import { useState } from "react";

function Tickets({ setIsDraft }) {

    const [formData, setFormData] = useState({
        department: "",
        subject: "",
        priority: "low",
        status: "InProgress"
    });

    function handleChange(e) {

        const updatedData = {
            ...formData,
            [e.target.name]: e.target.value
        };

        setFormData(updatedData);

        const hasData =
            updatedData.department.trim() !== "" ||
            updatedData.subject.trim() !== "";

        setIsDraft(hasData);
    }

    function handleSubmit(e){
        e.preventDefault();

        console.log(formData);

        // هنا بعدين هتبعتي البيانات للباك
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>

                {/* Department */}
                <div className="mb-3">
                    <label className="form-label">
                        Department
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                    />
                </div>

                {/* Subject */}
                <div className="mb-3">
                    <label className="form-label">
                       Discription
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        name="subject"
                        value={formData.discription}
                        onChange={handleChange}
                    />
                </div>

                {/* Priority */}
                <div className="mb-3">
                    <label className="form-label">
                        Priority
                    </label>

                    <select
                        className="form-select"
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="High">High</option>
                        <option value="critical">Critical</option>
                    </select>
                </div>

                {/* Status */}
                <div className="mb-3">
                    <label className="form-label">
                        Status
                    </label>

                    <select
                        className="form-select"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option value="InProgress">In Progress</option>
                        <option value="Investigating">Investigating</option>
                        <option value="Queued">Queued</option>
                        <option value="Resolved">Resolved</option>
                    </select>
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

export default Tickets;
