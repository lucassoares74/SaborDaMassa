import { Menu } from "lucide-react";
import { useContext } from "react";
import { ContextApp } from "../context/Context-app";

function Header() {
  const { IsCollapsedMenuOpen, setIsCollapsedMenuOpen } =
    useContext(ContextApp);
  return (
    <div className="poppins bg-[#2E4F4F] lg:p-6 pt-4 text-3xl text-white">
      <div className="grid lg:grid-cols-3 items-center gap-4">
        <div className="lg:block flex lg:justify-center items-center gap-6">
          <div className="lg:hidden ml-6">
            <button
              onClick={() => {
                setIsCollapsedMenuOpen(!IsCollapsedMenuOpen);
              }}
            >
              <Menu></Menu>
            </button>
          </div>
          <img
            className="h-[50px] lg:h-[100px]  lg:block"
            src="/logo.png"
            alt=""
          />
          <div className="flex justify-center lg:hidden">
            {" "}
            <button className="bg-[#F5F5DC] text-green-900 p-2 rounded-md hover:bg-amber-300 text-[14px] ">
              Faça seu pedido
            </button>
          </div>
        </div>
        <div className="hidden  lg:flex items-center justify-center">
          <div className="flex lato gap-7">
            <button className="hover:text-amber-300">Inicio</button>
            <button className="hover:text-amber-300">Cardápio</button>
            <button className="hover:text-amber-300">Contato</button>
            <button className="hover:text-amber-300">Sobre</button>
          </div>
        </div>
        <div className="  flex lg:justify-end justify-center items-center gap-4 ">
          <button className="bg-[#F5F5DC] text-green-900 p-2 rounded-md hover:bg-amber-300 lg:block hidden ">
            Faça seu pedido
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
