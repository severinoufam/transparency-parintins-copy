
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="bg-saae-blue text-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              SAAE Parintins
            </Link>
            <span className="ml-2 bg-white text-saae-blue px-2 py-1 rounded-md text-xs font-semibold">
              Portal da Transparência
            </span>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Input 
                placeholder="Pesquisar..." 
                className="pl-10 bg-white/90 text-saae-darkBlue"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-saae-gray" />
            </div>
            <Button className="bg-saae-green hover:bg-saae-green/90 text-white">
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
