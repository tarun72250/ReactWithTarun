import { useEffect, useState } from "react";

const FetchDataFromAPI = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            if (!response.ok) 
            {
                throw new Error("Failed to fetch data");
            }
                const fetchedData = await response.json();
                setData(fetchedData);
         }
        catch (error) 
        {
             setError(error.message);
        }
        finally 
        {
             setIsLoading(false);
        }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data from API</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchDataFromAPI;
