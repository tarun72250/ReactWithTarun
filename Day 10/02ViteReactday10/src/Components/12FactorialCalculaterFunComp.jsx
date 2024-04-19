// const FactorialFunComp = ({ number, message }) => {
//     const calFact = (n) =>{
//         if (n === 0 || n === 1) {
//             return 1;
//         } else {
//             return n * calFact(n - 1);
//         }
//     };

//     const factorial = calFact(number);

//     return (
//         <>
//             <h1>{message}</h1>
//             <h1>Factorial by FunBased Comp of {number} is: {factorial}</h1>
//         </>
//     );
// };

// export default FactorialFunComp;


const FactorialFunComp  = ({number, message}) =>{

    const calFact = (n) =>{
        if( n===0  || n===1 )
        {
            return 1;
        }
        else
        {
            return n * calFact(n-1);
        }
    }


    const factorial = calFact(number);
   
   return(<>

        <h1>{message} {number} is : {factorial}</h1>
    </>)
}

export default FactorialFunComp;