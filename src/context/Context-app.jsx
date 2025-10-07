import { createContext, useState } from "react";

export const ContextApp = createContext();

export const ContextProvider = ({ children }) => {
  const [Banner, setBanner] = useState(
    "https://cdn.pixabay.com/video/2024/02/26/202004-916894674_tiny.jpg"
  );
  const [IsCollapsedMenuOpen, setIsCollapsedMenuOpen] = useState(false);
  const [BreveImg, setBreveImg] = useState(
    "https://revistaespresso.com.br/wordpress/wp-content/uploads/2020/10/image008-1024x701.jpg"
  );
  const [FeatureList, setFeatureList] = useState([
    {
      title: "Macarrão",
      description: "Massa cozida com molho de tomate e queijo.",
      img: "https://www.sabornamesa.com.br/media/k2/items/cache/58d52ea025b256e4ce8690fddc53cbd4_XL.jpg",
    },
    {
      title: "Feijoada",
      description:
        "Feijão preto com carnes variadas, servido com arroz e laranja.",
      img: "https://static.itdg.com.br/images/640-400/4183f4a52eadb0d86eed283e54e0020c/355811-original.jpg",
    },
    {
      title: "Moqueca",
      description:
        "Peixe cozido com leite de coco, azeite de dendê e pimentões.",
      img: "https://www.sabornamesa.com.br/media/k2/items/cache/77df7a7d1a333dea87cc5a7a24bfa2c8_XL.jpg",
    },
    {
      title: "Escondidinho",
      description: "Purê de mandioca recheado com carne seca desfiada.",
      img: "https://static.itdg.com.br/images/640-400/539c50423ad8da0a8dcab288bb382aa2/337965-original.jpg",
    },
  ]);

  return (
    <ContextApp.Provider
      value={{
        Banner,
        IsCollapsedMenuOpen,
        setIsCollapsedMenuOpen,
        BreveImg,
        FeatureList,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};
