import { useContext } from "react";
import { ContextApp } from "../context/Context-app";
import { Link } from "react-router-dom";

function Featured() {
  const { FeatureList } = useContext(ContextApp);

  return (
    <div className="bg-[#2E4F4F] p-6">
      <div className="flex flex-col gap-15">
        <div className="flex justify-center">
          <h1 className="poppins text-2xl font-extrabold text-white">
            Pratos em Destaque
          </h1>
        </div>
        <div className="flex justify-center text-[#2E4F4F]">
          <div className="grid  lg:grid-cols-4 gap-10  ">
            {FeatureList.map((a) => {
              return (
                <div
                  className={` rounded-md shadow-2xl shadow-black  bg-center bg-cover grid grid-rows-2 h-[190px] w-[210px] hover:scale-110`}
                  style={{ backgroundImage: `url(${a.img})` }}
                >
                  <div></div>
                  <div className="bg-gradient-to-t from-[#F5F5DC] via-[#F5F5DC] to-transparent h-30  flex rounded-md justify-center py-3">
                    <div className="flex flex-col items-center justify-end-safe">
                      <h1 className="poppins font-extrabold ">{a.title}</h1>
                      <p className="text-[10px] leading-2  text-center max-w-[150px] break-words">
                        {a.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center">
          <button className="poppins rounded-md font-bold bg-[#F5F5DC] p-2 hover:bg-amber-300 mt-5">
            <Link to="/Cardapio">Ver Cardapio Completo</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
