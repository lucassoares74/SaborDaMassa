import { ArrowLeft, Brush } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ContextApp } from "./../context/Context-app";

function SingleContent() {
  const {
    FullList,
    FinalSingleList,
    FilterSingle,
    setCartList,
    CartList,
    setIsCartOpen,
  } = useContext(ContextApp);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const uniqueid = Date.now() * 1000 + Math.floor(Math.random() * 1000);
  const [Adicional, setAdicional] = useState([[""], [0], [0]]);
  const [primarioLimit, setprimarioLimit] = useState(3);
  const [secundarioLimit, setsecundarioLimit] = useState(2);

  function atualizarAdicional(id, checado) {
    setAdicional((prev) => {
      const novo = [...prev];

      if (checado) {
        // Adiciona o id se ainda não estiver presente
        if (!novo[2].includes(id)) {
          novo[2] = [...novo[2], id];
        }
      } else {
        // Remove o id se estiver presente
        novo[2] = novo[2].filter((item) => item !== id);
      }

      return novo;
    });
  }
  function atualizarValoresAdicionais(valor, checado) {
    setAdicional((prev) => {
      const novo = [...prev];

      if (checado) {
        // Adiciona o valor, mesmo que já exista
        novo[1] = [...novo[1], valor];
      } else {
        // Remove apenas uma ocorrência do valor
        const index = novo[1].indexOf(valor);
        if (index !== -1) {
          novo[1] = [...novo[1].slice(0, index), ...novo[1].slice(index + 1)];
        }
      }

      return novo;
    });
  }

  function atualizarAdicionalNome(nome, checado) {
    setAdicional((prev) => {
      const novo = [...prev];

      if (checado) {
        // Adiciona a string se ainda não estiver presente
        if (!novo[0].includes(nome)) {
          novo[0] = [...novo[0], nome];
        }
      } else {
        // Remove a string se estiver presente
        novo[0] = novo[0].filter((item) => item !== nome);
      }

      return novo;
    });
  }

  useEffect(() => {
    FilterSingle(Number(id));
    console.log(FinalSingleList);
  }, []);

  useEffect(() => {
    if (id === null) {
      window.location.replace("/");
    }
  }, []);

  function addcart() {
    setIsCartOpen(true);
    const newItem = {
      id:
        FinalSingleList[0].id +
        Adicional[1].reduce((acc, a) => acc + a * (100, 0)) +
        Adicional[2].reduce((acc, a) => acc + a),
      qnt: 1,
      img: FinalSingleList[0].img,
      title: FinalSingleList[0].title,
      value:
        FinalSingleList[0].value + Adicional[1].reduce((acc, a) => acc + a, 0),
      originalValue:
        FinalSingleList[0].value + Adicional[1].reduce((acc, a) => acc + a, 0),
      adicional: Adicional,
      ov: FinalSingleList[0].value,
    };
    let hasItem = false;
    CartList.items.map((a) => {
      if (
        a.id ===
        FinalSingleList[0].id +
          Adicional[1].reduce((acc, a) => acc + a * (100, 0)) +
          Adicional[2].reduce((acc, a) => acc + a)
      ) {
        hasItem = true;
      }
    });
    console.log(hasItem);
    if (hasItem === false) {
      setCartList((prev) => ({
        ...prev,
        items: [...prev.items, newItem],
      }));
    } else {
      setCartList((prev) => ({
        ...prev,
        items: prev.items.map((item) => {
          if (
            item.id ===
            FinalSingleList[0].id +
              Adicional[1].reduce((acc, a) => acc + a * (100, 0)) +
              Adicional[2].reduce((acc, a) => acc + a)
          ) {
            const novaQnt = item.qnt + 1;
            return {
              ...item,
              qnt: novaQnt,
              value: item.originalValue * novaQnt,
            };
          }
          return item;
        }),
      }));
    }
  }

  if (Array.isArray(FinalSingleList)) {
    return (
      <div className="flex bg-[#FAFAE0]  justify-center">
        <div className=" bg-[#F5F5DC]  flex flex-col p-6 gap-6 items-center sm:w-[90%] lg:w-[70%] shadow-2xl">
          <div className="Flex">
            <button
              onClick={() => navigate(-1)}
              className="text-[#2E4F4F] ml-6 hover:bg-amber-300 rounded-md "
            >
              <ArrowLeft></ArrowLeft>
            </button>
          </div>
          <div className="flex justify-center flex-col sm:flex-row gap-6 ">
            <div className="sm:w-[300px] flex flex-col gap-6 items-center ">
              <h1 className="text-4xl poppins text-[#2E4F4F]">
                {FinalSingleList[0].title}
              </h1>
              <p className="sm:text-justify  lg:tracking-normal tracking-tight">
                {FinalSingleList[0].description}
              </p>
              <p>Serve até: {FinalSingleList[0].serve} pessoas</p>
            </div>
            <img
              className="sm:h-[300px] h-[300px] w-[350px] sm:w-[500px]"
              src={FinalSingleList[0].img}
              alt=""
            />
          </div>
          <div className="flex items-center gap-6 ">
            <h1 className="poppins text-gray-700 font-extrabold text-2xl">
              {FinalSingleList[0].value.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </h1>
            <button
              onClick={() => {
                addcart();
              }}
              className="bg-[#2E4F4F] rounded-md p-2 text-white poppins hover:bg-amber-300"
            >
              Adicionar ao carrinho
            </button>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h1 className="poppins text-2xl text-[#2E4F4F]">
              Adicionais Primarios
            </h1>
            {FinalSingleList[0].adicionais_um.map((a, i) => {
              return (
                <div className="flex gap-2">
                  <input
                    onChange={(event) => {
                      atualizarAdicional(i + 1, event.target.checked);
                      atualizarValoresAdicionais(a.value, event.target.checked);
                      atualizarAdicionalNome(a.item, event.target.checked);
                      console.log(Adicional);
                    }}
                    type="checkbox"
                  />
                  <h1>
                    +
                    {a.value.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </h1>
                  <h1>{a.item}</h1>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h1 className="poppins text-2xl text-[#2E4F4F]">
              Adicionais Secundarios
            </h1>
            {FinalSingleList[0].adicionais_dois.map((a, i) => {
              return (
                <div className="flex gap-2">
                  <input
                    onChange={(event) => {
                      atualizarAdicional(i + 4, event.target.checked);
                      atualizarValoresAdicionais(a.value, event.target.checked);
                      atualizarAdicionalNome(a.item, event.target.checked);
                      console.log(Adicional);
                    }}
                    type="checkbox"
                  />
                  <h1>
                    +
                    {a.value.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </h1>
                  <h1>{a.item}</h1>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-center gap-4 text-[#2E4F4F]">
            <h1 className="poppins text-2xl">Mais Imagens</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {FinalSingleList[0].galery.map((a) => {
                return <img src={a} alt="" />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleContent;
