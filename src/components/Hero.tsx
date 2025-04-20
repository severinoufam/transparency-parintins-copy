
const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-saae-blue to-saae-lightBlue py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Portal da Transparência
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Acesso à informação é um direito de todos. Conheça e acompanhe os dados 
            do Serviço Autônomo de Água e Esgoto de Parintins.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#categorias" 
              className="bg-white text-saae-blue px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Explorar Dados
            </a>
            <a 
              href="https://saaeparintins.com.br" 
              target="_blank" 
              rel="noreferrer"
              className="bg-saae-green text-white px-6 py-3 rounded-md font-semibold hover:bg-saae-green/90 transition"
            >
              Site Oficial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
