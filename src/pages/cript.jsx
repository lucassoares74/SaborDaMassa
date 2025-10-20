import { useContext, useRef, useState } from "react";
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

  const [tur, settur] = useState();
  let addtitle = "";
  let adddesc = "";
  let addvalue = "";
  let addserve = "";
  let addimg = "";
  let addcat = "";
  let addgalery = "";
  let addprimaryisneeded = true;
  let addsecundaryisneeded = true;
  let addprimaryname = "";
  let addpriaryvlaue = "";
  let addsecundaryname = "";
  let addsecundaryvalue = "";
  let addprimario_limit = 3;
  let addsecundario_limit = 3;

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
            let tempgallery = a.galery;
            let tempprimariosname = a.adicionais_um.map((a) => a.item);
            let tempsecundariosname = a.adicionais_dois.map((a) => a.item);
            let tempprimariosvalue = a.adicionais_um.map((a) => a.value);
            let tempsecundariosvalue = a.adicionais_dois.map((a) => a.value);
            let add1 = a.addprimarios;
            let add2 = a.addsecundario;
            let tempprimario_limit = a.primario_limit;
            let tempsecundario_limit = a.secundario_limit;

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
                  <div>
                    <h1>Galery</h1>
                    <input
                      onChange={(event) => {
                        tempgallery = event.target.value.split(",");
                        console.log(tempgallery);
                      }}
                      type="text"
                      className="w-full border-1 rounded-md"
                      placeholder={a.galery}
                    />
                  </div>
                  <div>
                    <h1>Adicionais?</h1>
                    <div>
                      <h1>Primario</h1>
                      <button
                        onClick={() => {
                          add1 = true;
                          alert(add1);
                        }}
                        className="bg-green-400"
                      >
                        Sim
                      </button>
                      <button
                        onClick={() => {
                          add1 = false;
                          alert(add1);
                        }}
                        className="bg-red-400"
                      >
                        Não
                      </button>
                    </div>
                    <div>
                      <h1>Secundario</h1>{" "}
                      <button
                        onClick={() => {
                          add2 = true;
                          alert(add2);
                        }}
                        className="bg-green-400"
                      >
                        Sim
                      </button>
                      <button
                        onClick={() => {
                          add2 = false;
                          alert(add2);
                        }}
                        className="bg-red-400"
                      >
                        Não
                      </button>
                    </div>
                    <div>
                      <h1>Primario:</h1>
                      <input
                        onChange={(event) => {
                          tempprimariosname = event.target.value.split(",");
                        }}
                        className="border-1 rounded-md w-full"
                        placeholder={tempprimariosname}
                        type="text"
                      />
                      <input
                        onChange={(event) => {
                          tempprimariosvalue = event.target.value.split(",");
                        }}
                        className="border-1 rounded-md w-full"
                        placeholder={tempprimariosvalue}
                        type="text"
                      />
                    </div>
                    <div>
                      <h1>Secundario:</h1>{" "}
                      <input
                        onChange={(event) => {
                          tempsecundariosname = event.target.value.split(",");
                        }}
                        className="border-1 rounded-md w-full"
                        placeholder={tempsecundariosname}
                        type="text"
                      />
                      <input
                        onChange={(event) => {
                          tempsecundariosvalue = event.target.value.split(",");
                        }}
                        className="border-1 rounded-md w-full"
                        placeholder={tempsecundariosvalue}
                        type="text"
                      />
                    </div>
                    <div>
                      <h1>Primario limit:</h1>
                      <input
                        placeholder={tempprimario_limit}
                        onChange={(event) => {
                          tempprimario_limit = event.target.value;
                        }}
                        className="border-1"
                        type="text"
                      />
                      <h1>Secundario limit:</h1>
                      <input
                        placeholder={tempsecundario_limit}
                        onChange={(event) => {
                          tempsecundario_limit = event.target.value;
                        }}
                        className="border-1"
                        type="text"
                      />
                    </div>
                  </div>
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
                            galery: tempgallery,
                            addprimarios: add1,
                            primario_limit: Number(tempprimario_limit),
                            secundario_limit: Number(tempsecundario_limit),
                            addsecundario: add2,
                            adicionais_um: tempprimariosname.map((a, i) => {
                              return {
                                item: a,
                                value: Number(tempprimariosvalue[i]),
                              };
                            }),
                            adicionais_dois: tempsecundariosname.map((a, i) => {
                              return {
                                item: a,
                                value: Number(tempsecundariosvalue[i]),
                              };
                            }),
                          };
                        }
                        return b;
                      }),
                    };
                    setFullList(newList);
                    alert("Produto Atulizado com Sucesso");
                    console.log(newList);
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
            <div>
              <h1>galery</h1>
              <input
                onChange={(event) => {
                  addgalery = event.target.value.split(",");
                }}
                className="w-full border-2"
                type="text"
              />
            </div>
            <div>
              <h1>adicionais?</h1>
              <h1>primarios:</h1>
              <button
                onClick={() => {
                  addprimaryisneeded = true;
                  alert(addprimaryisneeded);
                }}
                className="bg-green-400"
              >
                Sim
              </button>
              <button
                onClick={() => {
                  addprimaryisneeded = false;
                  alert(addprimaryisneeded);
                }}
                className="bg-red-400"
              >
                Não
              </button>
              <h1>secundarios:</h1>
              <button
                onClick={() => {
                  addsecundaryisneeded = true;
                  alert(addsecundaryisneeded);
                }}
                className="bg-green-400"
              >
                Sim
              </button>
              <button
                onClick={() => {
                  addsecundaryisneeded = false;
                  alert(addsecundaryisneeded);
                }}
                className="bg-red-400"
              >
                Não
              </button>
            </div>
            <div className="border-1 rounded-md">
              <h1>primario nome:</h1>
              <input
                onChange={(event) => {
                  addprimaryname = event.target.value.split(",");
                }}
                className="border-2 w-full"
                type="text"
              />
              <h1>primario valores</h1>
              <input
                onChange={(event) => {
                  addpriaryvlaue = event.target.value.split(",");
                }}
                className="border-2 w-full"
                type="text"
              />
            </div>
            <div className="border-1 rounded-md">
              <h1>secundarios nome:</h1>
              <input
                onChange={(event) => {
                  addsecundaryname = event.target.value.split(",");
                }}
                className="border-2 w-full"
                type="text"
              />
              <h1>secundarios valores</h1>
              <input
                onChange={(event) => {
                  addsecundaryvalue = event.target.value.split(",");
                }}
                className="border-2 w-full"
                type="text"
              />
            </div>
            <div>
              <h1>Primario limit:</h1>
              <input
                onChange={(event) => {
                  addprimario_limit = event.target.value;
                }}
                className="border-1"
                type="text"
              />
              <h1>Secundario limit:</h1>
              <input
                onChange={(event) => {
                  addsecundario_limit = event.target.value;
                }}
                className="border-1"
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
                  galery: addgalery,
                  addprimarios: addprimaryisneeded,
                  addsecundario: addsecundaryisneeded,
                  adicionais_um: addprimaryname.map((a, i) => ({
                    item: a,
                    value: Number(addpriaryvlaue[i]),
                  })),
                  adicionais_dois: addsecundaryname.map((a, i) => ({
                    item: a,
                    value: Number(addsecundaryvalue[i]),
                  })),
                  primario_limit: Number(addprimario_limit),
                  secundario_limit: Number(addsecundario_limit),
                };
                const newList = {
                  ...FullList,
                  produtos: [...FullList.produtos, newProduc],
                };
                setFullList(newList);
                alert("Produto Adicionado com sucesso");
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
