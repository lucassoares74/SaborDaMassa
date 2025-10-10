import { ArrowLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function SingleContent() {
  const [searchParams] = useSearchParams();
  // Pegando um parâmetro específico, por exemplo ?id=123
  const id = searchParams.get("id");

  const navigate = useNavigate;
  return (
    <div>
      <div className=" bg-[#F5F5DC] flex flex-col p-6 gap-6">
        <div className="text-[#2E4F4F] ml-6">
          <ArrowLeft /> Voltar
        </div>
        <div className="flex justify-center flex-col sm:flex-row">
          <div className="w-[300px] flex flex-col gap-6 ">
            <h1 className="text-4xl poppins text-[#2E4F4F]"> Nome Do Prato</h1>
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <img
            className="sm:h-[300px] h-[300px] w-[350px] sm:w-[500px]"
            src="https://placehold.co/800x600"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center gap-6">
          <h1 className="poppins text-gray-700">55,00R$</h1>
          <button
            onClick={() => navigate(-1)}
            className="bg-[#2E4F4F] rounded-md p-2 text-white poppins"
          >
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

export default SingleContent;
