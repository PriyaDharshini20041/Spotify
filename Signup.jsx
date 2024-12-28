import { useState } from "react";

function Signup() {
    // State for form inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, password });
    };

    // Inline background image styling
    const backgroundStyle = {
        backgroundImage: "url('public/1.jpg')", // Replace with your image URL
        backgroundSize: "cover", // Ensures the image covers the entire viewport
        backgroundPosition: "center", // Centers the image
        height: "100vh", // Full height of the viewport
    };

    return (
        <div style={backgroundStyle} className="d-flex justify-content-center align-items-center">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control rounded-0"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control rounded-0"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control rounded-0"
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                    <p>Already have an account?</p>
                    <button
                        type="button"
                        className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
