
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
}

const CategoryCard = ({ title, description, icon: Icon, to }: CategoryCardProps) => {
  return (
    <Link to={to} className="block">
      <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-shadow duration-300 border border-gray-100">
        <div className="flex flex-col h-full">
          <div className="mb-4 bg-saae-blue/10 w-14 h-14 rounded-full flex items-center justify-center">
            <Icon className="h-7 w-7 text-saae-blue" />
          </div>
          <h3 className="text-lg font-bold text-saae-darkBlue mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mt-auto">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
