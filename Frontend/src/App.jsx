import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState([]);

  const callTheApi = () => {
    axios
      .get("/api/data")
      .then((data) => {
        setCount(data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    callTheApi();
  }, []);


  return (
    <>
      <div>
        <h1>Fullstack</h1>
        <p>Data Length: {count?.length}</p>

        {count?.map((value, key) => (
          <div key={key}>
            <h3>{value.name}</h3>
            <p>{value.id}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
