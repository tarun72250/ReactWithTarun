function ArrayFunComp(props)
{
    const names = props.names;
    return(
        <h1>
            Name of the Array by Fun Comp:
            {names.map((name,index)=><li key={index}>{name}</li>)}
        </h1>
    )
}
export default ArrayFunComp;