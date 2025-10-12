import { Menu } from "lucide-react";
import { useContext, useState, useEffect } from "react";
import { ContextApp } from "../context/Context-app";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
function Header() {
  const {
    IsCollapsedMenuOpen,
    setIsCollapsedMenuOpen,
    setIsCartOpen,
    IsCartOpen,
    CartList,
  } = useContext(ContextApp);

  const [Length, setLength] = useState(CartList.items.length);

  useEffect(() => {
    setLength(CartList.items.length);
    console.log(CartList.items.length); // ou console.log(Length) depois que atualizar
  }, [CartList.items]);

  return (
    <div className="poppins bg-[#2E4F4F] lg:p-6 pt-4 text-2xl text-white">
      <div className="grid lg:grid-cols-3 items-center gap-4">
        <div className="lg:block flex lg:justify-center items-center gap-6">
          <div className="lg:hidden ml-6">
            <button
              onClick={() => {
                setIsCollapsedMenuOpen(!IsCollapsedMenuOpen);
                setIsCartOpen(false)
              }}
            >
              <Menu></Menu>
            </button>
          </div>
          <img
            className="h-[50px] lg:h-[60px]  lg:block"
            src="/logo.png"
            alt=""
          />
          <div className="flex lg:hidden justify-end mr-4 w-full gap-2">
            <div
              className={`bg-red-500  rounded-full ${
                Length > 0 ? "w-[20px] " : ""
              } flex items-center justify-center `}
            >
              <h1>{Length > 0 ? Length : ""}</h1>
            </div>
            <button
              onClick={() =>
                IsCollapsedMenuOpen ? "" : setIsCartOpen(!IsCartOpen)
              }
              className="bg-[#F5F5DC] text-green-900 p-2 rounded-md hover:bg-amber-300 text-[14px] "
            >
              <ShoppingCart></ShoppingCart>
            </button>
          </div>
        </div>
        <div className="hidden  lg:flex items-center justify-center">
          <div className="flex lato gap-7">
            <button className="hover:text-amber-300">
              <Link to="/">Inicio</Link>
            </button>
            <button className="hover:text-amber-300">
              <Link to="/Cardapio">Cardapio</Link>
            </button>
            <button className="hover:text-amber-300">
              <Link to="/">Contato</Link>
            </button>
            <button className="hover:text-amber-300">
              <Link to="/">Sobre</Link>
            </button>
          </div>
        </div>
        <div className="  flex lg:justify-end justify-center items-center gap-2 ">
          <div className="bg-red-500  rounded-full w-[32px] lg:flex justify-center  hidden">
            <h1>{Length > 0 ? Length : ""}</h1>
          </div>
          <button
            onClick={() => setIsCartOpen(!IsCartOpen)}
            className="bg-[#F5F5DC] text-green-900 p-2 rounded-md hover:bg-amber-300 lg:block hidden"
          >
            <ShoppingCart></ShoppingCart>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
