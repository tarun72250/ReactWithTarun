import { useEffect, useState } from "react";

let GetDummyComp2 = () => {
  const [emps, setEmps] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1/comments")
      .then((resp) => resp.json())
      .then((data) => setEmps(data));
  }, []);

  return (
    <div>
      <h1>Get Dummy Data from External URL</h1>
      <table border={1}>
        <tbody>
          {emps.map((v) => (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default GetDummyComp2;
