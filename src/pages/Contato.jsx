import Header from "./../components/Header";
import Footer from "./../components/Footer";
import CollapsedMenu from "../components/CollapsedMenu";
import Cart from "./../components/Cart";
import { useContext } from "react";
import { ContextApp } from "../context/Context-app";

function Contato() {
  const { FullList } = useContext(ContextApp);
  return (
    <div>
      <Cart />
      <CollapsedMenu />
      <Header></Header>
      <div className="bg-[#F5F5DC] text-[#2E4F4F] p-6 flex  sm:justify-center overflow-x-hidden min-h-screen">
        <div className=" flex flex-col items-center p-2 sm:w-[70%]">
          <h1 className="text-3xl poppins">Fale conosco</h1>
          <p className="poppins">Estamos aqui para te atender</p>
          <div className="flex lg:flex-row flex-col">
            <img
              className="w-[300px] sm:w-[400px]"
              src={FullList.contatoimg}
              alt=""
            />
            <div>
              <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[138px_1fr] poppins  p-2 h-[235px] w-full">
                <div className="flex font-extrabold flex-col">
                  <h1 className="sm:text-2xl ">Whatsapp:</h1>
                  <h1 className="sm:text-2xl ">Email:</h1>
                  <h1 className="sm:text-2xl ">Endereço:</h1>
                  <h1 className="sm:text-2xl ">Bairro:</h1>
                  <h1 className="sm:text-2xl ">Cidade:</h1>
                  <h1 className="sm:text-2xl ">CEP:</h1>
                </div>
                <div className=" ">
                  <h1 className="p-1 ">(21)99824-1998</h1>
                  <h1 className="p-1 ">Sabordamassa@gmail.com</h1>
                  <h1 className="p-1 ">Rua da Fortuna nº67</h1>
                  <h1 className="p-1 ">Pilar</h1>
                  <h1 className="p-1 ">Duque de Caixas</h1>
                  <h1 className="p-1 ">25225-660</h1>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="bg-[#2E4F4F] p-2 rounded-md hover:bg-amber-300 text-white">
                  Mandar Mensagem
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Contato;
