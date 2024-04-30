//Chapter = 6 Assignment 5
import React, { useState } from "react";

function StudentList() {
    // State to store the array of student names
    const [studentNames, setStudentNames] = useState([]);

    // State to store the input value
    const [inputValue, setInputValue] = useState("");

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if input value is not empty
        if (inputValue.trim() !== "") {
            // Update studentNames state by appending the new name(s)
            setStudentNames([...studentNames, ...inputValue.trim().split(",")]);
            // Clear the input field
            setInputValue("");
        }
    };

    return (
        <div>
            {/* Display the list of student names as a bulleted list */}
            <h1>Student List:</h1>
            <ul>
                {studentNames.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>

            {/* Form to add new student name(s) */}
            <form onSubmit={handleSubmit}>
                <label>
                    Add Student Name(s):
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter one or more names separated by commas"
                    />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default StudentList;
