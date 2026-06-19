import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { allCases, sectors, sectorColors, getFaviconUrl, type Sector } from '@/data/cases';

const Portfolio: React.FC = () => {
  const [activeSector, setActiveSector] = useState<Sector>('Todos');

  const filtered = activeSector === 'Todos'
    ? allCases
    : allCases.filter((c) => c.sector === activeSector);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header standalone — sem link para o site principal */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-white font-extrabold tracking-tighter text-sm md:text-base leading-none">Samuel Felipe</span>
            <p className="text-[9px] text-yellow-500 uppercase tracking-[0.3em] font-black opacity-80">Portfólio de Cases</p>
          </div>
          <a
            href="https://wa.me/5531992976990?text=Oi%20Samuel%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest hover:scale-[1.04] transition-all shadow-lg"
          >
            Contato
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-36 pb-12 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-yellow-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-12 bg-yellow-500/50" />
            <span className="text-[9px] font-bold text-yellow-500 uppercase tracking-[0.4em]">Projetos Selecionados</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-5 leading-tight">
            Portfólio de{' '}
            <span className="gold-gradient italic playfair font-medium">Cases</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-xl mb-10">
            Marcas reais. Estratégias sob medida. Resultados que aparecem no faturamento, não só no relatório.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pb-10 border-b border-white/5">
            {[
              { value: '+170', label: 'Projetos Entregues' },
              { value: '+R$7M', label: 'em Mídia Gerida' },
              { value: '+800K', label: 'Leads Gerados' },
              { value: '+5 Anos', label: 'de Mercado Digital' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black gold-gradient">{stat.value}</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-[69px] z-40 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide py-4">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 ${
                  activeSector === sector
                    ? 'bg-yellow-500 text-black border-yellow-500'
                    : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
                }`}
              >
                {sector}
                {sector !== 'Todos' && (
                  <span className="ml-1.5 opacity-50">
                    {allCases.filter((c) => c.sector === sector).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="px-6 py-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((client) => (
              <Link
                key={client.id}
                to={`/${client.id}`}
                className="group glass-card rounded-2xl p-6 flex flex-col gap-4 border border-white/[0.06] hover:border-yellow-500/20 transition-all duration-500 relative overflow-hidden hover:bg-white/[0.04]"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-yellow-500/0 blur-[40px] pointer-events-none group-hover:bg-yellow-500/[0.06] transition-all duration-700" />

                {/* Logo + Sector */}
                <div className="flex items-start justify-between gap-4">
                  <div className="w-16 h-16 rounded-xl border border-white/10 overflow-hidden bg-white/5 flex-shrink-0 group-hover:border-yellow-500/30 transition-all duration-500">
                    {client.logo ? (
                      <img src={client.logo} alt={`${client.name}`} className="w-full h-full object-contain p-2" loading="lazy" />
                    ) : (
                      <img
                        src={getFaviconUrl(client.url)}
                        alt={`${client.name}`}
                        className="w-full h-full object-contain p-2"
                        loading="lazy"
                        onError={(e) => {
                          const t = e.currentTarget;
                          t.style.display = 'none';
                          const p = t.parentElement;
                          if (p) p.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-xl font-black text-yellow-500/60" style="font-family:serif">${client.name.charAt(0)}</span></div>`;
                        }}
                      />
                    )}
                  </div>
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${sectorColors[client.sector] || 'bg-white/5 text-gray-400 border-white/10'}`}>
                    {client.sector}
                  </span>
                </div>

                {/* Name + Niche */}
                <div>
                  <h3 className="text-base font-black text-white group-hover:text-yellow-400 transition-colors leading-tight mb-1">
                    {client.name}
                  </h3>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{client.niche}</p>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-400 leading-relaxed flex-1">{client.desc}</p>

                {/* Result */}
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                  <span className="text-[10px] font-black text-yellow-500 uppercase tracking-wider">{client.result}</span>
                </div>

                {/* Services */}
                <div className="flex flex-wrap gap-1.5">
                  {client.services.map((s) => (
                    <span key={s} className="text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-gray-500 border border-white/5">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.04]">
                  <span className="text-[9px] font-bold text-gray-600 uppercase tracking-wider">Ver case completo</span>
                  <ArrowUpRight size={14} className="text-gray-600 group-hover:text-yellow-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="border-t border-white/5 px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.4em] mb-4">Próximo da lista</p>
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            Seu negócio pode{' '}
            <span className="gold-gradient italic playfair font-medium">ser o próximo.</span>
          </h2>
          <p className="text-gray-400 mb-8 text-sm">Diagnóstico gratuito. 5 minutos. Sem compromisso.</p>
          <a
            href="https://wa.me/5531992976990?text=Oi%20Samuel%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20um%20diagn%C3%B3stico%20gratuito"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold text-sm hover:scale-[1.03] transition-all shadow-xl"
          >
            Solicitar Diagnóstico Gratuito <ExternalLink size={16} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
