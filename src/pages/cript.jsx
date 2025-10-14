import { useContext } from "react";
import { ContextApp } from "../context/Context-app";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function Cript() {
  const { islogged, setislogged, FullList, setFullList } =
    useContext(ContextApp);
  let sendList = {};
  let bannerurl = FullList.banner;
  let breveurl = FullList.breveimg;
  let contatourl = FullList.contatoimg;
  let chefname = FullList.ChefInfo.name;
  let chfimg = FullList.ChefInfo.img;
  let categorias = FullList.categorias;

  let addtitle = "";
  let adddesc = "";
  let addvalue = "";
  let addserve = "";
  let addimg = "";
  let addcat = "";

  const atualizarProduto = async () => {
    try {
      const resposta = await axios.put(
        `https://68ec2acfeff9ad3b14016f84.mockapi.io/full/all/1`, // substitua pela URL real da sua API
        FullList
      );
      console.log("Produto atualizado:", resposta.data);
      alert("API Atulizado com Sucesso");
    } catch (erro) {
      console.error("Erro ao atualizar:", erro);
      alert("Erro ao Atualizar Api");
    }
  };

  function salvar(params) {
    const newList = {
      ...FullList,
      banner: bannerurl,
      breveimg: breveurl,
      contatoimg: contatourl,
      ChefInfo: { ...FullList.ChefInfo, img: chfimg, name: chefname },
      categorias: categorias,
    };
    setFullList(newList);
  }
  function _delete(id) {
    const newList = {
      ...FullList,
      produtos: FullList.produtos.filter((produto) => produto.id !== id),
    };
    setFullList(newList);
    console.log(FullList);
  }

  if (islogged) {
    return (
      <div className="bg-[#2E4F4F] min-h-screen flex justify-center">
        <div className="bg-[#F5F5DC] p-6 w-[80%] flex flex-col gap-6">
          <button
            onClick={() => {
              atualizarProduto();
            }}
            className="bg-purple-950 text-white"
          >
            Subir API 💾
          </button>
          <div className="bg-white flex flex-col gap-6 p-4">
            <h1 className="text-2xl">Informações Gerais</h1>
            <div className="">
              <h1>Banner Url:</h1>
              <input
                placeholder={bannerurl}
                className="border-1 rounded-md w-full"
                type="text"
                onChange={(event) => {
                  bannerurl = event.target.value;
                }}
              />
            </div>
            <div className="">
              <h1>imagem Breve Url:</h1>
              <input
                placeholder={breveurl}
                className="border-1 rounded-md w-full "
                type="text"
                onChange={(event) => {
                  breveurl = event.target.value;
                }}
              />
            </div>
            <div className="  ">
              <h1>Imagem de contato Url:</h1>
              <input
                placeholder={contatourl}
                className="border-1 rounded-md w-full"
                type="text"
                onChange={(event) => {
                  contatourl = event.target.value;
                }}
              />
            </div>
            <div className=" ">
              <h1>Nome do chef:</h1>
              <input
                placeholder={chefname}
                className="border-1 rounded-md w-full"
                type="text"
                onChange={(event) => {
                  chefname = event.target.value;
                }}
              />
            </div>
            <div className=" ">
              <h1>Imagem chefe url:</h1>
              <input
                placeholder={chfimg}
                className="border-1 rounded-md w-full "
                type="text"
                onChange={(event) => {
                  chfimg = event.target.value;
                }}
              />
            </div>
            <div className=" ">
              <h1>Categorias:</h1>
              <input
                placeholder={FullList.categorias.map((a) => a)}
                className="border-1 rounded-md w-full "
                type="text"
                onChange={(event) => {
                  categorias = event.target.value.split(",");
                  console.log(categorias);
                }}
              />
            </div>
            <button
              onClick={() => {
                salvar();
                alert("Informações Atulizadas com Sucesso");
              }}
              className="bg-green-400"
            >
              Salvar
            </button>
          </div>
          {FullList.produtos.map((a) => {
            let temptitle = a.title;
            let tempdesc = a.description;
            let tempvalue = a.value;
            let tempserve = a.serve;
            let tempimg = a.img;
            let tempcat = a.category;
            return (
              <div className="bg-white p-6 flex flex-col gap-4">
                <h1 className="text-2xl">Produtos</h1>
                <div className="">
                  <h1 className="">titulo:</h1>
                  <input
                    onChange={(event) => {
                      temptitle = event.target.value;
                      console.log(temptitle);
                    }}
                    placeholder={a.title}
                    className="w-full border-1 rounded-md"
                    type="text"
                  />
                </div>
                <div className="">
                  <h1 className="">Descrição:</h1>
                  <input
                    onChange={(event) => {
                      tempdesc = event.target.value;
                      console.log(tempdesc);
                    }}
                    placeholder={a.description}
                    className="w-full border-1 rounded-md"
                    type="text"
                  />
                </div>
                <div className="">
                  <h1 className="">Valor:</h1>
                  <input
                    onChange={(event) => {
                      tempvalue = event.target.value;
                      console.log(tempvalue);
                    }}
                    placeholder={a.value}
                    className="w-full border-1 rounded-md"
                    type="text"
                  />
                </div>
                <div className="">
                  <h1 className="">Categoria:</h1>
                  <input
                    onChange={(event) => {
                      tempcat = event.target.value;
                      console.log(tempcat);
                    }}
                    placeholder={a.category}
                    className="w-full border-1 rounded-md"
                    type="text"
                  />
                </div>
                <div className="">
                  <h1 className="">Serve:</h1>
                  <input
                    onChange={(event) => {
                      tempserve = event.target.value;
                      console.log(tempserve);
                    }}
                    placeholder={a.serve}
                    className="w-full border-1 rounded-md"
                    type="text"
                  />
                </div>
                <div className="  flex flex-col gap-2">
                  <h1 className="">Img:</h1>
                  <input
                    onChange={(event) => {
                      tempimg = event.target.value;
                      console.log(tempimg);
                    }}
                    placeholder={a.img}
                    className="w-full border-1 rounded-md"
                    type="text"
                  />
                  <img className="w-[150px]" src={a.img} alt="" />
                </div>
                <button
                  onClick={() => {
                    const newList = {
                      ...FullList,
                      produtos: FullList.produtos.map((b) => {
                        if (b.id === a.id) {
                          return {
                            ...b,
                            title: temptitle,
                            description: tempdesc,
                            value: Number(tempvalue),
                            category: tempcat,
                            serve: tempserve,
                            img: tempimg,
                          };
                        }
                        return b;
                      }),
                    };
                    setFullList(newList);
                    alert("Produto Atulizado com Sucesso");
                  }}
                  className="bg-green-400 px-6 py-2"
                >
                  Salvar
                </button>
                <button
                  onClick={() => {
                    _delete(a.id);
                  }}
                  className="bg-red-500 px-6 py-2 "
                >
                  Deletar
                </button>
              </div>
            );
          })}
          <div className="bg-white p-6 flex flex-col gap-2">
            <h1 className="text-2xl">Adicionar</h1>
            <div>
              <h1>titulo</h1>
              <input
                onChange={(event) => {
                  addtitle = event.target.value;
                }}
                className="w-full border-2"
                type="text"
              />
            </div>
            <div>
              <h1>Descrição</h1>
              <input
                onChange={(event) => {
                  adddesc = event.target.value;
                }}
                className="w-full border-2"
                type="text"
              />
            </div>
            <div>
              <h1>Valor</h1>
              <input
                onChange={(event) => {
                  addvalue = event.target.value;
                }}
                className="w-full border-2"
                type="text"
              />
            </div>
            <div>
              <h1>Serve</h1>
              <input
                onChange={(event) => {
                  addserve = event.target.value;
                }}
                className="w-full border-2"
                type="text"
              />
            </div>
            <div>
              <h1>Img</h1>
              <input
                onChange={(event) => {
                  addimg = event.target.value;
                }}
                className="w-full border-2"
                type="text"
              />
            </div>
            <div>
              <h1>Categoria</h1>
              <input
                onChange={(event) => {
                  addcat = event.target.value;
                }}
                className="w-full border-2"
                type="text"
              />
            </div>
            <button
              onClick={() => {
                const newProduc = {
                  value: Number(addvalue),
                  id: Date.now() + Math.floor(Math.random() * 100000),
                  title: addtitle,
                  img: addimg,
                  description: adddesc,
                  category: addcat,
                  serve: Number(addserve),
                };
                const newList = {
                  ...FullList,
                  produtos: [...FullList.produtos, newProduc],
                };
                setFullList(newList);
              }}
              className="bg-green-500 w-full"
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Você não está logado</div>;
  }
}

export default Cript;
