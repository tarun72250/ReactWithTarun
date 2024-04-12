
const EmpFunComp =(props) => {

const {empid , ename , age, sal} = props;


    return(
        <>
            <h1>Employee Tbale</h1>
            <table border={1}>
                <tbody>
                        <tr><td>{empid}</td><td>{ename}</td><td>{age}</td><td>{sal}</td></tr>
                        <tr><td>{empid}</td><td>{ename}</td><td>{age}</td><td>{sal}</td></tr>
                        <tr><td>{empid}</td><td>{ename}</td><td>{age}</td><td>{sal}</td></tr>
                        <tr><td>{empid}</td><td>{ename}</td><td>{age}</td><td>{sal}</td></tr>
                </tbody>
            </table>
        </>
    )
}

export default EmpFunComp;
