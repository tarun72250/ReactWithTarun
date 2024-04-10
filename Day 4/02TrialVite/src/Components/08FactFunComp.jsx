function FactFunComp(amit)
{

    var n = amit.num;
    var fact = 1;
    for(let i=1; i<=n ; i++)
    {
        fact = fact*i;
    }
    return(
        <>
        <h1>
            Factorial by FunBased Comp of {n} is :{fact}
        </h1>
        </>
    )
}

export default FactFunComp;