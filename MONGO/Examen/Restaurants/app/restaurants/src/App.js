import { useEffect, useState } from "react";

const axios = require("axios");

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((response) => console.log(response.data));
  }, [data]);

  return (
    <>
      <p>Hello k {data}</p>
     
    </>
  );
};

export default App;
