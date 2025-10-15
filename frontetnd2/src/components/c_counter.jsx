import { useState } from "react";

export default function Counter() {
    const [szam, setSzam] = useState(0);
    function handleClick(){
        setSzam(szam+1);
    }
    function handleClick2(){
        setSzam(szam-1);
    }
    return (
        <>
            <h1>Counter</h1>
            <button onClick={()=>setSzam(szam+1)}>növel</button>
            <button onClick={()=>handleClick2()}>csökkent</button>
            <p>{szam}</p>

        </>
    );
}