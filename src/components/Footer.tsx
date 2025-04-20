
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-saae-darkBlue text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SAAE Parintins</h3>
            <p className="text-sm mb-2">Serviço Autônomo de Água e Esgoto</p>
            <p className="text-sm">Rua João Melo, 1500 - Centro</p>
            <p className="text-sm">Parintins - AM, CEP: 69151-140</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:underline">Início</Link></li>
              <li><Link to="/licitacoes" className="text-sm hover:underline">Licitações</Link></li>
              <li><Link to="/contratos" className="text-sm hover:underline">Contratos</Link></li>
              <li><Link to="/despesas" className="text-sm hover:underline">Despesas</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-sm mb-2">Telefone: (92) 3533-3862</p>
            <p className="text-sm mb-2">Email: saaeparintins@gmail.com</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <span className="sr-only">Facebook</span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-saae-blue font-bold">f</span>
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <span className="sr-only">Instagram</span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-saae-blue font-bold">i</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/20 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} SAAE Parintins. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
