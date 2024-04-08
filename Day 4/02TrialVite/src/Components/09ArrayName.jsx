let ArrayName =(ps) =>{

    return(
        <>
            <h1>Welcome</h1>
            <ul>
                {ps.names.map(v=>{return <li>{v}</li>})}
            </ul>
        </>
    )
}

export default ArrayName;