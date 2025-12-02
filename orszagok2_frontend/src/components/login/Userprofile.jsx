import { useState, useEffect } from "react";
import api from "../../api";

export default function Userprofile() {
    const [profile, setProfile] = useState("");
    const [error, setError] = useState(null);
    const [accessToken, setAccessToken] = useState(null);

    const fetchProfile = async ({accessToken}) => {
        try {
            const response = await api.get("/auth/profile", {headers: { "Authorization": `Bearer ${accessToken}` }});
            setProfile(response.data);
        } catch (err) {
            setError(err.response?.data?.message || "Hiba a profil lekérése során");
        }
    };

    useEffect(() => {
        if (accessToken){
            fetchProfile();
        }
        
    }, [accessToken]);
    return (
        <div>
            <h2>User Profile</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {profile ? (
                <div>
                    <p><strong>Profile:</strong> {profile.username}</p>
                    <p><strong>Role:</strong> {profile.role}</p>
                </div>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    );
}