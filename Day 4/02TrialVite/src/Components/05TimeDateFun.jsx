function TimeDate()
{

   var dt = new Date();

        return(
            <>
                <h1>
                    Date is :{dt.toDateString()}
                </h1>
                <h2>Date and Time From DateFunComp </h2>
            </>
        )
}

export default TimeDate;