import Header from "./../components/Header";
import CollapsedMenu from "./../components/CollapsedMenu";
import { useContext } from "react";
import { ContextApp } from "./../context/Context-app";
import CardapioContent from "../components/CardapioContent";
import Footer from './../components/Footer';

function Cardapio() {
  const { IsCollapsedMenuOpen } = useContext(ContextApp);

  return (
    <div className={IsCollapsedMenuOpen ? "fixed w-[100%]" : ""}>
      <CollapsedMenu></CollapsedMenu>
      <Header></Header>
      <CardapioContent></CardapioContent>
      <Footer></Footer>
    </div>
  );
}

export default Cardapio;
