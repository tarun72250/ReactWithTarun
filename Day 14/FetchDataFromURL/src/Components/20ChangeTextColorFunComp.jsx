import { useState } from "react"; // Importing the useState hook from React

//Chapter = 6 Assignment 2
function ChangeTextColorFunComp() {
    // Using the useState hook to create a state variable named 'flag' and a function to update it named 'setFlag'.
    // The initial value of 'flag' is set to "blue".
    const [flag , setFlag]  = useState("blue");

    return (
        <div>
            {/* Displaying a heading with a paragraph inside. The color of the paragraph is determined by the 'flag' state variable. */}
            <h1>
                <p style={{color: flag}}>Tarun Rathore DebugShala From Change TextColoFunComp</p>
            </h1>

            {/* An input field of type text. Its value is set to the current value of the 'flag' state variable. */}
            {/* When the input value changes, it triggers the onChange event, which calls the setFlag function to update the 'flag' state. */}
            <input type="text" name="c1" value={flag} onChange={(e) => {setFlag(e.target.value)}}/>

            {/* Displaying the current value of the 'flag' state variable */}
            <br/>
            <h2>{flag.toString()}</h2>
        </div>
    );
}

export default ChangeTextColorFunComp; // Exporting the ChangeTextColorFunComp function component
