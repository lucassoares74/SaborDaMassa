function CardapioContent() {
  return (
    <div>
      <div className="bg-[#F5F5DC] p-6 flex justify-center">
        <h1 className="text-4xl poppins text-[#2E4F4F]">Nosso Cardapio 😋</h1>
      </div>
      <div className="bg-[#2E4F4F] p-6">
        <div className="grid grid-cols-[200px_1fr] gap-10">
          <div className="flex flex-col text-white p-6">
            <input
              className="w-[60%] border-b-1 placeholder:text-gray-300 mb-4"
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
          <div className="flex flex-col">
            <div className="text-3xl flex  text-white poppins">
              <h1>Title</h1>
            </div>
            <div className="grid grid-cols-3 gap-8 w-[80%]">
              <div className="bg-[#F5F5DC] p-6 shadow-2xl shadow-black hover:bg-amber-300">
                <div className="flex flex-col items-center gap-1">
                  <img
                    className="h-[130px] w-[130px] rounded-full border-2"
                    src=""
                    alt=""
                  />
                  <h1 className="poppins font-bold">macarrão</h1>
                  <p className="text-[12px] text-center max-w-[100px] break-words">
                    massa cozida e temperda com sabor do nordeste
                  </p>
                </div>
              </div>

              <div className="bg-[#F5F5DC] p-6 shadow-2xl shadow-black hover:bg-amber-300">
                <div className="flex flex-col items-center gap-1">
                  <img
                    className="h-[130px] w-[130px] rounded-full border-2"
                    src=""
                    alt=""
                  />
                  <h1 className="poppins font-bold">macarrão</h1>
                  <p className="text-[12px] text-center max-w-[100px] break-words">
                    massa cozida e temperda com sabor do nordeste
                  </p>
                </div>
              </div>
              <div className="bg-[#F5F5DC] p-6 shadow-2xl shadow-black hover:bg-amber-300">
                <div className="flex flex-col items-center gap-1">
                  <img
                    className="h-[130px] w-[130px] rounded-full border-2"
                    src=""
                    alt=""
                  />
                  <h1 className="poppins font-bold">macarrão</h1>
                  <p className="text-[12px] text-center max-w-[100px] break-words">
                    massa cozida e temperda com sabor do nordeste
                  </p>
                </div>
              </div>
              <div className="bg-[#F5F5DC] p-6 shadow-2xl shadow-black hover:bg-amber-300">
                <div className="flex flex-col items-center gap-1">
                  <img
                    className="h-[130px] w-[130px] rounded-full border-2"
                    src=""
                    alt=""
                  />
                  <h1 className="poppins font-bold">macarrão</h1>
                  <p className="text-[12px] text-center max-w-[100px] break-words">
                    massa cozida e temperda com sabor do nordeste
                  </p>
                </div>
              </div>
              <div className="bg-[#F5F5DC] p-6 shadow-2xl shadow-black hover:bg-amber-300">
                <div className="flex flex-col items-center gap-1">
                  <img
                    className="h-[130px] w-[130px] rounded-full border-2"
                    src=""
                    alt=""
                  />
                  <h1 className="poppins font-bold">macarrão</h1>
                  <p className="text-[12px] text-center max-w-[100px] break-words">
                    massa cozida e temperda com sabor do nordeste
                  </p>
                </div>
              </div>
              <div className="bg-[#F5F5DC] p-6 shadow-2xl shadow-black hover:bg-amber-300">
                <div className="flex flex-col items-center gap-1">
                  <img
                    className="h-[130px] w-[130px] rounded-full border-2"
                    src=""
                    alt=""
                  />
                  <h1 className="poppins font-bold">macarrão</h1>
                  <p className="text-[12px] text-center max-w-[100px] break-words">
                    massa cozida e temperda com sabor do nordeste
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardapioContent;
