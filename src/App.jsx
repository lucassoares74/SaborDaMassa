import { useContext } from "react";
import { ContextApp } from "./context/Context-app";
import Header from "./components/Header";
import BannerHome from "./components/BannerHome";
import CollapsedMenu from "./components/CollapsedMenu";
import Breve from "./components/Breve";
import Featured from "./components/Featured";
import Footer from "./components/Footer";

function App() {
  const { theme } = useContext(ContextApp);

  return (
    <div className="relative">
      <CollapsedMenu></CollapsedMenu>
      <Header></Header>
      <BannerHome></BannerHome>
      <Breve></Breve>
      <Featured></Featured>
      <Footer></Footer>
    </div>
  );
}

export default App;
