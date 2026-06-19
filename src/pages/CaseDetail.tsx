import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { allCases, getFaviconUrl } from '@/data/cases';

const CaseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const c = allCases.find((item) => item.id === id);

  if (!c) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/30 mb-5 text-sm">Case não encontrado.</p>
          <Link to="/" className="text-[11px] tracking-widest uppercase text-white/40 hover:text-white transition-colors">
            Voltar ao portfólio
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = allCases.findIndex((item) => item.id === id);
  const prev = currentIndex > 0 ? allCases[currentIndex - 1] : null;
  const next = currentIndex < allCases.length - 1 ? allCases[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">

      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link to="/" className="text-[11px] tracking-[0.2em] uppercase text-white/30 hover:text-white/70 transition-all duration-300">
            Portfólio
          </Link>
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

      {/* ── Hero ── */}
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">

          {/* Breadcrumb */}
          <p className="text-[10px] tracking-[0.35em] uppercase text-white/20 mb-12">
            {c.sector} / {c.niche}
          </p>

          {/* Logo + Título */}
          <div className="flex items-start gap-6 mb-8">
            <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 opacity-70 mt-1">
              {c.logo ? (
                <img src={c.logo} alt={c.name} className="w-full h-full object-contain" />
              ) : (
                <img
                  src={getFaviconUrl(c.url)}
                  alt={c.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const t = e.currentTarget;
                    t.style.display = 'none';
                    const p = t.parentElement;
                    if (p) p.innerHTML = `<span class="text-2xl font-black text-white/20">${c.name.charAt(0)}</span>`;
                  }}
                />
              )}
            </div>
            <div>
              <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight playfair">{c.name}</h1>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] tracking-wide text-white/25 hover:text-white/60 mt-2 transition-colors duration-200"
              >
                {new URL(c.url).hostname} <ExternalLink size={9} />
              </a>
            </div>
          </div>

          {/* Resultado */}
          <p className="text-[14px] text-white/35 italic leading-relaxed">{c.result}</p>
        </div>
      </section>

      {/* ── Conteúdo ── */}
      <div className="border-t border-white/[0.05]" />

      <section className="px-6 md:px-12 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-16">
            {[
              { label: 'O Cliente', text: c.about },
              { label: 'O Desafio', text: c.challenge },
              { label: 'O Trabalho', text: c.approach },
              { label: 'O Resultado', text: c.outcome },
            ].map(({ label, text }) => (
              <div key={label} className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-12">
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/20 pt-1 md:text-right shrink-0">
                  {label}
                </p>
                <p className="text-[15px] md:text-[16px] text-white/60 leading-[1.95]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="border-t border-white/[0.05]" />

      <section className="px-6 md:px-12 py-24">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/20 mb-5">Próximo passo</p>
            <h3 className="text-2xl md:text-3xl font-bold leading-snug playfair">
              Quer um resultado<br />como este?
            </h3>
          </div>
          <div className="flex flex-col items-start md:items-end gap-5">
            <p className="text-[13px] text-white/30 leading-relaxed md:text-right">
              Diagnóstico gratuito. Sem pressão.
            </p>
            <a
              href={`https://wa.me/5531992976990?text=Oi%20Samuel%2C%20vi%20o%20case%20da%20${encodeURIComponent(c.name)}%20no%20seu%20portf%C3%B3lio%20e%20quero%20conversar`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black text-[12px] font-semibold tracking-[0.15em] uppercase px-8 py-4 hover:bg-white/90 transition-all duration-200"
            >
              Falar com Samuel
            </a>
          </div>
        </div>
      </section>

      {/* ── Navegação Prev/Next ── */}
      {(prev || next) && (
        <nav className="border-t border-white/[0.05] px-6 md:px-12 py-10">
          <div className="max-w-3xl mx-auto flex justify-between gap-6">
            {prev ? (
              <Link to={`/${prev.id}`} className="group">
                <p className="text-[9px] tracking-[0.3em] uppercase text-white/20 mb-2">Anterior</p>
                <p className="text-[13px] font-medium text-white/35 group-hover:text-white transition-colors duration-200">{prev.name}</p>
              </Link>
            ) : <div />}
            {next ? (
              <Link to={`/${next.id}`} className="group text-right ml-auto">
                <p className="text-[9px] tracking-[0.3em] uppercase text-white/20 mb-2">Próximo</p>
                <p className="text-[13px] font-medium text-white/35 group-hover:text-white transition-colors duration-200">{next.name}</p>
              </Link>
            ) : <div />}
          </div>
        </nav>
      )}

    </div>
  );
};

export default CaseDetail;
