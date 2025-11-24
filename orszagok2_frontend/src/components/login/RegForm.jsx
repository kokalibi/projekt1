import { useState, useEffect } from 'react';
import api from "../../httpcommon";

export default function RegForm() {
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [userdata, setUserdata] = useState({
        email: "",
        password: "",
        name: "",
        imagename: "",
        role: "",
    });
        const handleChange = (e) => {
        const { name, value } = e.target;
        setUserdata((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const statusMessages = {
        201: "Sikeres regisztráció",
        400: "Hiányzó vagy érvénytelen mezők",
        409: "A megadott email cím már létezik",
        500: "Szerver hiba, próbáld újra később",
    };

     const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/users/register', userdata);
            let status = response?.status;
            if (status === 201) {
                // Sikeres regisztráció kezelése
                setMessage(statusMessages[status]);
                setError(null);
            }

        } catch (err) {
            console.error(err);
            //setError("Hiba: "+(err.response?.status)+":" + (err.response?.data?.error || 'Registration failed'));
            setError(statusMessages[err.response?.status]);
            setMessage(null);
        }   
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>   
                    <input type="email" name="email" value={userdata.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={userdata.password} onChange={handleChange} />
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={userdata.name} onChange={handleChange} /> 
                </div>
                <div>
                    <label>Role:</label>
                    <input type="text" name="role" value={userdata.role} onChange={handleChange} />
                </div>
                <div>
                    <label>Image Name:</label>
                    <input type="text" name="imagename" value={userdata.imagename} onChange={handleChange} />
                </div>
                <button type="submit">Register</button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}