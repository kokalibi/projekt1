const users=["Elem 1","Elem 2","Elem 3"];

export default function UserLista1() {
    return (
        <div>
            <h1>Lista 1</h1>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ul>
        </div>
    );
}