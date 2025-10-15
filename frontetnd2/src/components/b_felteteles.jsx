export default function UserStatus({isLoggedIn}) {
    //const isLoggedIn = true; // vagy false 
    const buttonstyle = {
        padding: "10px",
        backgroundColor: isLoggedIn ? "green" : "red",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    };
    return (
        <div style={{border:"2px solid red", margin:"10px", padding:"10px"}}>
            {isLoggedIn ? <h1>Bejelentkezve</h1> : <h1>Kijelentkezve</h1>}
            <button style={buttonstyle}>Rendben</button>
            <button className="OK_button">OK</button>
        </div>
    );
}