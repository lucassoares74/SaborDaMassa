import { useContext } from "react";
import { ContextApp } from "../context/Context-app";

function Breve() {
  const { FullList } = useContext(ContextApp);
  return (
    <div className="bg-[#F5F5DC] p-4 flex h-[200px] justify-center">
      <div className=" grid lg:grid-cols-[500px_1fr]">
        <div className="flex flex-col gap-2  text-[#2E4F4F]">
          <h1 className="poppins text-[20px] font-extrabold lg:ml-3">
            Nossa Loja
          </h1>
          <p className="text-[14px] lg:ml-3 max-w-[410px] leading-relaxed text-justify">
            Localizada no coração do Pilar, em Duque de Caxias, nossa cafeteria
            é um refúgio para quem busca sabor, aconchego e boas conversas.
            Servimos cafés especiais, quitutes artesanais e aquele atendimento
            que faz você se sentir em casa. Cada detalhe é pensado com carinho
            para tornar sua experiência única.
          </p>
        </div>
        <div>
          <img className="h-[170px] hidden lg:block" src={FullList.breveimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Breve;
