import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Download, Search } from "lucide-react";
import { Link } from "react-router-dom";

const mockLicitacoes = [
  {
    id: "001/2023",
    modalidade: "Pregão Eletrônico",
    objeto: "Aquisição de produtos químicos para tratamento de água",
    dataAbertura: "15/03/2023",
    situacao: "Homologada",
    valor: "R$ 150.000,00"
  },
  {
    id: "002/2023",
    modalidade: "Tomada de Preços",
    objeto: "Contratação de empresa para manutenção de rede de distribuição de água",
    dataAbertura: "22/04/2023",
    situacao: "Em andamento",
    valor: "R$ 480.000,00"
  },
  {
    id: "003/2023",
    modalidade: "Pregão Eletrônico",
    objeto: "Aquisição de tubos e conexões para expansão da rede de distribuição",
    dataAbertura: "10/05/2023",
    situacao: "Homologada",
    valor: "R$ 320.000,00"
  },
  {
    id: "004/2023",
    modalidade: "Concorrência",
    objeto: "Construção de novo reservatório de água tratada",
    dataAbertura: "18/06/2023",
    situacao: "Homologada",
    valor: "R$ 1.200.000,00"
  },
  {
    id: "005/2023",
    modalidade: "Pregão Eletrônico",
    objeto: "Aquisição de equipamentos para estação de tratamento",
    dataAbertura: "05/07/2023",
    situacao: "Em andamento",
    valor: "R$ 250.000,00"
  },
  {
    id: "006/2023",
    modalidade: "Dispensa",
    objeto: "Contratação emergencial para reparo de adutora",
    dataAbertura: "22/08/2023",
    situacao: "Homologada",
    valor: "R$ 85.000,00"
  },
  {
    id: "007/2023",
    modalidade: "Pregão Eletrônico",
    objeto: "Aquisição de hidrômetros para substituição e novas ligações",
    dataAbertura: "14/09/2023",
    situacao: "Em andamento",
    valor: "R$ 380.000,00"
  }
];

const Licitacoes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalidadeFilter, setModalidadeFilter] = useState("");
  const [anoFilter, setAnoFilter] = useState("");
  const [situacaoFilter, setSituacaoFilter] = useState("");

  const filteredLicitacoes = mockLicitacoes.filter(licitacao => {
    const matchesSearch = searchTerm 
      ? licitacao.objeto.toLowerCase().includes(searchTerm.toLowerCase()) || 
        licitacao.id.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
      
    const matchesModalidade = modalidadeFilter 
      ? licitacao.modalidade === modalidadeFilter 
      : true;
      
    const matchesSituacao = situacaoFilter 
      ? licitacao.situacao === situacaoFilter 
      : true;
      
    const matchesAno = anoFilter 
      ? licitacao.id.includes(`/${anoFilter}`) 
      : true;
      
    return matchesSearch && matchesModalidade && matchesSituacao && matchesAno;
  });

  return (
    <Layout>
      <div className="bg-saae-blue py-8 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold">Licitações</h1>
          <p className="mt-2">
            Consulte as licitações realizadas pelo SAAE Parintins
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-saae-darkBlue mb-4">Filtros de Pesquisa</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Input
                placeholder="Pesquisar por número ou objeto"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            
            <Select value={modalidadeFilter} onValueChange={setModalidadeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Modalidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as modalidades</SelectItem>
                <SelectItem value="Pregão Eletrônico">Pregão Eletrônico</SelectItem>
                <SelectItem value="Tomada de Preços">Tomada de Preços</SelectItem>
                <SelectItem value="Concorrência">Concorrência</SelectItem>
                <SelectItem value="Dispensa">Dispensa</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={anoFilter} onValueChange={setAnoFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Ano" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os anos</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={situacaoFilter} onValueChange={setSituacaoFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Situação" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as situações</SelectItem>
                <SelectItem value="Homologada">Homologada</SelectItem>
                <SelectItem value="Em andamento">Em andamento</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mt-4 flex justify-end">
            <Button 
              variant="outline" 
              className="mr-2"
              onClick={() => {
                setSearchTerm("");
                setModalidadeFilter("");
                setAnoFilter("");
                setSituacaoFilter("");
              }}
            >
              Limpar
            </Button>
            <Button className="bg-saae-blue hover:bg-saae-blue/90">
              Filtrar
            </Button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold text-saae-darkBlue">Resultados</h2>
            <p className="text-sm text-gray-500">
              {filteredLicitacoes.length} licitações encontradas
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nº</TableHead>
                  <TableHead>Modalidade</TableHead>
                  <TableHead className="w-1/3">Objeto</TableHead>
                  <TableHead>Data de Abertura</TableHead>
                  <TableHead>Situação</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLicitacoes.map((licitacao) => (
                  <TableRow key={licitacao.id}>
                    <TableCell className="font-medium">{licitacao.id}</TableCell>
                    <TableCell>{licitacao.modalidade}</TableCell>
                    <TableCell>{licitacao.objeto}</TableCell>
                    <TableCell>{licitacao.dataAbertura}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        licitacao.situacao === "Homologada" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {licitacao.situacao}
                      </span>
                    </TableCell>
                    <TableCell>{licitacao.valor}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Link to={`/licitacoes/${licitacao.id.replace('/', '-')}`}>
                          <Button variant="ghost" size="icon" title="Visualizar detalhes">
                            <FileText className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="icon" title="Baixar documentos">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="p-4 border-t flex justify-center">
            <div className="flex space-x-1">
              <Button variant="outline" size="icon" disabled className="w-8 h-8">
                &lt;
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8 bg-saae-blue text-white">
                1
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8">
                2
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8">
                3
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8">
                &gt;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Licitacoes;
