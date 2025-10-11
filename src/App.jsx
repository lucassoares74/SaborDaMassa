import { useContext } from "react";
import { ContextApp } from "./context/Context-app";
import Header from "./components/Header";
import BannerHome from "./components/BannerHome";
import CollapsedMenu from "./components/CollapsedMenu";
import Breve from "./components/Breve";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Cart from './components/Cart';


function App() {
  const { IsCollapsedMenuOpen } = useContext(ContextApp);

  return (
    <div className={IsCollapsedMenuOpen?"fixed w-[100%]":""}>
      <Cart></Cart>
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
