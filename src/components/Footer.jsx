import { useContext } from "react";
import { Facebook, Instagram } from "lucide-react";
import { ContextApp } from "../context/Context-app";

function Footer() {
  const {FullList} = useContext(ContextApp)
  return (
    <div className="bg-[#2E4F4F] p-20 ">
      <div className="flex justify-center">
        <div className="border-t-1 border-slate-400 p-1 w-[110vh] "></div>
      </div>

      <div className="grid lg:grid-cols-3 mt-6 gap-4 lg:gap-0">
        <div className="flex flex-col lg:items-center text-[12px]">
          <h1 className=" poppins text-white">
            localização e informações
          </h1>
          <h1 className=" poppins text-white">CEP: 25225-000</h1>
          <h1 className=" poppins text-white">ENDEREÇO: RUA DA FORTUNA</h1>
          <h1 className=" poppins text-white">NUMERO: 67</h1>
          <h1 className=" poppins text-white">CNPJ: 2000/000-000</h1>
          <h1 className=" poppins text-white">
            NUMERO DE TELEFONE: 21-97023-1071
          </h1>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-2xl poppins text-white">Redes sociais</h1>
          <div className="flex gap-2 text-white">
            <Instagram></Instagram>
            <Facebook></Facebook>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <h1 className="poppins text-2xl text-white">Chefe</h1>
            <img
              className="h-[120px] rounded-full"
              src={FullList.ChefInfo.img}
              alt=""
            />
            <h1 className="text-white poppins">{FullList.ChefInfo.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
