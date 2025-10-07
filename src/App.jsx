import { useContext } from "react";
import { ContextApp } from "./context/Context-app";
import Header from "./components/Header";
import BannerHome from './components/BannerHome';


function App() {
  const { theme } = useContext(ContextApp);

  return (
    <div>
      <Header></Header>
      <BannerHome></BannerHome>
    </div>
  );
}

export default App;
