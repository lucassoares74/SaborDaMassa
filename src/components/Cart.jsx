import { useContext } from "react";
import { ContextApp } from "../context/Context-app";
import { Trash2 } from "lucide-react";

function Cart() {
  const { IsCartOpen, CartList, setCartList, TotalValue } =
    useContext(ContextApp);

  function Decrease(b) {
    setCartList((prev) => ({
      ...prev,
      items: prev.items.map((item) => {
        if (item.id === b.id && item.qnt > 0) {
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
  return (
    <div
      className={`bg-[#F5F5DC] rounded-md p-4  sm:w-[20%] h-screen-min absolute sm:top-20 top-20.5 right-0 z-50 transform ${
        IsCartOpen ? "" : "hidden"
      }`}
    >
      <div className="flex flex-col gap-2">
        {CartList.items.map((a) => {
          return (
            <div className="grid grid-cols-2 gap-2 items-center">
              <div>
                <img src={a.img} alt="" />
              </div>
              <div className="flex flex-col gap-4">
                <h1>{a.title}</h1>
                <div className="flex gap-6 justify-center">
                  <div className="flex gap-4 font-extrabold poppins">
                    <button
                      onClick={() => {
                        setCartList((prev) => ({
                          ...prev,
                          items: prev.items.map((item) => {
                            if (item.id === a.id) {
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
                    onClick={() => {
                      setCartList((prev) => ({
                        ...prev,
                        items: prev.items.filter((item) => item.id !== a.id),
                      }));
                    }}
                  >
                    <Trash2></Trash2>
                  </button>
                </div>
                <h1>{a.value}</h1>
              </div>
            </div>
          );
        })}

        <div className="flex justify-center">
          <h1>Valor Total:{" " + TotalValue}</h1>
        </div>

        <div className="flex justify-center ">
          <button className="p-2 bg-[#2E4F4F] rounded-md hover:bg-amber-300 text-white">
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
