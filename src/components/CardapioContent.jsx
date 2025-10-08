import { ArrowDownNarrowWide } from "lucide-react";
import { useContext } from "react";
import { ContextApp } from "../context/Context-app";

function CardapioContent() {
  const { isMenuCardapioOpen, setisMenuCardapioOpen } = useContext(ContextApp);
  function tempdiv() {
    return (
      <div
        className={` rounded-md shadow-2xl shadow-black  bg-center bg-cover grid grid-rows-2 h-[190px] w-[210px] hover:scale-110`}
        style={{
          backgroundImage: `url("https://www.sabornamesa.com.br/media/k2/items/cache/58d52ea025b256e4ce8690fddc53cbd4_XL.jpg")`,
        }}
      >
        <div></div>
        <div className="bg-gradient-to-t from-[#F5F5DC] via-[#F5F5DC] to-transparent h-30  flex rounded-md justify-center py-3">
          <div className="flex flex-col items-center justify-end-safe">
            <h1 className="poppins font-extrabold ">Macarrão</h1>
            <p className="text-[10px] leading-2  text-center max-w-[150px] break-words">
              Massa cozida temperada com sabor do nordeste
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="bg-[#F5F5DC] p-6 flex justify-center">
        <h1 className="text-4xl poppins text-[#2E4F4F]">Nosso Cardapio</h1>
      </div>
      <div className="bg-[#2E4F4F] p-10">
        <div className="flex flex-col">
          <div className="lg:hidden flex flex-col gap-2 justify-center mb-6">
            <button
              onClick={() => {
                setisMenuCardapioOpen(!isMenuCardapioOpen);
              }}
              className="text-[#2E4F4F] text-2xl bg-[#F5F5DC] p-2 rounded-md flex items-end justify-center"
            >
              Categorias<ArrowDownNarrowWide></ArrowDownNarrowWide>
            </button>
            <div
              className={`lg:hidden transition-all duration-300 ease-out overflow-hidden ${
                isMenuCardapioOpen
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0 -mb-14"
              } flex flex-col rounded-md bg-[#F5F5DC] p-6`}
            >
              <input
                className=" border-b-1 placeholder:text-gray-300 mb-4"
                type="text"
                placeholder="Buscar..."
              />
              <button className="border-b-1 mb-4 text-left hover:text-amber-300">
                Massas
              </button>
              <button className="border-b-1 mb-4 text-left hover:text-amber-300">
                Sanduiches
              </button>
              <button className="border-b-1 mb-4 text-left hover:text-amber-300">
                Salgados
              </button>
              <button className="border-b-1 mb-4 text-left hover:text-amber-300">
                Doces
              </button>
              <button className="border-b-1 mb-4 text-left hover:text-amber-300">
                Bebidas Quentes
              </button>
              <button className="border-b-1 mb-4 text-left hover:text-amber-300">
                Bebidas frias
              </button>
            </div>
          </div>

          <div className="hidden lg:flex  gap-10 text-white p-6 justify-center">
            <input
              className=" border-b-1 placeholder:text-gray-300 mb-4"
              type="text"
              placeholder="Buscar..."
            />
            <button className="border-b-1 mb-4 text-left hover:text-amber-300">
              Massas
            </button>
            <button className="border-b-1 mb-4 text-left hover:text-amber-300">
              Sanduiches
            </button>
            <button className="border-b-1 mb-4 text-left hover:text-amber-300">
              Salgados
            </button>
            <button className="border-b-1 mb-4 text-left hover:text-amber-300">
              Doces
            </button>
            <button className="border-b-1 mb-4 text-left hover:text-amber-300">
              Bebidas Quentes
            </button>
            <button className="border-b-1 mb-4 text-left hover:text-amber-300">
              Bebidas frias
            </button>
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="text-3xl flex  text-white poppins">
              <h1>Title</h1>
            </div>
            <div className="grid lg:grid-cols-4 gap-y-12 gap-6">
              {tempdiv()}
              {tempdiv()}
              {tempdiv()}
              {tempdiv()}
              {tempdiv()}
              {tempdiv()}
              {tempdiv()}
              {tempdiv()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardapioContent;
