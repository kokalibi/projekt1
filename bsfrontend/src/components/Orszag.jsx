import { useState, useEffect } from "react";
import axios from "axios";

const Orszagok = () =>{
    const [orszagok,setOrszagok] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState();
    const [selectedOrszag, setSelectedOrszag] = useState(null);

    const [kod, setKod] = useState("");
    const [nev, setNev] = useState("");
    const [regio, setRegio] = useState("Európa");

    const fetchOrszagok = async () => {
           try{
                const response = await axios.get('http://localhost:8080/orszagok')
                setOrszagok(response.data);
           }catch(err){
            setError(err.message);
           }finally{
            setLoading(false);
           }
        };

    useEffect(()=>{
        fetchOrszagok();
    },[]);

    const handleOrszagClick = (orszag) => {
        setSelectedOrszag(orszag);
    };

    async function handleDelete(id){
        try{
        // Törlés logika
        await axios.delete(`http://localhost:8080/orszagok/${id}`);
        // adatok frissitése
        setSelectedOrszag(null);
        fetchOrszagok();
        }catch(err){
            setError(err.message);
        }
    }

    async function handelOrszag() {
        try{
            const ujorszag = {kod,nev,regio};
            await axios.post('http://localhost:8080/orszagok',ujorszag);
            fetchOrszagok();
            setKod("");
            setNev("");
            setRegio("Európa");
        }catch(err){
            setError(err.message);
        }
    }

    return(
        <div>
            <h2>Kiválasztott ország</h2>
            <div style={{border: "1px solid black", padding: "10px", marginBottom: "10px", backgroundColor: "lightgrey"}}>
            {selectedOrszag ? (
                <div>
                    <h2>Id: {selectedOrszag.id}</h2>
                    <h2>{selectedOrszag.nev} ({selectedOrszag.kod})</h2>
                    <h2>Régió: {selectedOrszag.regio}</h2>
                    <button onClick={()=>handleDelete(selectedOrszag.kod)}>Törlés</button>
                    <button >Szerkesztés</button>
                </div>
            ): (
                <p>Kérlek válasz egy országot a listából</p>
            )}
            </div>

            <div style={{border: "1px solid black", padding: "10px", marginBottom: "10px", backgroundColor: "lightgrey"}}>
                <input type="text" value={kod} onChange={(e)=>setKod(e.target.value)} placeholder="kód"/>
                <input type="text" value={nev} onChange={(e)=>setNev(e.target.value)} placeholder="név"/>
                <input type="text" value={regio} onChange={(e)=>setRegio(e.target.value)} placeholder="Régió"/>
                <button onClick={()=>handelOrszag}>Új ország</button>
            </div>

            <h1>Orszagok Listája</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{color: "white",backgroundColor: "red"}}>Error: {error}</p>}
            <ul>
                {orszagok.map((orszag) =>(
                    <li onClick={()=>handleOrszagClick(orszag)} key={orszag.kod} style={{
                        cursor: "pointer", marginBottom: "5px", backgroundColor: selectedOrszag && selectedOrszag.kod
                        === orszag.kod ? "silver" : "white"}}>

                        {orszag.nev} ({orszag.kod}) - Régió: {orszag.regio}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Orszagok;