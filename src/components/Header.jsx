function Header() {
  return (
    <div className="poppins bg-[#2E4F4F] p-6 text-3xl text-white">
      <div className="grid lg:grid-cols-3 items-center gap-4">
        <div>
          <img className="h-[100px] hidden lg:block" src="/logo.png" alt="" />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex lato gap-7">
            <button className="hover:text-amber-300">Inicio</button>
            <button className="hover:text-amber-300">Cardápio</button>
            <button className="hover:text-amber-300">Contato</button>
            <button className="hover:text-amber-300">Sobre</button>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-[#F5F5DC] text-green-900 p-2 rounded-md hover:bg-amber-300">Faça seu pedido</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
