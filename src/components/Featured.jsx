import { useContext } from "react";
import { ContextApp } from "../context/Context-app";
import { Link } from "react-router-dom";

function Featured() {
    const {FeatureList} = useContext(ContextApp)
  return (
    <div className="bg-[#2E4F4F] p-6">
      <div className="flex flex-col gap-8">
        <div className="flex justify-center">
          <h1 className="poppins text-2xl font-extrabold text-white">
            Pratos em Destaque
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-4 gap-2">
           {FeatureList.map((a)=>{
            return( <div className="bg-[#F5F5DC] p-6 shadow-2xl shadow-black hover:bg-amber-300">
              <div className="flex flex-col items-center gap-1">
                <img
                  className="h-[130px] w-[130px] rounded-full border-2"
                  src={a.img}
                  alt=""
                />
                <h1 className="poppins font-bold">{a.title}</h1>
                <p className="text-[12px] text-center max-w-[100px] break-words">{a.description}</p>
              </div>
            </div>)
           })}
          </div>
        </div>
        <div className="flex justify-center">
          <button className="poppins font-bold bg-[#F5F5DC] p-2 hover:bg-amber-300"> <Link to="/Cardapio">Ver Cardapio Completo</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
