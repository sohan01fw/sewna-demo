import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { DesignerCardType } from "../types";

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
            <span className="font-semibold text-black">
              {designer.designer.name}
            </span>
          </div>
        </div>
      </DialogTrigger>

      {/* Modal Content */}
      <DialogContent className="max-w-md">
        {/* Header */}
        <DialogHeader className="flex items-center gap-4 mb-4">
          <img
            src={designer.designer.avatar}
            alt={designer.designer.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <DialogTitle className="font-bold text-xl">
              {designer.designer.name}
            </DialogTitle>
            <DialogDescription className="text-gray-500 text-sm">
              {designer.designer.badges}
            </DialogDescription>
          </div>
        </DialogHeader>

        {/* Short Bio */}
        <p className="mb-4 text-gray-700">{designer.designer.description}</p>

        {/* Recent Works */}
        <h4 className="font-semibold mb-2">Recent Works</h4>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {designer.designer.workImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Work ${index + 1}`}
              className="w-full h-24 object-cover rounded"
            />
          ))}
        </div>

        {/* View Full Profile */}
        <a
          href={`/designer/${designer.id}`}
          className="block text-center bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          View Full Profile
        </a>
      </DialogContent>
    </Dialog>
  );
};

export default QuickDesignerModal;
