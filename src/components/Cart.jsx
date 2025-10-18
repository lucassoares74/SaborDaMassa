import { useContext, useRef, useEffect, useState, use } from "react";
import { ContextApp } from "../context/Context-app";
import { Trash2 } from "lucide-react";

function Cart() {

  const dataFormatada = new Date().toLocaleString();
  const divRef = useRef(null);
  const { IsCartOpen, CartList, setCartList, TotalValue, setIsCartOpen } =
    useContext(ContextApp);
  let sendText = `Seu pedido sabor da massa: ${dataFormatada} \n`;
  const [Payform, setPayform] = useState("");
  const [troco, settroco] = useState(0);
  const [logistica, setlogistica] = useState("");
  const [rua, setrua] = useState("");
  const [bairro, setbairro] = useState("");
  const [Numero, setNumero] = useState("");
  const [namepedido, setnamepedido] = useState("");
  const [Valordaentrega, setValordaentrega] = useState(0);


  function Enviar_pedido() {
    sendText = `*Seu pedido sabor da massa:* ${dataFormatada} \n`;
    CartList.items.map((a) => {
      sendText += `${a.qnt}x ${a.title} ${a.value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}................\n` + `_${a.adicional[0].slice(1).join("\n")}_ \n`;

    });
    sendText =
      sendText +
      `*Cliente:* ${namepedido} \n` +
      `*Forma de pagamento:* ${Payform}\n` +
      `*SubTotal:* ${TotalValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })} \n` +
      `*Entrega:* ${Valordaentrega.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })} \n` +
      `*Total:* ${(TotalValue + Valordaentrega).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })} \n` +
      `*Valor Pago* ${
        troco === 0
          ? TotalValue.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          : Number(troco).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
      } \n` +
      `*Troco:* ${
        troco - TotalValue > 0
          ? (troco - TotalValue).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          : ""
      } \n` +
      `*Logistica:* ${
        logistica === "Retirada"
          ? "retirada"
          : "Entrega " + rua + " n: " + Numero + " , " + bairro
      }`;
    console.log(sendText);
  }

  useEffect(() => {
    function handleClickFora(event) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    }

    if (IsCartOpen) {
      document.addEventListener("mousedown", handleClickFora);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickFora);
    };
  }, [IsCartOpen]);

  function Decrease(b) {
    setCartList((prev) => ({
      ...prev,
      items: prev.items.map((item) => {
        if (item.id === b.id && item.qnt > 1) {
          const novaQnt = item.qnt - 1;
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

  function _delete(a) {
    setCartList((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== a.id),
    }));
  }

  function increase(b) {
    setCartList((prev) => ({
      ...prev,
      items: prev.items.map((item) => {
        if (item.id === b.id) {
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

  function finalizarCompras() {
    if (CartList.items.length > 0) {
      if (namepedido !== "") {
        if (logistica !== "") {
          if ((rua && Numero && bairro !== "") || logistica === "Retirada") {
            if (Payform !== "") {
              if (Payform === "Dinheiro") {
                if (troco - TotalValue > 0 || troco === 0) {
                  Enviar_pedido();
                  window.open(
                    `https://wa.me/5521970231071?text=${encodeURIComponent(
                      sendText
                    )}`,
                    "_blank"
                  );
                } else {
                  alert("Troco Invalido!");
                }
              } else {
                Enviar_pedido();
                window.open(
                  `https://wa.me/5521970231071?text=${encodeURIComponent(
                    sendText
                  )}`,
                  "_blank"
                );
              }
            } else {
              alert("selecione um metodo de pagamento!");
            }
          } else {
            alert("Digite o Endereço");
          }
        } else {
          alert("Selecione Uma forma de entrega!");
        }
      } else {
        alert("Digite Seu nome");
      }
    } else {
      alert("selecione pelo menos um item!");
    }
  }
  return (
    <div
      ref={divRef}
      className={`bg-[#F5F5DC] border-1 rounded-md p-4 sm:w-[40%] lg:w-[20%] h-screen-min absolute sm:top-20 top-20.5  right-0 z-50 transform ${
        IsCartOpen ? "" : "hidden"
      }`}
    >
      <div className="flex flex-col gap-2">
        {CartList.items.map((a) => {
          return (
            <div className="flex flex-col gap-2 items-center border-1 rounded-md">
              <div>
                <img src={a.img} alt="" />
              </div>
              <div className="flex flex-col gap-1 items-center">
                <h1>{a.title}</h1>
                <div className="text-gray-600 -mt-5 text-[10px] text-justify">
                  {a.adicional[0].map((item, index) => (
                    <span key={index}>
                      {item}
                      <br />
                    </span>
                  ))}
                </div>
                <div className="flex gap-6 justify-center border-1 rounded-md">
                  <div className="flex gap-2 font-extrabold poppins">
                    <button
                      onClick={() => {
                        increase(a);
                      }}
                    >
                      +
                    </button>
                    <h1>{a.qnt}</h1>
                    <button
                      onClick={() => {
                        Decrease(a);
                      }}
                    >
                      -
                    </button>
                  </div>
                  <button
                    className="-ml-4"
                    onClick={() => {
                      _delete(a);
                    }}
                  >
                    <Trash2></Trash2>
                  </button>
                </div>
                <h1 className="text-[15px]">
                  {a.value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h1>
              </div>
            </div>
          );
        })}

        <div className="flex justify-center">
          <h1>
            Valor Total:
            {" " +
              (TotalValue + Valordaentrega).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
          </h1>
        </div>
        <div className="flex flex-col items-center border-1 rounded-md">
          <h1>Forma de Pagamento:</h1>
          <label>
            <input
              type="radio"
              name="pagamento"
              value="Cartão"
              onChange={(e) => {
                setPayform(e.target.value);
                settroco(0);
              }}
            />
            Cartão
          </label>
          <label>
            <input
              type="radio"
              name="pagamento"
              value="Dinheiro"
              onChange={(e) => {
                setPayform(e.target.value);
              }}
            />
            Dinheiro
          </label>
          <label>
            <input
              type="radio"
              name="pagamento"
              value="Pix"
              onChange={(e) => {
                setPayform(e.target.value);
                settroco(0);
              }}
            />
            Pix
          </label>
        </div>
        <div
          className={Payform === "Dinheiro" ? "flex flex-col gap-1 " : "hidden"}
        >
          {" "}
          <h1>Troco:</h1>
          <input
            onChange={(event) => {
              settroco(event.target.value);
            }}
            className="border-1 "
            type="text"
            placeholder="troco pra quanto?"
            value={troco}
          />
        </div>
        <div className="flex gap-2 justify-center border-1 rounded-md ">
          <label>
            <input
              onChange={(event) => {
                setlogistica(event.target.value);
                setValordaentrega(3);
              }}
              type="radio"
              value="Entrega"
              name="logistica"
            />
            Entrega
          </label>
          <label>
            <input
              onChange={(event) => {
                setlogistica(event.target.value);
                setValordaentrega(0);
              }}
              type="radio"
              value="Retirada"
              name="logistica"
            />
            Retirada
          </label>
        </div>
        <div
          className={logistica === "Entrega" ? "flex gap-1 flex-col" : "hidden"}
        >
          <h1>Endereço:</h1>
          <input
            onChange={(event) => {
              setbairro(event.target.value);
            }}
            className="border-1"
            type="text"
            placeholder="Bairro:"
          />
          <input
            onChange={(event) => {
              setrua(event.target.value);
            }}
            className="border-1"
            type="text"
            placeholder="rua:"
          />
          <input
            onChange={(event) => {
              setNumero(event.target.value);
            }}
            className="border-1"
            type="text"
            placeholder="Numero:"
          />
        </div>
        <div className="flex gap-1">
          <h1>Nome:</h1>
          <input
            onChange={(event) => {
              setnamepedido(event.target.value);
            }}
            className="border-1 rounded-md w-full"
            type="text"
          />
        </div>
        <div className="flex justify-center ">
          <button
            onClick={() => {
              finalizarCompras();
            }}
            className="p-2 bg-[#2E4F4F] rounded-md hover:bg-amber-300 text-white"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
