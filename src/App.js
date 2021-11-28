import Navbar from "./components/Navbar";
import Card from './components/Card';
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <div className="w-screen flex justify-center items-center h-screen">
        { isLoading ? <Loading/> : <Card/>  }
      </div>
    </div>
  );
}

export default App;
