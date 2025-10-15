import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const ContextApp = createContext();

export const ContextProvider = ({ children }) => {
  const [AllLoaded, setAllLoaded] = useState(false);
  const location = useLocation();
  const [FullList, setFullList] = useState();

  useEffect(() => {
    axios
      .get("https://68ec2acfeff9ad3b14016f84.mockapi.io/full/all")
      .then((response) => {
        console.log(response.data[0]);
        setFullList(response.data[0]);
        setAllLoaded(true);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  const [FinalList, setFinalList] = useState([]);
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
  const [IsCartOpen, setIsCartOpen] = useState(false);
  const [TotalValue, setTotalValue] = useState(0);
  const [CartList, setCartList] = useState({
    items: [],
  });
  const [islogged, setislogged] = useState(false);

  useEffect(() => {
    if (FullList) {
      setFinalList(FullList.produtos);
    }
  }, [FullList]);

  useEffect(() => {
    let newValue = 0;
    CartList.items.map((a) => {
      newValue = newValue + a.value;
    });
    setTotalValue(newValue);
  }, [CartList.items]);

  useEffect(() => {
    console.log("Valor total atualizado:", TotalValue);
  }, [TotalValue]);

  useEffect(() => {
    if (!FullList) {
      return;
    }
    setFinalList(FullList.produtos);
    setPaginaAtual(1);
    setIsCartOpen(false);
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
  if (AllLoaded) {
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
          IsCartOpen,
          setIsCartOpen,
          CartList,
          setCartList,
          TotalValue,
          islogged,
          setislogged,
          setFullList,
        }}
      >
        {children}
      </ContextApp.Provider>
    );
  } else {
    return <div></div>;
  }
};
