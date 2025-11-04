import React from "react";
import { motion } from "framer-motion";
import QuickDesignerModal from "./DesignerModel";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import type { DesignerCardType } from "@/types";
import { Button } from "./ui/button";

interface DesignerCardProps {
  designerData: DesignerCardType;
}

const DesignerCard: React.FC<DesignerCardProps> = ({ designerData }) => {
  const { designer } = designerData;

  return (
    <motion.div
      whileHover={{ scale: 1, y: -5 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card className="rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="p-0">
          {/* Image */}
          <div className="relative">
            <img
              src={designer.workImages[0]}
              alt={designer.name}
              className="w-full h-60 object-cover rounded-t-2xl"
            />
          </div>

          {/* Designer Info as Title + Description */}
          <CardTitle className="mt-3 px-4 text-lg">{designer.name}</CardTitle>
          <CardDescription className="px-4 text-sm text-gray-500">
            {designer.badges}
          </CardDescription>
        </CardHeader>

        <CardContent className="px-4 pt-2 pb-4">
          <p className="text-gray-700 line-clamp-2">{designer.description}</p>
        </CardContent>

        <CardFooter className="px-4 pb-4">
          {/* Modal Trigger */}
          <QuickDesignerModal designer={designerData} />
          <div className="flex min-h-svh flex-col items-center justify-center">
            <Button>Click me</Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default DesignerCard;
