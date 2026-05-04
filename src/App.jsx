export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      
      {/* HERO */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/img/logo.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-orange-400 mb-6">
            Carvão Triuno
          </h1>

          <p className="text-xl font-bold text-zinc-500 mb-8">
            Atendemos adegas, mercados, açougues e distribuidores com fornecimento contínuo para seu negócio não correr o risco de ficar sem carvão. Produto com alto rendimento, padrão de qualidade e entrega rápida para manter sua operação rodando sem falhas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#produtos"
              className="border border-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-black transition"
              
            >
              Ver Produtos
            </a>

            <a
              href="https://wa.me/5511999999999"
              className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl text-lg font-bold transition"
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
              Trabalhamos com carvão 100% eucalipto selecionado, com alto padrão de qualidade e durabilidade. Ideal para empresas que precisam de constância, rendimento e um fornecedor confiável no dia a dia.<br/>
              ✔️ Não esfarela (menos perda no estoque)<br/>
              ✔️ Alto rendimento (mais lucro por unidade)<br/>
              ✔️ Queima uniforme (melhor experiência para seu cliente)<br/>
              ✔️ Entrega ágil e recorrente<br/>
              
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-800 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-orange-400">+500 Clientes satisfeitos</h3>
              </div>

              <div className="bg-zinc-800 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-orange-400">Entrega rápida e programada</h3>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-bold mb-4">Nossos Produtos</h2>
            <p className="text-zinc-400">
              Escolha o melhor carvão para seu churrasco.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                nome: "Carvão 2KG",
                preco: "R$ 08,00",
              },
              {
                nome: "Carvão 4KG",
                preco: "R$ 18,00",
              },
              {
                nome: "Carvão 10KG",
                preco: "R$ 35,00",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-3xl p-8 shadow-xl hover:scale-105 transition"
              >
                <h3 className="text-2xl font-bold mb-4">{item.nome}</h3>

                <p className="text-4xl font-bold text-orange-400 mb-6">
                  {item.preco}
                </p>

                <button className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-2xl font-bold transition">
                  Comprar Agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-14">
            Por que Empresas Escolhem a Triuno como Fornecedor?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                titulo: "Entrega Rápida e Programada",
                texto: "Receba seus pedidos dentro do prazo e mantenha seu estoque sempre abastecido.",
              },
              {
                titulo: "Padrão de Qualidade Garantido",
                texto: "Carvão 100% eucalipto, com alto rendimento e sem surpresas na reposição.",
              },
              {
                titulo: "Melhor Custo-Benefício para Revenda",
                texto: "Mais margem por unidade e um produto que gira com facilidade no seu negócio.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-800 p-8 rounded-3xl"
              >
                <h3 className="text-2xl font-bold text-orange-400 mb-4">
                  {item.titulo}
                </h3>

                <p className="text-zinc-400">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-orange-500 text-center">
        <h2 className="text-5xl font-extrabold text-black mb-6">
          Garanta um Fornecedor de Confiança para o Seu Negócio
        </h2>

        <p className="text-black/80 text-xl mb-8">
          Fale agora com nosso time e solicite sua tabela de preços e condições para fornecimento.
        </p>

        <a
          href="https://wa.me/5511999999999"
          className="bg-black text-white px-10 py-5 rounded-2xl text-xl font-bold inline-block hover:scale-105 transition"
        >
          Solicitar Orçamento no WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-8 text-center text-zinc-500">
        © 2026 Carvão Premium - Todos os direitos reservados.
      </footer>
    </div>
  );
}