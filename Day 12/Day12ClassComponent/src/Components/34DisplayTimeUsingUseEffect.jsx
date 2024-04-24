import React from "react";

// Assignment 3: Display time using useEffect
const TimeComponent = () => {
    // Define state variable 'time' using useState hook, initialized with current date
    const [time, setTime] = React.useState(new Date());
  
    // useEffect hook to run side effects in function components
    React.useEffect(() => {
      // Set up an interval to update the time every second
      const interval = setInterval(() => {
        // Update the 'time' state with the current date
        setTime(new Date());
      }, 1000);
      
      // Cleanup function to clear the interval when the component unmounts or re-renders
      return () => clearInterval(interval);
    }, []); // Empty dependency array to run the effect only once after the initial render
  
    // Render the component with the current time
    return (
      <div>
        <h2>Time Component</h2>
        <p>Current Time: {time.toLocaleTimeString()}</p>
      </div>
    );
}

export default TimeComponent;
