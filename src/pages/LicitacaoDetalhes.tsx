
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Download } from "lucide-react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// Type definitions for our data
interface Documento {
  tipo: string;
  data: string;
  arquivo: string;
  tamanho?: string;
}

interface LicitacaoDetalhada {
  id: string;
  modalidade: string;
  numero: string;
  objeto: string;
  dataAbertura: string;
  dataPublicacao: string;
  situacao: string;
  valor: string;
  local: string;
  julgamento: string;
  fundamentoLegal: string;
  documentos: Documento[];
}

// Simulated fetch function - replace with real API call later
const fetchLicitacaoDetails = async (id: string): Promise<LicitacaoDetalhada> => {
  // Simulating API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    id: id,
    modalidade: "Pregão Eletrônico",
    numero: id,
    objeto: "Aquisição de produtos químicos para tratamento de água",
    dataAbertura: "15/03/2023 às 09:00",
    dataPublicacao: "01/03/2023",
    situacao: "Em andamento",
    valor: "R$ 150.000,00",
    local: "Portal de Compras Públicas",
    julgamento: "Menor Preço Global",
    fundamentoLegal: "Lei Federal nº 10.520/02 e subsidiariamente a Lei 8.666/93",
    documentos: [
      {
        tipo: "Edital Completo",
        data: "01/03/2023",
        arquivo: "edital_pe_029_2025.pdf",
        tamanho: "2.5 MB"
      },
      {
        tipo: "Termo de Referência",
        data: "01/03/2023",
        arquivo: "tr_pe_029_2025.pdf",
        tamanho: "1.8 MB"
      },
      {
        tipo: "Publicação no Diário Oficial",
        data: "01/03/2023",
        arquivo: "publicacao_pe_029_2025.pdf",
        tamanho: "500 KB"
      },
      {
        tipo: "Ata de Abertura",
        data: "15/03/2023",
        arquivo: "ata_pe_029_2025.pdf",
        tamanho: "1.2 MB"
      }
    ]
  };
};

const LicitacaoDetalhes = () => {
  const { id } = useParams();
  
  const { data: licitacao, isLoading } = useQuery({
    queryKey: ['licitacao', id],
    queryFn: () => fetchLicitacaoDetails(id || ''),
    enabled: !!id
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="space-y-4">
              <div className="h-32 bg-gray-200 rounded"></div>
              <div className="h-32 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!licitacao) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-red-600">Licitação não encontrada</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-saae-blue py-8 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold">Detalhes da Licitação</h1>
          <p className="mt-2">Licitação Nº {licitacao.numero}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Informações Gerais</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">Modalidade</p>
                <p className="font-medium">{licitacao.modalidade}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Número</p>
                <p className="font-medium">{licitacao.numero}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500">Objeto</p>
                <p className="font-medium">{licitacao.objeto}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Data de Publicação</p>
                <p className="font-medium">{licitacao.dataPublicacao}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Data de Abertura</p>
                <p className="font-medium">{licitacao.dataAbertura}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Local de Abertura</p>
                <p className="font-medium">{licitacao.local}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Critério de Julgamento</p>
                <p className="font-medium">{licitacao.julgamento}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Situação</p>
                <p className="inline-flex px-2 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                  {licitacao.situacao}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Valor Estimado</p>
                <p className="font-medium">{licitacao.valor}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500">Fundamentação Legal</p>
                <p className="font-medium">{licitacao.fundamentoLegal}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Documentos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {licitacao.documentos.map((doc, index) => (
                <div key={index}>
                  {index > 0 && <Separator className="my-4" />}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{doc.tipo}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Publicado em {doc.data}</span>
                        {doc.tamanho && (
                          <>
                            <span>•</span>
                            <span>{doc.tamanho}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        Visualizar
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Baixar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default LicitacaoDetalhes;
