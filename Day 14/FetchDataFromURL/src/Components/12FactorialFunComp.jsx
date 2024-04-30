const FactorialFunCalculater =({num}) => {
   

    const calFact = (n) => {
        if(n ===0 ||  n==1 )
        {
            return 1;
        }
        else
        {
            return n * calFact(n-1);
        }
    };

    const factorial =calFact(num);

    return(<>
        <h1>Factorial by fun based comp of {num} is :{factorial}</h1>
    </>)
}
export default FactorialFunCalculater;