import { ArrowLeft, Brush } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ContextApp } from "./../context/Context-app";

function SingleContent() {
  const { FullList, FinalSingleList, FilterSingle } = useContext(ContextApp);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    FilterSingle(Number(id));
  }, []);

   if (Array.isArray(FinalSingleList)) {
    return (
      <div>
        <div className=" bg-[#F5F5DC] flex flex-col p-6 gap-6 items-center">
          <div className="Flex">
            <button
              onClick={() => navigate(-1)}
              className="text-[#2E4F4F] ml-6"
            >
              <ArrowLeft></ArrowLeft>
            </button>
          </div>
          <div className="flex justify-center flex-col sm:flex-row gap-6">
            <div className="w-[300px] flex flex-col gap-6 items-center">
              <h1 className="text-4xl poppins text-[#2E4F4F]">
                {FinalSingleList[0].title}
              </h1>
              <p className="text-justify">{FinalSingleList[0].description}</p>
            </div>
            <img
              className="sm:h-[300px] h-[300px] w-[350px] sm:w-[500px]"
              src={FinalSingleList[0].img}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-6">
            <h1 className="poppins text-gray-700">55,00R$</h1>
            <button className="bg-[#2E4F4F] rounded-md p-2 text-white poppins">
              Acessar Cardapio Digital
            </button>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h1 className="poppins text-2xl">Mais Imagens</h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <img src="https://placehold.co/200" alt="" />
              <img src="https://placehold.co/200" alt="" />
              <img src="https://placehold.co/200" alt="" />
              <img src="https://placehold.co/200" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleContent;
