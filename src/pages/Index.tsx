
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import { Calendar, FileText, FileSearch, List, ListCheck, Folder, FolderOpen, Search } from "lucide-react";

const transparencyCategories = [
  {
    title: "Licitações",
    description: "Acesse informações sobre processos licitatórios",
    icon: FileSearch,
    path: "/licitacoes"
  },
  {
    title: "Contratos",
    description: "Consulte os contratos firmados pelo SAAE",
    icon: FileText,
    path: "/contratos"
  },
  {
    title: "Despesas",
    description: "Acompanhe as despesas e pagamentos realizados",
    icon: List,
    path: "/despesas"
  },
  {
    title: "Receitas",
    description: "Visualize as receitas arrecadadas",
    icon: ListCheck,
    path: "/receitas"
  },
  {
    title: "Recursos Humanos",
    description: "Consulte informações sobre servidores e folha de pagamento",
    icon: Folder,
    path: "/recursos-humanos"
  },
  {
    title: "Prestação de Contas",
    description: "Acesse os relatórios de prestação de contas",
    icon: FolderOpen,
    path: "/prestacao-contas"
  },
  {
    title: "Planejamento",
    description: "Consulte os planos e metas da instituição",
    icon: Calendar,
    path: "/planejamento"
  },
  {
    title: "Legislação",
    description: "Conheça as leis e normas relacionadas ao SAAE",
    icon: Search,
    path: "/legislacao"
  }
];

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      <div className="container mx-auto px-4 py-12" id="categorias">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-saae-darkBlue mb-4">
            Acesso à Informação
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escolha uma das categorias abaixo para acessar os dados do Portal da Transparência do SAAE Parintins
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {transparencyCategories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              icon={category.icon}
              to={category.path}
            />
          ))}
        </div>
      </div>
      
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-saae-darkBlue mb-4">
              Sobre o Portal da Transparência
            </h2>
            <p className="text-gray-600 mb-6">
              O Portal da Transparência do SAAE Parintins é uma ferramenta que permite ao cidadão acompanhar 
              a utilização dos recursos públicos e as ações realizadas pela autarquia.
            </p>
            <p className="text-gray-600">
              Esta iniciativa visa cumprir a Lei de Acesso à Informação (Lei nº 12.527/2011) e promover 
              a transparência pública e o controle social.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
