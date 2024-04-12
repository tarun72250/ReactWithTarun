/*function ArrayNameFunComp(ps)
{
//Arrow function
    return(<>
        <ul> {
                ps.names.map((name , index) => {
                    return <li key={index}> {name}</li>
                })
             }
        </ul>
    </>)

}

export default ArrayNameFunComp;*/


let ArrayNameFunComp =(ps) =>
{
    return(
        <>
        <h1>
            <ul>
                {
                    ps.names.map((name , index) => {
                        return <li key={index}> {name}</li>
                    })
                }
            </ul>
        </h1>
        </>
    )
}

export default ArrayNameFunComp;