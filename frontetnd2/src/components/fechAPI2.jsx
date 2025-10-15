import { useEffect, useState } from "react";
import http from "../http-common";

export default function FetchAPI() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    /*useEffect(() => {
        fetch("http://localhost:3000/persons.json")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    */
   /* useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://localhost:3000/persons.json");
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();


    }, []);
    */
   useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await http.get("/persons.json");
                setData(response.data);
                setLoading(false);
            } catch (error){
                setError("Not loaded data");
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <h1>Fetched Data</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {loading && <p>Loading...</p>}
            {data ? (
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, fontFamily: 'Arial, sans-serif', fontSize: '16px', color: '#333' , backgroundColor: '#f9f9f9' , borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
                    {data.map((item, index) => (
                        <li key={index}>{item.nev} - {item.email} - {item.kor}</li>
                    ))}
                </ul>
            ) : (
                <p></p>
            )}
        </div>
    );
}