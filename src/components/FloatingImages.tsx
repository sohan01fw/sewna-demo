import { useRef } from "react";

const FloatingImages = ({ images }: { images: string[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const half = Math.ceil(images.length / 2);
  const bottomImages = images.slice(0, half);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-visible"
    >
      {/* Bottom horizontal images */}
      {bottomImages.map((src, idx) => {
        const size = 140 + (idx % 5) * 10;
        const bottomOffset = -20; // slight overflow
        const leftOffset = 20 + idx * 120; // horizontal spread

        return (
          <div
            key={`bottom-${idx}`}
            className="absolute rounded-md overflow-hidden bg-gray-100 shadow-lg"
            style={{
              width: size,
              height: size,
              bottom: bottomOffset,
              left: leftOffset,
              pointerEvents: "none",
            }}
          >
            <img
              src={src}
              alt={`fashion-bottom-${idx}`}
              className="w-full h-full object-cover select-none pointer-events-none"
              draggable={false}
            />
          </div>
        );
      })}

      {/* Right vertical images */}
      {/*{rightImages.map((src, idx) => {
        const size = 50 + (idx % 5) * 15;
        const bottomOffset = 120 + idx * 50; // vertical spread upwards
        const rightOffset = -20; // slight overflow to the right

        return (
          <div
            key={`right-${idx}`}
            className="absolute rounded-md overflow-hidden bg-gray-100 shadow-lg"
            style={{
              width: size,
              height: size,
              bottom: bottomOffset,
              right: rightOffset,
              pointerEvents: "none",
            }}
          >
            <img
              src={src}
              alt={`fashion-right-${idx}`}
              className="w-full h-full object-cover select-none pointer-events-none"
              draggable={false}
            />
          </div>
        );
      })}*/}
    </div>
  );
};

export default FloatingImages;
