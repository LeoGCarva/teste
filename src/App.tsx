import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [resposta, setResposta] = useState<object | null>(null);

  useEffect(() => {
    async function apiCall() {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();

      setResposta(data);
    }

    apiCall();
  }, []);

  return (
    <>
      <input type="text" placeholder="name"/>
      <input type="text" placeholder="author"/>
      <button>Add to the Shelf</button>
      <pre>{resposta ? JSON.stringify(resposta, null, 2) : null}</pre>
    </>
  );
}

export default App;
