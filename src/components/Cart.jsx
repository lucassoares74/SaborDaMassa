import { useContext } from "react";
import { ContextApp } from "../context/Context-app";


function Cart() {
  const {IsCartOpen} = useContext(ContextApp)
  return <div className={`bg-[#F5F5DC] rounded-md p-4  w-[20%] h-screen-min absolute sm:top-27 top-20.5 right-0 z-50 transform ${
        IsCartOpen ? "" : "hidden"
      }`}>
        <div></div>
      </div>;
}

export default Cart;

