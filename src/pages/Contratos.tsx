
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Download, Search } from "lucide-react";

// Mock data for contracts
const mockContratos = [
  {
    id: "001/2023",
    numero: "SAAE-005/2023",
    objeto: "Fornecimento de produtos químicos para tratamento de água",
    fornecedor: "Química Industrial Ltda",
    inicioVigencia: "01/04/2023",
    fimVigencia: "01/04/2024",
    valor: "R$ 145.600,00"
  },
  {
    id: "002/2023",
    numero: "SAAE-014/2023",
    objeto: "Manutenção preventiva e corretiva de rede de distribuição de água",
    fornecedor: "Construtora Água Boa Ltda",
    inicioVigencia: "15/05/2023",
    fimVigencia: "15/05/2024",
    valor: "R$ 472.300,00"
  },
  {
    id: "003/2023",
    numero: "SAAE-027/2023",
    objeto: "Fornecimento de tubos e conexões para expansão da rede de distribuição",
    fornecedor: "Tubos & Conexões S.A.",
    inicioVigencia: "01/06/2023",
    fimVigencia: "01/06/2024",
    valor: "R$ 318.750,00"
  },
  {
    id: "004/2023",
    numero: "SAAE-032/2023",
    objeto: "Construção de reservatório de água tratada com capacidade de 500m³",
    fornecedor: "Amazonas Construções Ltda",
    inicioVigencia: "01/07/2023",
    fimVigencia: "01/07/2024",
    valor: "R$ 1.198.400,00"
  },
  {
    id: "005/2023",
    numero: "SAAE-041/2023",
    objeto: "Aquisição de bombas submersíveis para estações elevatórias",
    fornecedor: "Bombas e Equipamentos Norte Ltda",
    inicioVigencia: "01/08/2023",
    fimVigencia: "01/08/2024",
    valor: "R$ 256.800,00"
  }
];

const Contratos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [anoFilter, setAnoFilter] = useState("");
  const [fornecedorFilter, setFornecedorFilter] = useState("");

  const filteredContratos = mockContratos.filter(contrato => {
    const matchesSearch = searchTerm 
      ? contrato.objeto.toLowerCase().includes(searchTerm.toLowerCase()) || 
        contrato.numero.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
      
    const matchesFornecedor = fornecedorFilter 
      ? contrato.fornecedor === fornecedorFilter 
      : true;
      
    const matchesAno = anoFilter 
      ? contrato.id.includes(`/${anoFilter}`) 
      : true;
      
    return matchesSearch && matchesFornecedor && matchesAno;
  });

  return (
    <Layout>
      <div className="bg-saae-blue py-8 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-bold">Contratos</h1>
          <p className="mt-2">
            Consulte os contratos firmados pelo SAAE Parintins
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-saae-darkBlue mb-4">Filtros de Pesquisa</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Input
                placeholder="Pesquisar por número ou objeto"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            
            <Select value={anoFilter} onValueChange={setAnoFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Ano" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todos os anos</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={fornecedorFilter} onValueChange={setFornecedorFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Fornecedor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todos os fornecedores</SelectItem>
                <SelectItem value="Química Industrial Ltda">Química Industrial Ltda</SelectItem>
                <SelectItem value="Construtora Água Boa Ltda">Construtora Água Boa Ltda</SelectItem>
                <SelectItem value="Tubos & Conexões S.A.">Tubos & Conexões S.A.</SelectItem>
                <SelectItem value="Amazonas Construções Ltda">Amazonas Construções Ltda</SelectItem>
                <SelectItem value="Bombas e Equipamentos Norte Ltda">Bombas e Equipamentos Norte Ltda</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="mt-4 flex justify-end">
            <Button 
              variant="outline" 
              className="mr-2"
              onClick={() => {
                setSearchTerm("");
                setAnoFilter("");
                setFornecedorFilter("");
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
              {filteredContratos.length} contratos encontrados
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Número</TableHead>
                  <TableHead className="w-1/4">Objeto</TableHead>
                  <TableHead>Fornecedor</TableHead>
                  <TableHead>Início</TableHead>
                  <TableHead>Fim</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredContratos.map((contrato) => (
                  <TableRow key={contrato.id}>
                    <TableCell className="font-medium">{contrato.numero}</TableCell>
                    <TableCell>{contrato.objeto}</TableCell>
                    <TableCell>{contrato.fornecedor}</TableCell>
                    <TableCell>{contrato.inicioVigencia}</TableCell>
                    <TableCell>{contrato.fimVigencia}</TableCell>
                    <TableCell>{contrato.valor}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button variant="ghost" size="icon" title="Visualizar contrato">
                          <FileText className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" title="Baixar contrato">
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
                &gt;
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contratos;
