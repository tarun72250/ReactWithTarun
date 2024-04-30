import { useEffect, useState } from "react";
import axios from "axios";
//npm install axios 
let GetDummyComp1 = () => {
  const [userData, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").
    then((resp) => {
      console.log(resp);
      setData(resp.data);
    });
  }, []);

  return (
    <div>
      <h1>Get Dummy Data from External URL</h1>
      <table border={1}>
        <tbody>
          {userData.map((v) => (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default GetDummyComp1;
