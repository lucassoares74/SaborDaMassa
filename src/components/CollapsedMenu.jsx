import { useContext } from "react";
import { ContextApp } from "./../context/Context-app";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

function CollapsedMenu() {
  const { IsCollapsedMenuOpen, setIsCollapsedMenuOpen } =
    useContext(ContextApp);
  return (
    <div
      className={`bg-[#F5F5DC] p-4 lg:hidden w-[90%] h-screen absolute top-20.5 left-0 z-50 transform ${
        IsCollapsedMenuOpen ? "" : "-translate-x-full "
      }transition-transform duration-500 ease-out`}
      style={{ overflow: "hidden" }}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col text-2xl poppins gap-8">
          <button
            onClick={() => setIsCollapsedMenuOpen(false)}
            className="hover:text-amber-300"
          >
            <Link to="/">Inicio</Link>
          </button>
          <button
            onClick={() => setIsCollapsedMenuOpen(false)}
            className="hover:text-amber-300"
          >
            <Link to="/Cardapio">Cardapio</Link>
          </button>
          <button
            onClick={() => setIsCollapsedMenuOpen(false)}
            className="hover:text-amber-300"
          >
            <Link to="/Contato">Contato</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CollapsedMenu;
