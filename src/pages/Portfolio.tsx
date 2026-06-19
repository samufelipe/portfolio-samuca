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
    <div className="min-h-screen bg-[#050505] text-white font-sans">

      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/80">
            Samuel Felipe
          </span>
          <a
            href="https://wa.me/5531992976990?text=Oi%20Samuel%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-wide text-white/30 hover:text-white/70 transition-all duration-300"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* ── Hero / Apresentação ── */}
      <section className="pt-36 pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-14 md:gap-20 items-start">

            {/* Foto — retrato editorial */}
            <div className="w-52 md:w-72 flex-shrink-0">
              <div className="relative aspect-[3/4] overflow-hidden bg-white/[0.03]">
                <img
                  src={PROFILE_PHOTO}
                  alt="Samuel Felipe"
                  className="absolute inset-0 w-full h-full object-cover object-center grayscale"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="flex flex-col justify-between py-2 md:py-4 min-h-[340px] md:min-h-[384px]">

              {/* Topo */}
              <div>
                <p className="text-[10px] tracking-[0.35em] uppercase text-white/25 mb-6">
                  Estrategista Digital · Belo Horizonte, MG
                </p>

                <h1 className="text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight mb-8 playfair">
                  Samuel<br />Felipe
                </h1>

                <p className="text-white/50 text-base md:text-[17px] leading-[1.9] max-w-lg mb-10">
                  Mais de 5 anos gerenciando tráfego pago e estratégia digital para marcas de setores completamente
                  distintos: de concessionárias de luxo a clínicas, de indústrias a e-commerces. Mais de R$7 milhões
                  em mídia gerida e 170 projetos entregues com o mesmo critério: resultado que aparece no faturamento.
                </p>

                {/* Especialidades inline */}
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/25 leading-loose">
                  Meta Ads · Google Ads · YouTube Ads · LinkedIn Ads · Landing Pages · SEO · CRO · Funis de Conversão
                </p>
              </div>

              {/* Stats — fundo da bio */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-10 border-t border-white/[0.07]">
                {[
                  { value: '+170', label: 'projetos' },
                  { value: 'R$7M+', label: 'mídia gerida' },
                  { value: '800K+', label: 'leads gerados' },
                  { value: '5 anos', label: 'de mercado' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">{s.value}</p>
                    <p className="text-[10px] text-white/25 tracking-widest uppercase mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filtros ── */}
      <div className="sticky top-16 z-40 bg-[#050505]/90 backdrop-blur-xl border-y border-white/[0.05] px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-7 overflow-x-auto scrollbar-hide py-[14px]">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={`whitespace-nowrap text-[11px] tracking-wide transition-all duration-200 ${
                  activeSector === sector
                    ? 'text-white'
                    : 'text-white/25 hover:text-white/60'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Grid de Cases ── */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((client, i) => (
              <Link
                key={client.id}
                to={`/${client.id}`}
                className="group border border-white/[0.05] -mt-px -ml-px p-8 md:p-10 flex flex-col gap-6 hover:bg-white/[0.025] transition-all duration-300"
              >
                {/* Número + Logo */}
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
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
                          if (p) p.innerHTML = `<span class="text-sm font-black text-white/20">${client.name.charAt(0)}</span>`;
                        }}
                      />
                    )}
                  </div>
                  <span className="text-[10px] text-white/15 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Nome + Nicho */}
                <div className="flex-1">
                  <h3 className="text-[15px] font-semibold text-white/80 group-hover:text-white leading-snug mb-1.5 transition-colors duration-200">
                    {client.name}
                  </h3>
                  <p className="text-[11px] text-white/25 tracking-wide">{client.niche}</p>
                </div>

                {/* Descrição */}
                <p className="text-[13px] text-white/40 leading-relaxed">{client.desc}</p>

                {/* Resultado + seta */}
                <div className="flex items-end justify-between mt-auto pt-2">
                  <p className="text-[12px] text-white/35 italic">{client.result}</p>
                  <span className="text-white/15 group-hover:text-white/50 transition-colors duration-300 text-base leading-none">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <footer className="border-t border-white/[0.05] px-6 md:px-12 py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/20 mb-5">Próximo passo</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug playfair">
              Quer um projeto<br />como estes?
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-[13px] text-white/30 leading-relaxed md:text-right max-w-xs">
              Diagnóstico gratuito. Conversa sem pressão para entender se dá para trabalhar juntos.
            </p>
            <a
              href="https://wa.me/5531992976990?text=Oi%20Samuel%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20um%20diagn%C3%B3stico%20gratuito"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black text-[12px] font-semibold tracking-[0.15em] uppercase px-8 py-4 hover:bg-white/90 transition-all duration-200"
            >
              Falar com Samuel
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;
