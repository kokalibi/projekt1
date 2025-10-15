export default function Bpgasztronomia(props){
    
    return(
        <div>
            <h4>Gasztronómia</h4>
            <div>
                {props.bpgasztronomia.map((item)=>
                    <div key={item.id} className="card">
                        <img src={item.kep} style={{ width: "300px", borderRadius: "10px" }} alt={item.cim}/>
                        <h5>{item.cim}</h5>
                        <p>{item.leiras}</p>
                    </div>
                )}
            </div>
        </div>
    )
}