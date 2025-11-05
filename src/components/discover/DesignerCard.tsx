import React from "react";
import QuickDesignerModal from "./DesignerModel";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import type { DesignerCardType } from "@/types";
import { Heart, Bookmark } from "lucide-react";

interface DesignerCardProps {
  designerData: DesignerCardType;
}

const DesignerCard: React.FC<DesignerCardProps> = ({ designerData }) => {
  const { designer } = designerData;

  return (
    <div className="flex justify-center">
      <Card className="w-72 sm:w-80 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 bg-white flex flex-col">
        {/* Designer Image */}
        <CardHeader className="p-0 relative group">
          <div className="relative w-full h-80 sm:h-96 overflow-hidden">
            <img
              src={designer.workImages[0]}
              alt={designer.name}
              className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
            />

            {/* Hover icons */}
            <div className="absolute bottom-3 left-0 w-full flex justify-center gap-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full shadow hover:bg-lime-100 transition">
                <Heart
                  size={18}
                  className="text-gray-700 hover:text-lime-600 transition"
                />
              </button>
              <button className="p-2 bg-white/80 backdrop-blur-sm rounded-full shadow hover:bg-lime-100 transition">
                <Bookmark
                  size={18}
                  className="text-gray-700 hover:text-lime-600 transition"
                />
              </button>
            </div>
          </div>
        </CardHeader>

        {/* Footer (short section) */}
        <CardFooter className="px-4 py-3 flex items-center justify-between bg-white border-t border-gray-100">
          <QuickDesignerModal designer={designerData} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default DesignerCard;
