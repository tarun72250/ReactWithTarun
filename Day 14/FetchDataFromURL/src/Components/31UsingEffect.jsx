import React, { useEffect, useState } from 'react';

export default function UsingEffect() {
    const [cdate, setCdate] = useState(new Date());

    // Runs once, at the time of mounting
    useEffect(() => {
        console.log("mounted");

        const interval = setInterval(() => {
            setCdate(new Date()); // Update the current date every second
        }, 1000);

        // Clean-up function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array to ensure it runs only once

    // Runs for every update
    useEffect(() => {
        console.log("updated");
    },[]);

    return (
        <>
            <p>Time: {cdate.getHours()} : {cdate.getMinutes()} : {cdate.getSeconds()}</p>
        </>
    );
}
