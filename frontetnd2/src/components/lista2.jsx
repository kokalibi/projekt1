import person from "../assets/persons.json";

function ContractCard({ nev, email, kor }) {
    return (
        <div style={{ border: "1px solid gray", margin: "10px", padding: "10px", borderRadius: "5px", boxShadow: "2px 2px 5px rgba(0,0,0,0.1)", maxWidth: "300px", backgroundColor: "#f9f9f9", display: "inline-block", marginRight: "10px", verticalAlign: "top"}}>
            <h2>{nev}</h2>
            <p>{email}</p>
            <p>Kor: {kor}</p>
        </div>
    );
}

export default function Lista2() {
    return (
        <div>
            <h1>Kapcsolatok</h1>
            <ul>
                {person.map((p, index) => (
                    <ContractCard key={index} {...p} />
                ))}
            </ul>
        </div>
    );
}