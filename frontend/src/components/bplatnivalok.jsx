export default function Bplatnivalok(props){
    return(
        <div>
            
            <h4>Látnivalók</h4>
            <div>
                {props.bplatnivalok.map((item)=>
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