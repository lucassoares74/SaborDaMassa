import { useContext } from "react";
import { ContextApp } from "./context/Context-app";
import Header from "./components/Header";
import BannerHome from "./components/BannerHome";
import CollapsedMenu from "./components/CollapsedMenu";

function App() {
  const { theme } = useContext(ContextApp);

  return (
    <div className="relative">
      <Header></Header>
      <CollapsedMenu></CollapsedMenu>
      <BannerHome></BannerHome>
    </div>
  );
}

export default App;
