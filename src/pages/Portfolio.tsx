import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { allCases, sectors, getFaviconUrl, type Sector } from '@/data/cases';

const Portfolio: React.FC = () => {
  const [activeSector, setActiveSector] = useState<Sector>('Todos');

  const filtered = activeSector === 'Todos'
    ? allCases
    : allCases.filter((c) => c.sector === activeSector);

  return (
    <div className="min-h-screen bg-[#050505] text-white">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <span className="text-white font-bold tracking-tight text-sm">Samuel Felipe</span>
          <a
            href="https://wa.me/5531992976990?text=Oi%20Samuel%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-white transition-colors font-medium"
          >
            Contato via WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6">
            Portfólio
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-lg leading-relaxed mb-14">
            Seleção de projetos e clientes atendidos em mídia paga, posicionamento digital e captação de leads.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-14 border-b border-white/[0.06]">
            {[
              { value: '+170', label: 'projetos entregues' },
              { value: '+R$7M', label: 'em mídia gerida' },
              { value: '+800K', label: 'leads gerados' },
              { value: '+5 anos', label: 'de mercado' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-black text-white">{stat.value}</p>
                <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-[61px] z-40 bg-[#050505]/95 backdrop-blur-md border-b border-white/[0.04] px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide py-4">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={`whitespace-nowrap text-xs font-medium transition-colors pb-0.5 ${
                  activeSector === sector
                    ? 'text-white border-b border-white'
                    : 'text-gray-600 hover:text-gray-300'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="px-6 md:px-10 py-14">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
            {filtered.map((client) => (
              <Link
                key={client.id}
                to={`/${client.id}`}
                className="group bg-[#050505] p-8 flex flex-col gap-5 hover:bg-white/[0.02] transition-colors"
              >
                {/* Logo */}
                <div className="w-12 h-12 overflow-hidden flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                  {client.logo ? (
                    <img src={client.logo} alt={client.name} className="w-full h-full object-contain" loading="lazy" />
                  ) : (
                    <img
                      src={getFaviconUrl(client.url)}
                      alt={client.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                      onError={(e) => {
                        const t = e.currentTarget;
                        t.style.display = 'none';
                        const p = t.parentElement;
                        if (p) p.innerHTML = `<span class="text-lg font-black text-white/30">${client.name.charAt(0)}</span>`;
                      }}
                    />
                  )}
                </div>

                {/* Name + Niche */}
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-white leading-snug mb-1 group-hover:text-white/90 transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-xs text-gray-600">{client.niche}</p>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">{client.desc}</p>

                {/* Result */}
                <p className="text-xs text-gray-400 italic">{client.result}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="border-t border-white/[0.06] px-6 md:px-10 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-3">
              Quer um projeto como estes?
            </h2>
            <p className="text-gray-500 text-sm">Diagnóstico gratuito. Sem compromisso.</p>
          </div>
          <a
            href="https://wa.me/5531992976990?text=Oi%20Samuel%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20um%20diagn%C3%B3stico%20gratuito"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-black px-7 py-3.5 text-sm font-bold hover:bg-white/90 transition-colors"
          >
            Falar com Samuel
          </a>
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;
