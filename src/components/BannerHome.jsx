function BannerHome() {
  return (
    <div className="">
      <div class="relative w-full h-[500px] bg-gradient-to-r from-green-600 via-white to-green-600 overflow-hidden flex items-center justify-start px-8">
        <img
          src="https://cdn.pixabay.com/video/2024/02/26/202004-916894674_tiny.jpg"
          alt="Prato de massa"
          class="absolute right-0 top-0 w-full h-full object-cover opacity-100 z-0"
        />

        <div class="absolute w-[90%] inset-0 bg-gradient-to-r from-[#2E4F4F]  z-10 opacity-90"></div>

        <div class="relative z-20 max-w-xl text-left">
          <h1 class="text-4xl font-extrabold poppins text-white mb-4">
            Sabor da Massa
          </h1>
          <p class="text-lg text-gray-400 mb-6">
            Tradicionalmente fresco, moderadamente delicioso.
          </p>
          <a
            href="#cardapio"
            class="inline-block bg-[#F5F5DC] hover:bg-amber-300 text-green-900 lato py-2 px-6 rounded-lg transition duration-300"
          >
            Ver Cardápio
          </a>
        </div>
      </div>
    </div>
  );
}

export default BannerHome;
