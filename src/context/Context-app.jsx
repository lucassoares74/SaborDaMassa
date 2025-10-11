import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ContextApp = createContext();

export const ContextProvider = ({ children }) => {
  const location = useLocation();
  const [FullList, setFullList] = useState({
    produtos: [
      {
        id: 1,
        title: "Feijoada",
        img: "https://picsum.photos/seed/feijoada/300/200",
        description:
          "Prato icônico com feijão preto e diversas carnes de porco e boi. Geralmente servido com arroz, couve e laranja.",
        category: "Massas",
      },
      {
        id: 2,
        title: "Acarajé",
        img: "https://picsum.photos/seed/acaraje/300/200",
        description:
          "Bolinho de feijão-fradinho frito no azeite de dendê, recheado com vatapá, camarão e salada. Típico da Bahia.",
        category: "Bebidas Quentes",
      },
      {
        id: 3,
        title: "Pão de Queijo",
        img: "https://picsum.photos/seed/paodequeijo/300/200",
        description:
          "Pequeno pão feito com polvilho (mandioca) e queijo. Crocante por fora e macio por dentro, popular em Minas Gerais.",
        category: "Doces",
      },
      {
        id: 4,
        title: "Churrasco",
        img: "https://picsum.photos/seed/churrasco/300/200",
        description:
          "Carne bovina, suína ou de frango assada na brasa, temperada com sal grosso. Um clássico gaúcho.",
        category: "Sanduiches",
      },
      {
        id: 5,
        title: "Moqueca de Peixe",
        img: "https://picsum.photos/seed/moqueca/300/200",
        description:
          "Ensopado de peixe com leite de coco, azeite de dendê (opcional) e vegetais. Pode ser baiana ou capixaba.",
        category: "Bebidas frias",
      },
      {
        id: 6,
        title: "Brigadeiro",
        img: "https://picsum.photos/seed/brigadeiro/300/200",
        description:
          "Doce cremoso e redondo feito com leite condensado, chocolate em pó e manteiga, coberto com granulado.",
        category: "Doces",
      },
      {
        id: 7,
        title: "Coxinha",
        img: "https://picsum.photos/seed/coxinha/300/200",
        description:
          "Salgado com massa à base de batata e recheio de frango desfiado, moldado em formato de 'coxa' e frito.",
        category: "Salgados",
      },
      {
        id: 8,
        title: "Tapioca",
        img: "https://picsum.photos/seed/tapioca/300/200",
        description:
          "Panqueca feita com goma de mandioca (tapioca), pode ter recheios doces ou salgados. Muito consumida no Nordeste.",
        category: "Massas",
      },
      {
        id: 9,
        title: "Pastel de Feira",
        img: "https://picsum.photos/seed/pastel/300/200",
        description:
          "Massa fina e crocante recheada com carne, queijo ou outros ingredientes, frita em óleo quente.",
        category: "Salgados",
      },
      {
        id: 10,
        title: "Café com Leite",
        img: "https://picsum.photos/seed/cafecomleite/300/200",
        description:
          "Mistura clássica de café preto com leite quente, muito consumida no café da manhã.",
        category: "Bebidas Quentes",
      },
      {
        id: 11,
        title: "Milkshake de Chocolate",
        img: "https://picsum.photos/seed/milkshake/300/200",
        description:
          "Bebida gelada e cremosa feita com sorvete de chocolate, leite e cobertura.",
        category: "Bebidas Frias",
      },
      {
        id: 12,
        title: "Bolo de Cenoura",
        img: "https://picsum.photos/seed/bolocenoura/300/200",
        description:
          "Bolo macio feito com cenoura, coberto com calda de chocolate.",
        category: "Doces",
      },
      {
        id: 13,
        title: "Empada de Frango",
        img: "https://picsum.photos/seed/empada/300/200",
        description:
          "Massa amanteigada recheada com frango cremoso, servida em porções individuais.",
        category: "Salgados",
      },
      {
        id: 14,
        title: "Lasanha",
        img: "https://picsum.photos/seed/lasanha/300/200",
        description:
          "Camadas de massa intercaladas com molho de carne, queijo e molho branco.",
        category: "Massas",
      },
      {
        id: 15,
        title: "Suco de Maracujá",
        img: "https://picsum.photos/seed/suco/300/200",
        description:
          "Bebida refrescante feita com polpa de maracujá, água e açúcar.",
        category: "Bebidas Frias",
      },
      {
        id: 16,
        title: "Croissant",
        img: "https://picsum.photos/seed/croissant/300/200",
        description:
          "Pão folhado francês, leve e amanteigado, pode ser recheado com queijo ou chocolate.",
        category: "Sanduiches",
      },
      {
        id: 17,
        title: "Pudim de Leite",
        img: "https://picsum.photos/seed/pudim/300/200",
        description:
          "Sobremesa cremosa feita com leite condensado, ovos e calda de açúcar.",
        category: "Doces",
      },
      {
        id: 18,
        title: "Macarrão ao Alho e Óleo",
        img: "https://picsum.photos/seed/macarrao/300/200",
        description:
          "Prato simples e saboroso com espaguete, alho dourado e azeite.",
        category: "Massas",
      },
      {
        id: 19,
        title: "Chocolate Quente",
        img: "https://picsum.photos/seed/chocolatequente/300/200",
        description:
          "Bebida quente e cremosa feita com leite e chocolate em pó ou derretido.",
        category: "Bebidas Quentes",
      },
      {
        id: 20,
        title: "Hambúrguer Artesanal",
        img: "https://picsum.photos/seed/hamburguer/300/200",
        description:
          "Sanduíche com carne grelhada, queijo, salada e molhos especiais no pão macio.",
        category: "Sanduiches",
      },
    ],
    ChefInfo: {
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRCWbJ4HzAtNq650CpHcfLtG0oNdiLccLkgeJAEUGIAIibiRVI9PSdFttZu21umWAoAH3TzPJAybcd7voH0GpWKyaFQEA0MnbYp1wuinW0",
      name: "Eric Jaquin",
    },
    banner:
      "https://cdn.pixabay.com/video/2024/02/26/202004-916894674_tiny.jpg",
    breveimg:
      "https://revistaespresso.com.br/wordpress/wp-content/uploads/2020/10/image008-1024x701.jpg",
    categorias: [
      "Massas",
      "Sanduiches",
      "Salgados",
      "Doces",
      "Bebidas Quentes",
      "Bebidas frias",
    ],
  });
  const [FinalList, setFinalList] = useState(FullList.produtos);
  const [isMenuCardapioOpen, setisMenuCardapioOpen] = useState(false);
  const [IsCollapsedMenuOpen, setIsCollapsedMenuOpen] = useState(false);
  const [FinalSingleList, setFinalSingleList] = useState();
  const [itemsPerPage, setitemsPerPage] = useState(8); // quantidade de itens por página
  const [paginaAtual, setPaginaAtual] = useState(1);
  const totalPages = Math.ceil(FinalList.length / itemsPerPage);
  const startIndex = (paginaAtual - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itensPaginados = FinalList.slice(startIndex, endIndex);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setFinalList(FullList.produtos);
    setPaginaAtual(1);
  }, [location.pathname]);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    // Limpa o listener ao desmontar
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width < 1024) {
      setitemsPerPage(9);
    } else {
      setitemsPerPage(8);
    }
  }, [width]);

  function FilterListByCategory(Category) {
    const filtred = FullList.produtos.filter((a) => a.category === Category);
    console.log(filtred);
    setFinalList(filtred);
  }
  useEffect(() => {
    setPaginaAtual(1);
  }, [FinalList]);

  function filterListByName(name) {
    const filtred = FullList.produtos.filter((a) =>
      a.title.toLowerCase().includes(name.toLowerCase())
    );
    setFinalList(filtred);
  }
  function FilterSingle(b) {
    const filtred = FullList.produtos.filter((a) => a.id === b);
    setFinalSingleList(filtred);
  }

  return (
    <ContextApp.Provider
      value={{
        IsCollapsedMenuOpen,
        setIsCollapsedMenuOpen,
        isMenuCardapioOpen,
        setisMenuCardapioOpen,
        FinalList,
        setFinalList,
        FilterListByCategory,
        filterListByName,
        itensPaginados,
        paginaAtual,
        setPaginaAtual,
        totalPages,
        FullList,
        FinalSingleList,
        FilterSingle,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};
