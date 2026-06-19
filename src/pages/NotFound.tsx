import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
    <div className="text-center">
      <p className="text-7xl font-black text-white/5 mb-4">404</p>
      <p className="text-gray-500 mb-6">Página não encontrada.</p>
      <Link to="/" className="text-yellow-500 font-bold text-sm hover:underline">Voltar ao portfólio</Link>
    </div>
  </div>
)

export default NotFound
