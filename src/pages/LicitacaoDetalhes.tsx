
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, Download } from "lucide-react";
import { useParams } from "react-router-dom";

// Mock data for a single bid
const mockLicitacao = {
  id: "0292025",
  modalidade: "Pregão Eletrônico",
  numero: "029/2025",
  objeto: "Aquisição de produtos químicos para tratamento de água",
  dataAbertura: "15/03/2023",
  dataPublicacao: "01/03/2023",
  situacao: "Em andamento",
  valor: "R$ 150.000,00",
  documentos: [
    {
      tipo: "Edital",
      data: "01/03/2023",
      arquivo: "edital_pe_029_2025.pdf"
    },
    {
      tipo: "Termo de Referência",
      data: "01/03/2023",
      arquivo: "tr_pe_029_2025.pdf"
    },
    {
      tipo: "Ata de Abertura",
      data: "15/03/2023",
      arquivo: "ata_pe_029_2025.pdf"
    }
  ]
};

const LicitacaoDetalhes = () => {
  const { id } = useParams();

  return (
    <Layout>
      <div className="bg-saae-blue py-8 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold">Detalhes da Licitação</h1>
          <p className="mt-2">Licitação Nº {mockLicitacao.numero}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Informações Gerais</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">Modalidade</p>
                <p className="font-medium">{mockLicitacao.modalidade}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Número</p>
                <p className="font-medium">{mockLicitacao.numero}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500">Objeto</p>
                <p className="font-medium">{mockLicitacao.objeto}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Data de Publicação</p>
                <p className="font-medium">{mockLicitacao.dataPublicacao}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Data de Abertura</p>
                <p className="font-medium">{mockLicitacao.dataAbertura}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Situação</p>
                <p className="inline-flex px-2 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                  {mockLicitacao.situacao}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Valor Estimado</p>
                <p className="font-medium">{mockLicitacao.valor}</p>
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
              {mockLicitacao.documentos.map((doc, index) => (
                <div key={index}>
                  {index > 0 && <Separator className="my-4" />}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{doc.tipo}</p>
                      <p className="text-sm text-gray-500">Publicado em {doc.data}</p>
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
