import React from "react";
class EmpClassComp extends React.Component{
    render()
    {
        // const empid =this.props.empid;
        // const ename =this.props.ename;
        // const age =this.props.age;
        // const sal =this.props.sal;
        const { empid, ename, age, sal } = this.props;
        return(
            <>
                <h1>Employee Table</h1>
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
}

export default EmpClassComp;