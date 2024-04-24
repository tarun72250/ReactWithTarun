function Fact(ps)
{
     var num = ps.num;
     var fact = 1;

     for(var i =1 ; i<=num ; i++)
     {
        fact = fact * i;
     }

     return (<div><h1>Fact of {ps.num} is : {fact} </h1></div>)

}

//export default Fact;

//arrow function
let FactArrowFun=(ps)=>{

    let n = ps.n;
    let fact = 1;
    for(let i=1 ; i<=n ; i++)
    {
        fact = fact * i;
    }
    return(
    <h1>
        Factorial of {ps.n} is : {fact}
    </h1>
    )
}

export default FactArrowFun;