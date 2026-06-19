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
          <p className="text-gray-500 mb-4">Case não encontrado.</p>
          <Link to="/" className="text-white text-sm hover:text-gray-300 transition-colors">Voltar ao portfólio</Link>
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link to="/" className="text-xs text-gray-500 hover:text-white transition-colors">
            Portfólio
          </Link>
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
        <div className="max-w-3xl mx-auto">

          {/* Niche + Sector */}
          <p className="text-xs text-gray-600 uppercase tracking-widest mb-8">
            {c.sector} / {c.niche}
          </p>

          {/* Logo + Name */}
          <div className="flex items-center gap-5 mb-6">
            <div className="w-14 h-14 overflow-hidden flex-shrink-0 opacity-80">
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
                    if (p) p.innerHTML = `<span class="text-xl font-black text-white/30">${c.name.charAt(0)}</span>`;
                  }}
                />
              )}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">{c.name}</h1>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-400 text-xs mt-1.5 transition-colors"
              >
                {new URL(c.url).hostname} <ExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* Result */}
          <p className="text-sm text-gray-400 italic">{c.result}</p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* Case content */}
      <section className="px-6 md:px-10 py-16">
        <div className="max-w-3xl mx-auto space-y-14">

          <div>
            <p className="text-[10px] text-gray-600 uppercase tracking-widest font-medium mb-4">O Cliente</p>
            <p className="text-gray-300 leading-loose text-base md:text-lg">{c.about}</p>
          </div>

          <div>
            <p className="text-[10px] text-gray-600 uppercase tracking-widest font-medium mb-4">O Desafio</p>
            <p className="text-gray-300 leading-loose text-base md:text-lg">{c.challenge}</p>
          </div>

          <div>
            <p className="text-[10px] text-gray-600 uppercase tracking-widest font-medium mb-4">O Trabalho</p>
            <p className="text-gray-300 leading-loose text-base md:text-lg">{c.approach}</p>
          </div>

          <div>
            <p className="text-[10px] text-gray-600 uppercase tracking-widest font-medium mb-4">O Resultado</p>
            <p className="text-gray-300 leading-loose text-base md:text-lg">{c.outcome}</p>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="h-px bg-white/[0.06]" />
      </div>

      {/* CTA */}
      <section className="px-6 md:px-10 py-20">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-black leading-tight mb-2">
              Quer um resultado como este?
            </h3>
            <p className="text-gray-500 text-sm">Diagnóstico gratuito. 5 minutos. Sem compromisso.</p>
          </div>
          <a
            href={`https://wa.me/5531992976990?text=Oi%20Samuel%2C%20vi%20o%20case%20da%20${encodeURIComponent(c.name)}%20no%20seu%20portf%C3%B3lio%20e%20quero%20conversar`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-black px-7 py-3.5 text-sm font-bold hover:bg-white/90 transition-colors"
          >
            Falar com Samuel
          </a>
        </div>
      </section>

      {/* Prev / Next */}
      {(prev || next) && (
        <nav className="border-t border-white/[0.06] px-6 md:px-10 py-10">
          <div className="max-w-3xl mx-auto flex justify-between gap-6">
            {prev ? (
              <Link to={`/${prev.id}`} className="group text-left">
                <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-1">Anterior</p>
                <p className="text-sm font-bold text-gray-500 group-hover:text-white transition-colors">{prev.name}</p>
              </Link>
            ) : <div />}
            {next ? (
              <Link to={`/${next.id}`} className="group text-right ml-auto">
                <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-1">Próximo</p>
                <p className="text-sm font-bold text-gray-500 group-hover:text-white transition-colors">{next.name}</p>
              </Link>
            ) : <div />}
          </div>
        </nav>
      )}

    </div>
  );
};

export default CaseDetail;
