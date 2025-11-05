import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, UserPlus } from "lucide-react";
import type { DesignerCardType } from "@/types";

const QuickDesignerModal = ({ designer }: { designer: DesignerCardType }) => {
  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <div className="flex items-center justify-between p-4 hover:underline cursor-pointer">
          <div className="flex items-center gap-3">
            <img
              src={designer.designer.avatar}
              alt={designer.designer.name}
              className="w-10 h-10 rounded-full object-cover border border-gray-200"
            />
            <span className="font-semibold text-black truncate">
              {designer.designer.name}
            </span>
          </div>
        </div>
      </DialogTrigger>

      {/* Modal Content */}
      <DialogContent className="max-w-2xl bg-white rounded-2xl p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left — Designer Info */}
          <div className="flex-1 flex flex-col justify-start">
            <DialogHeader className="flex items-center gap-4 mb-4">
              <img
                src={designer.designer.avatar}
                alt={designer.designer.name}
                className="w-20 h-20 rounded-full object-cover border border-gray-200"
              />
              <div className="flex flex-col">
                <DialogTitle className="font-bold text-2xl">
                  {designer.designer.name}
                </DialogTitle>
                <DialogDescription className="text-gray-500 text-sm mb-2">
                  {designer.designer.badges?.join(" • ")}
                </DialogDescription>
                <div className="flex gap-3 mt-2">
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-sm"
                  >
                    <UserPlus size={16} /> Follow
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 text-sm"
                  >
                    <MessageCircle size={16} /> Message
                  </Button>
                </div>
              </div>
            </DialogHeader>

            {/* Bio + Info */}
            <div className="space-y-2 text-sm text-gray-700 leading-relaxed">
              <p className="text-gray-600">{designer.designer.description}</p>
              <p>⭐ Rating: {designer.designer.rating}/5</p>
              <p>🕒 Experience: {designer.designer.exp}</p>
              <p>
                ✅ Verifications:{" "}
                <span className="font-medium text-lime-600">
                  {Object.entries(designer.designer.verifications)
                    .filter(([v]) => v)
                    .map(([key]) => key)
                    .join(", ") || "None"}
                </span>
              </p>
            </div>
          </div>

          {/* Right — Work Images Grid */}
          <div className="flex-[1.2] grid grid-cols-3 gap-3 overflow-y-auto max-h-[60vh]">
            {designer.designer.workImages.map((img, index) => (
              <div
                key={index}
                className="w-full h-48 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <img
                  src={img}
                  alt={`Work ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickDesignerModal;
