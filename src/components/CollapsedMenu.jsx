import { useContext } from "react";
import { ContextApp } from "./../context/Context-app";
import { Menu } from "lucide-react";

function CollapsedMenu() {
  const { IsCollapsedMenuOpen, setIsCollapsedMenuOpen } =
    useContext(ContextApp);
  return (
    <div
      className={`bg-[#F5F5DC] p-4 lg:hidden w-[90%] h-screen absolute top-20.5 left-0 z-50 transform ${
        IsCollapsedMenuOpen ? "" : "-translate-x-full "
      }transition-transform duration-500 ease-out`}
      style={{ overflow: "hidden"}}

    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col text-2xl poppins gap-8">
          <button className="hover:text-amber-300">Inicio</button>
          <button className="hover:text-amber-300">Cardápio</button>
          <button className="hover:text-amber-300">Contato</button>
          <button className="hover:text-amber-300">Sobre</button>
        </div>
      </div>
    </div>
  );
}

export default CollapsedMenu;
