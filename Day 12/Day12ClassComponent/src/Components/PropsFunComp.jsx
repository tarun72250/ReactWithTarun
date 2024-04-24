function PropsFunComp(ps){

    return(
        <>
            <h1>Welcome</h1>
            <ol>
                {
                    ps.names.map((v)=>{return<li key={v}> {v} </li>})
                }
            </ol>
            <ol>
                {
                    ps.age.map((v)=>{return<li key={v}> {v} </li>})
                }
            </ol>
        </>
    )
}

PropsFunComp.defaultProps={
    names :["A","B","C"],
    age :[12,23,34]
}

export default PropsFunComp;