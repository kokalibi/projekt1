import api from "../../httpcommon";
import { useState } from "react";


function Loginform({accessToken, setAccessToken}) {
    const [user, setUser] = useState("testuser");
    const [pwd, setPwd] = useState("password");
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setMessage(null);

        try {
            const response = await api.post("/auth/login", {
                username: user,
                password: pwd
            });

            if (response.data) {
                setMessage("Login successful!");
            }
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <>
            <div>
                <h1>Login</h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <p>Username:</p>
                        <input type="text"value={user} onChange={(e) => setUser(e.target.value)}/>
                    </div>

                    <div>
                        <p>Password:</p>
                        <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)}/>
                    </div>

                    <button type="submit">Login</button>
                </form>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {message && <p style={{ color: "green" }}>{message}</p>}
            </div>
        </>
    );
}

export default Loginform;


