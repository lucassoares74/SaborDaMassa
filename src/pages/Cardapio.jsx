import Header from "./../components/Header";
import CollapsedMenu from "./../components/CollapsedMenu";
import { useContext } from "react";
import { ContextApp } from "./../context/Context-app";
import CardapioContent from "../components/CardapioContent";
import Footer from './../components/Footer';
import Cart from './../components/Cart';

function Cardapio() {
  const { IsCollapsedMenuOpen } = useContext(ContextApp);

  return (
    <div className={IsCollapsedMenuOpen ? "fixed w-[100%]" : ""}>
      <Cart></Cart>
      <CollapsedMenu></CollapsedMenu>
      <Header></Header>
      <CardapioContent></CardapioContent>
      <Footer></Footer>
    </div>
  );
}

export default Cardapio;
