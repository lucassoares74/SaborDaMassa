import { ArrowDownNarrowWide, Target } from "lucide-react";
import { useContext } from "react";
import { ContextApp } from "../context/Context-app";

function CardapioContent() {
  const {
    isMenuCardapioOpen,
    setisMenuCardapioOpen,
    CardapioList,
    FinalList,
    setFinalList,
    FilterListByCategory,
    filterListByName,
    itensPaginados,
    paginaAtual,
    setPaginaAtual,
    totalPages,
  } = useContext(ContextApp);
 


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
                onChange={(e) => {
                  filterListByName(e.target.value);
                }}
                className=" border-b-1 placeholder:text-gray-300 mb-4"
                type="text"
                placeholder="Buscar..."
              />
              <button
                onClick={(e) => {
                  FilterListByCategory(e.target.innerText);
                  console.log(e.target.innerText);
                }}
                className="border-b-1 mb-4 text-left hover:text-amber-300"
              >
                Massas
              </button>
              <button
                onClick={(e) => {
                  FilterListByCategory(e.target.innerText);
                  console.log(e.target.innerText);
                }}
                className="border-b-1 mb-4 text-left hover:text-amber-300"
              >
                Sanduiches
              </button>
              <button
                onClick={(e) => {
                  FilterListByCategory(e.target.innerText);
                  console.log(e.target.innerText);
                }}
                className="border-b-1 mb-4 text-left hover:text-amber-300"
              >
                Salgados
              </button>
              <button
                onClick={(e) => {
                  FilterListByCategory(e.target.innerText);
                  console.log(e.target.innerText);
                }}
                className="border-b-1 mb-4 text-left hover:text-amber-300"
              >
                Doces
              </button>
              <button
                onClick={(e) => {
                  FilterListByCategory(e.target.innerText);
                  console.log(e.target.innerText);
                }}
                className="border-b-1 mb-4 text-left hover:text-amber-300"
              >
                Bebidas Quentes
              </button>
              <button
                onClick={(e) => {
                  FilterListByCategory(e.target.innerText);
                  console.log(e.target.innerText);
                }}
                className="border-b-1 mb-4 text-left hover:text-amber-300"
              >
                Bebidas frias
              </button>
            </div>
          </div>

          <div className="hidden lg:flex  gap-10 text-white p-6 justify-center">
            <input
              onChange={(e) => {
                filterListByName(e.target.value);
              }}
              className=" border-b-1 placeholder:text-gray-300 mb-4"
              type="text"
              placeholder="Buscar..."
            />
            <button
              onClick={(e) => {
                FilterListByCategory(e.target.innerText);
                console.log(e.target.innerText);
              }}
              className="border-b-1 mb-4 text-left hover:text-amber-300"
            >
              Massas
            </button>
            <button
              onClick={(e) => {
                FilterListByCategory(e.target.innerText);
                console.log(e.target.innerText);
              }}
              className="border-b-1 mb-4 text-left hover:text-amber-300"
            >
              Sanduiches
            </button>
            <button
              onClick={(e) => {
                FilterListByCategory(e.target.innerText);
                console.log(e.target.innerText);
              }}
              className="border-b-1 mb-4 text-left hover:text-amber-300"
            >
              Salgados
            </button>
            <button
              onClick={(e) => {
                FilterListByCategory(e.target.innerText);
                console.log(e.target.innerText);
              }}
              className="border-b-1 mb-4 text-left hover:text-amber-300"
            >
              Doces
            </button>
            <button
              onClick={(e) => {
                FilterListByCategory(e.target.innerText);
                console.log(e.target.innerText);
              }}
              className="border-b-1 mb-4 text-left hover:text-amber-300"
            >
              Bebidas Quentes
            </button>
            <button
              onClick={(e) => {
                FilterListByCategory(e.target.innerText);
                console.log(e.target.innerText);
              }}
              className="border-b-1 mb-4 text-left hover:text-amber-300"
            >
              Bebidas frias
            </button>
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-6">
              {itensPaginados.map((elements) => {
                return (
                  <div
                    className={` rounded-md shadow-2xl shadow-black  bg-center bg-cover grid grid-rows-2 h-[190px] w-[210px] hover:scale-110`}
                    style={{
                      backgroundImage: `url(${elements.img})`,
                    }}
                  >
                    <div></div>
                    <div className="bg-gradient-to-t from-[#F5F5DC] via-[#F5F5DC] to-transparent h-30  flex rounded-md justify-center py-3">
                      <div className="flex flex-col items-center justify-end-safe">
                        <h1 className="poppins font-extrabold ">
                          {elements.title}
                        </h1>
                        <p className="text-[10px] leading-2  text-center max-w-[150px] break-words">
                          {elements.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2E4F4F] flex justify-center gap-2">
        <button
          onClick={() => setPaginaAtual((prev) => Math.max(prev - 1, 1))}
          className={`bg-[#F5F5DC] p-1 rounded-md text-[#2E4F4F] hover:bg-amber-300 poppins ${
            paginaAtual === 1 ? "hidden" : ""
          }`}
        >
          Anterior
        </button>
        <button
          onClick={() => {
            setPaginaAtual((prev) => prev + 1);
            console.log(totalPages);
          }}
          className={`bg-[#F5F5DC] p-1 rounded-md text-[#2E4F4F] hover:bg-amber-300 poppins ${
            paginaAtual === totalPages ? "hidden" : ""
          }`}
        >
          Proximo
        </button>
      </div>
    </div>
  );
}

export default CardapioContent;
