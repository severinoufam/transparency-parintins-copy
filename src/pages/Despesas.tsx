
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Despesas = () => {
  return (
    <Layout>
      <div className="bg-saae-blue py-8 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold">Despesas</h1>
          <p className="mt-2">
            Consulte as despesas e pagamentos realizados pelo SAAE Parintins
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-saae-darkBlue mb-4">Filtros de Pesquisa</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Input
                placeholder="Pesquisar despesas"
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <Button className="bg-saae-blue hover:bg-saae-blue/90">
              Filtrar
            </Button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-saae-darkBlue mb-2">
              Dados em implementação
            </h3>
            <p className="text-gray-600">
              Esta funcionalidade estará disponível em breve.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Despesas;
