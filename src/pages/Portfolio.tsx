import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { allCases, sectors, getFaviconUrl, type Sector } from '@/data/cases';

const PROFILE_PHOTO = '/samuel-profile.jpg';

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

      {/* Hero — Apresentação pessoal */}
      <section className="pt-40 pb-20 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">

            {/* Foto */}
            <div className="flex-shrink-0">
              <div className="w-40 h-40 md:w-52 md:h-52 overflow-hidden grayscale">
                <img
                  src={PROFILE_PHOTO}
                  alt="Samuel Felipe"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1 max-w-2xl">
              <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-4">Especialista em Crescimento Digital</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-6">
                Samuel Felipe
              </h1>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
                Mais de 5 anos trabalhando com tráfego pago, posicionamento digital e captação de leads.
                Passei por concessionárias de luxo, clínicas, e-commerces, indústrias e negócios de serviço,
                sempre com o mesmo foco: resultado que aparece no faturamento, não no relatório.
                Gerenciei mais de R$7 milhões em mídia paga e participei de mais de 170 projetos em setores
                completamente diferentes.
              </p>

              {/* Especialidades */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
                {['Meta Ads', 'Google Ads', 'YouTube Ads', 'LinkedIn Ads', 'Landing Pages', 'Funis de Conversão', 'SEO', 'CRO'].map((skill) => (
                  <span key={skill} className="text-xs text-gray-500">{skill}</span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/[0.06]">
                {[
                  { value: '+170', label: 'projetos' },
                  { value: '+R$7M', label: 'em mídia' },
                  { value: '+800K', label: 'leads' },
                  { value: '+5 anos', label: 'de mercado' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xl md:text-2xl font-black text-white">{stat.value}</p>
                    <p className="text-[10px] text-gray-600 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-white/[0.06]" />
      </div>

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
                <div className="w-12 h-12 overflow-hidden flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
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
