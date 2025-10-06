import { useContext } from "react";
import { ContextApp } from "./context/Context-app";

function App() {
  const { theme } = useContext(ContextApp);

  return <div></div>;
}

export default App;
