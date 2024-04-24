function TimeDateFunComp()
{
    //here var is compulsory
    var dt = new Date();
    return(
        <>
            <h1>Date : {dt.toDateString()}</h1>
            <h2>Hello From Time Fun Comp</h2>
        </>
    )

}
export default TimeDateFunComp;

