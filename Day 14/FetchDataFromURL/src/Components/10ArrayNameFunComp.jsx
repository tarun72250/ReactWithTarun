let ArrayName =(ps) =>{

    return(
        <>
            <h1>Welcome</h1>
            <ul>
            {ps.names.map((name, index) => {
                    return <li key={index}>{name}</li>;
                })}
            </ul>
        </>
    )
}
//export default ArrayName;

let Aname =(ps)=>{
//ps parameter without checking if ps or ps.names exists. If ps is undefined or ps.names is not an array, it will cause an error.

    return(
        <>
            <h1>Welcome </h1>
            <ul>
            {ps.names.map((name, index) => {
                    return <li key={index}>{name}</li>;
                })}
            </ul>
        </>
    )
}

export default Aname;
