import { useState } from "react";

export default function App() {

  const [quantidades, setQuantidades] = useState({
    "Carvão 2KG": 1,
    "Carvão 4KG": 1,
    "Carvão 10KG": 1,
    "Acendedor": 1,
    "Repositor de Carvão": 1,
  });

  const alterarQuantidade = (produto, valor) => {
    setQuantidades((prev) => ({
      ...prev,
      [produto]: Math.max(1, prev[produto] + valor),
    }));
  };

  const gerarLinkWhatsApp = (produto, quantidade, total = null) => {

  let mensagem = `Olá! Tenho interesse em comprar ${quantidade} unidade(s) de ${produto}.`;

  if (total !== null) {
    mensagem += ` O valor total fica em R$ ${total
      .toFixed(2)
      .replace(".", ",")}.`;
  }

  return `https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`;
};

const gerarLinkComplementar = (produto, quantidade) => {

  const mensagem =
    `Olá! Gostaria de solicitar o preço de ${quantidade} unidade(s) de ${produto}, poderia me ajudar?`;

  return `https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`;
};

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* HERO */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

        {/* IMAGEM DESKTOP */}
        <img
          src="/img/banner-desktop.png"
          alt="Desktop"
          className="
            hidden md:block
            absolute inset-0
            w-full h-full
            object-cover object-center
          "
        />

        {/* IMAGEM MOBILE */}
        <img
          src="/img/banner-mobile.png"
          alt="Mobile"
          className="
            block md:hidden
            absolute inset-0
            w-full h-full
            object-cover object-center
          "
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-5 max-w-4xl">

          <h1 className="
            text-4xl
            sm:text-5xl
            md:text-7xl
            font-extrabold
            text-orange-400
            mb-6
          ">
            Carvão Triuno
          </h1>

          <p className="
            text-base
            sm:text-lg
            md:text-xl
            font-semibold
            text-zinc-300
            mb-8
            leading-relaxed
            max-w-3xl
            mx-auto
          ">
            Atendemos adegas, mercados, açougues e distribuidores com
            fornecimento contínuo para seu negócio não correr o risco de
            ficar sem carvão.
          </p>

          <div className="
            flex
            flex-col
            sm:flex-row
            gap-4
            justify-center
            items-center
          ">

            <a
              href="#produtos"
              className="
                w-full
                sm:w-auto
                border border-white
                px-8 py-4
                rounded-2xl
                text-lg
                font-bold
                hover:bg-white
                hover:text-black
                transition
              "
            >
              Ver Produtos
            </a>

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              className="
                w-full
                sm:w-auto
                bg-orange-500
                hover:bg-orange-600
                px-8 py-4
                rounded-2xl
                text-lg
                font-bold
                transition
              "
            >
              Solicitar Orçamento no WhatsApp
            </a>

          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img
            src="/img/beneficios.jpg"
            alt="Carvão"
            className="rounded-3xl h-[450px] w-full object-cover"
          />

          <div>

            <h2 className="text-5xl font-bold mb-6 text-orange-400">
              Qualidade que Você Merece
            </h2>

            <p className="text-zinc-300 text-lg leading-relaxed mb-8">
              Trabalhamos com carvão 100% eucalipto selecionado, com alto padrão de qualidade e durabilidade.
              <br /><br />
              ✔️ Não esfarela
              <br />
              ✔️ Alto rendimento
              <br />
              ✔️ Queima uniforme
              <br />
              ✔️ Entrega rápida
            </p>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-zinc-800 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-orange-400">
                  +500 Clientes satisfeitos
                </h3>
              </div>

              <div className="bg-zinc-800 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-orange-400">
                  Entrega rápida
                </h3>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="py-24 px-6 bg-zinc-950">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <h2 className="text-5xl font-bold mb-4">
              Nossos Produtos
            </h2>

            <p className="text-zinc-400">
              Escolha o melhor carvão para seu churrasco.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                nome: "Carvão 2KG",
                preco: 8,
              },
              {
                nome: "Carvão 4KG",
                preco: 18,
              },
              {
                nome: "Carvão 10KG",
                preco: 42,
              },
            ].map((item, index) => {

              const quantidade = quantidades[item.nome];
              const total = item.preco * quantidade;

              return (
                <div
                  key={index}
                  className="bg-zinc-900 rounded-3xl p-8 shadow-xl hover:scale-105 transition"
                >

                  <h3 className="text-2xl font-bold mb-4">
                    {item.nome}
                  </h3>

                  <p className="text-4xl font-bold text-orange-400 mb-6">
                    R$ {total.toFixed(2).replace(".", ",")}
                  </p>

                  <div className="flex items-center justify-center gap-4 mb-6">

                    <button
                      onClick={() => alterarQuantidade(item.nome, -1)}
                      className="bg-zinc-700 w-10 h-10 rounded-xl text-xl font-bold"
                    >
                      -
                    </button>

                    <span className="text-2xl font-bold">
                      {quantidade}
                    </span>

                    <button
                      onClick={() => alterarQuantidade(item.nome, 1)}
                      className="bg-zinc-700 w-10 h-10 rounded-xl text-xl font-bold"
                    >
                      +
                    </button>

                  </div>

                  <a
                    href={gerarLinkWhatsApp(
                      item.nome,
                      quantidade,
                      total
                    )}
                    target="_blank"
                    className="block text-center w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-2xl font-bold transition">
                    Comprar no WhatsApp
                  </a>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* PRODUTOS COMPLEMENTARES */}
      <section className="py-24 px-6 bg-zinc-900">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <h2 className="text-5xl font-bold mb-4 text-orange-400">
              Produtos Complementares
            </h2>

            <p className="text-zinc-400">
              Complete sua compra com acessórios essenciais.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            {/* ACENDEDOR */}
            <div className="bg-zinc-800 rounded-3xl p-6 shadow-xl hover:scale-105 transition">

              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                Acendedor
              </h3>

              <p className="text-zinc-300 mb-6">
                Acenda seu carvão com rapidez e praticidade.
              </p>

              <div className="flex items-center justify-center gap-4 mb-6">

                <button
                  onClick={() => alterarQuantidade("Acendedor", -1)}
                  className="bg-zinc-700 w-10 h-10 rounded-xl text-xl font-bold"
                >
                  -
                </button>

                <span className="text-2xl font-bold">
                  {quantidades["Acendedor"]}
                </span>

                <button
                  onClick={() => alterarQuantidade("Acendedor", 1)}
                  className="bg-zinc-700 w-10 h-10 rounded-xl text-xl font-bold"
                >
                  +
                </button>

              </div>

              <a
                href={gerarLinkComplementar(
                  "Acendedor",
                  quantidades["Acendedor"]
                )}
                target="_blank"
                className="block text-center w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-2xl font-bold transition">
                Fazer Cotação
              </a>

            </div>

            {/* REPOSITOR */}
            <div className="bg-zinc-800 rounded-3xl p-6 shadow-xl hover:scale-105 transition">

              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                Repositor de Carvão
              </h3>

              <p className="text-zinc-300 mb-6">
                Mantenha o fogo sempre forte durante o churrasco.
              </p>

              <div className="flex items-center justify-center gap-4 mb-6">

                <button
                  onClick={() => alterarQuantidade("Repositor de Carvão", -1)}
                  className="bg-zinc-700 w-10 h-10 rounded-xl text-xl font-bold"
                >
                  -
                </button>

                <span className="text-2xl font-bold">
                  {quantidades["Repositor de Carvão"]}
                </span>

                <button
                  onClick={() => alterarQuantidade("Repositor de Carvão", 1)}
                  className="bg-zinc-700 w-10 h-10 rounded-xl text-xl font-bold"
                >
                  +
                </button>

              </div>

              <a
                href={gerarLinkComplementar(
                  "Repositor de Carvão",
                  quantidades["Repositor de Carvão"]
                )}
                target="_blank"
                className="block text-center w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-2xl font-bold transition">
                Fazer Cotação
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-24 px-6 bg-zinc-900">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-14">
            Por que Empresas Escolhem a Triuno?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                titulo: "Entrega Rápida",
                texto: "Receba seus pedidos dentro do prazo.",
              },
              {
                titulo: "Qualidade Garantida",
                texto: "Carvão com alto rendimento.",
              },
              {
                titulo: "Melhor Custo-Benefício",
                texto: "Mais margem e mais lucro.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="bg-zinc-800 p-8 rounded-3xl"
              >

                <h3 className="text-2xl font-bold text-orange-400 mb-4">
                  {item.titulo}
                </h3>

                <p className="text-zinc-400">
                  {item.texto}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-orange-500 text-center">

        <h2 className="text-5xl font-extrabold text-black mb-6">
          Garanta um Fornecedor de Confiança
        </h2>

        <p className="text-black/80 text-xl mb-8">
          Solicite agora sua tabela de preços.
        </p>

        <a
          href={`https://wa.me/5511999999999?text=${encodeURIComponent(
            "Olá! Gostaria de fazer um orçamento e ver os preços."
          )}`}
          target="_blank"
          className="bg-black text-white px-10 py-5 rounded-2xl text-xl font-bold inline-block hover:scale-105 transition">
          Solicitar Orçamento
        </a>

      </section>

      {/* FOOTER */}
      <footer className="bg-black py-8 text-center text-zinc-500">
        © 2026 Carvão Triuno - Desenvolvido por Rafael Eboli.
      </footer>

    </div>
  );
}