import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { allCases, sectorColors, getFaviconUrl } from '@/data/cases';

const CaseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const c = allCases.find((item) => item.id === id);

  if (!c) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Case não encontrado.</p>
          <Link to="/" className="text-yellow-500 font-bold text-sm hover:underline">Voltar ao portfólio</Link>
        </div>
      </div>
    );
  }

  const currentIndex = allCases.findIndex((item) => item.id === id);
  const prev = currentIndex > 0 ? allCases[currentIndex - 1] : null;
  const next = currentIndex < allCases.length - 1 ? allCases[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
            <ArrowLeft size={14} />
            Portfólio
          </Link>
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

      {/* Hero do case */}
      <section className="pt-36 pb-12 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-yellow-500/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">

          {/* Sector + Niche */}
          <div className="flex items-center gap-3 mb-8">
            <span className={`text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${sectorColors[c.sector] || 'bg-white/5 text-gray-400 border-white/10'}`}>
              {c.sector}
            </span>
            <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">{c.niche}</span>
          </div>

          {/* Logo + Name */}
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-2xl border border-yellow-500/20 overflow-hidden bg-white/5 flex-shrink-0 p-3">
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
                    if (p) p.innerHTML = `<div class="w-full h-full flex items-center justify-center"><span class="text-2xl font-black text-yellow-500/60" style="font-family:serif">${c.name.charAt(0)}</span></div>`;
                  }}
                />
              )}
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-black leading-tight">{c.name}</h1>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-yellow-500/70 hover:text-yellow-500 text-xs font-bold uppercase tracking-widest mt-2 transition-colors"
              >
                {new URL(c.url).hostname} <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-wrap gap-2 mb-10">
            {c.services.map((s) => (
              <span key={s} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                {s}
              </span>
            ))}
          </div>

          {/* Result highlight */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-yellow-500/20 bg-yellow-500/5 mb-12">
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            <span className="text-sm font-black text-yellow-500 uppercase tracking-widest">{c.result}</span>
          </div>
        </div>
      </section>

      {/* Case content */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-1 gap-10">

            {/* About */}
            <div className="border-l-2 border-yellow-500/30 pl-6">
              <p className="text-[9px] font-black text-yellow-500 uppercase tracking-[0.4em] mb-3">O Cliente</p>
              <p className="text-gray-300 leading-relaxed text-base">{c.about}</p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-yellow-500/20 via-white/5 to-transparent" />

            {/* Challenge */}
            <div className="border-l-2 border-white/10 pl-6">
              <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.4em] mb-3">O Desafio</p>
              <p className="text-gray-300 leading-relaxed text-base">{c.challenge}</p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-white/5 via-white/5 to-transparent" />

            {/* Approach */}
            <div className="border-l-2 border-white/10 pl-6">
              <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.4em] mb-3">O Trabalho</p>
              <p className="text-gray-300 leading-relaxed text-base">{c.approach}</p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-white/5 via-white/5 to-transparent" />

            {/* Outcome */}
            <div className="border-l-2 border-yellow-500/30 pl-6">
              <p className="text-[9px] font-black text-yellow-500 uppercase tracking-[0.4em] mb-3">O Resultado</p>
              <p className="text-gray-300 leading-relaxed text-base">{c.outcome}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl border border-white/5 glass-card text-center">
            <p className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.4em] mb-3">Tem interesse?</p>
            <h3 className="text-2xl font-black mb-4">
              Seu negócio pode ter um case como este.
            </h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
              Diagnóstico gratuito. 5 minutos para entender se sua operação pode crescer.
            </p>
            <a
              href={`https://wa.me/5531992976990?text=Oi%20Samuel%2C%20vi%20o%20case%20da%20${encodeURIComponent(c.name)}%20no%20seu%20portf%C3%B3lio%20e%20quero%20conversar`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#20bd5a] text-white px-7 py-3.5 rounded-xl font-bold text-sm hover:scale-[1.03] transition-all shadow-xl"
            >
              Falar com Samuel <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      {(prev || next) && (
        <nav className="border-t border-white/5 px-6 py-10">
          <div className="max-w-4xl mx-auto flex justify-between gap-6">
            {prev ? (
              <Link to={`/${prev.id}`} className="group flex items-center gap-3 text-left">
                <ArrowLeft size={16} className="text-gray-500 group-hover:text-yellow-500 transition-colors flex-shrink-0" />
                <div>
                  <p className="text-[9px] text-gray-600 uppercase tracking-widest font-bold mb-0.5">Anterior</p>
                  <p className="text-sm font-black text-gray-400 group-hover:text-white transition-colors">{prev.name}</p>
                </div>
              </Link>
            ) : <div />}
            {next ? (
              <Link to={`/${next.id}`} className="group flex items-center gap-3 text-right ml-auto">
                <div>
                  <p className="text-[9px] text-gray-600 uppercase tracking-widest font-bold mb-0.5">Próximo</p>
                  <p className="text-sm font-black text-gray-400 group-hover:text-white transition-colors">{next.name}</p>
                </div>
                <ArrowLeft size={16} className="text-gray-500 group-hover:text-yellow-500 transition-colors flex-shrink-0 rotate-180" />
              </Link>
            ) : <div />}
          </div>
        </nav>
      )}
    </div>
  );
};

export default CaseDetail;
