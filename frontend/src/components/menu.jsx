export default function Menu(){
    const mystyles={
        backgroundColor:"lightgray",
        padding:"2px",
        display:"flex",
    }
    const mystyles2={
        display:"flex",
        justifyContent:"flex-end",
        width:"95%",
        gap:"20px"
    }
    return(
        <div style={mystyles}>
            <h5>Budapest</h5>
            <div style={mystyles2}>
                <h5>Rólunk</h5>
                <h5>Látnivalók</h5>
                <h5>Gasztronómia</h5>
                <h5>Tippek</h5>
            </div>
        </div>
    )
}