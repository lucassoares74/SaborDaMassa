import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextApp } from "../context/Context-app";

function Login() {
  const { setislogged } = useContext(ContextApp);
  const navigate = useNavigate();
  const usuario = "lucas";
  const senha = "Lucas3141@";
  const [userInput, setuserInput] = useState();
  const [passwordInput, setpasswordInput] = useState();
  return (
    <div className="bg-[#2E4F4F] h-screen flex justify-center items-center">
      <div className="bg-[#F5F5DC] p-6 w-[35%] h-[40%] shadow-2xl flex flex-col items-center gap-4">
        <h1 className="text-2xl poppins">Admin-Painel</h1>
        <input
          onChange={(event) => {
            setuserInput(event.target.value);
          }}
          className="bg-white p-2 border-2"
          placeholder="Usuario"
          type="text"
        />
        <input
          type="password"
          onChange={(event) => {
            setpasswordInput(event.target.value);
          }}
          placeholder="Senha"
          className="bg-white p-2 border-2"
          
        />
        <button
          onClick={() => {
            if (userInput === usuario && passwordInput === senha) {
              setislogged(true);
              navigate("/cript");
            } else {
              alert("usuario ou senha incorretos");
            }
          }}
          className="px-12 py-2 bg-[#2E4F4F] text-white hover:bg-amber-300"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default Login;
