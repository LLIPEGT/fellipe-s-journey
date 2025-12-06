import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ImageModal = ({ photo, onClose, onPrev, onNext }) => {
  if (!photo) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative max-w-5xl w-[90%]">

        {/* BOTÃO FECHAR */}
        <button
          className="absolute top-4 right-4 text-white hover:text-red-400"
          onClick={onClose}
        >
          <X size={32} />
        </button>

        {/* BOTÃO ANTERIOR */}
        <button
          className="absolute top-1/2 -left-12 transform -translate-y-1/2 text-white hover:text-blue-300"
          onClick={onPrev}
        >
          <ChevronLeft size={40} />
        </button>

        {/* BOTÃO PRÓXIMA */}
        <button
          className="absolute top-1/2 -right-12 transform -translate-y-1/2 text-white hover:text-blue-300"
          onClick={onNext}
        >
          <ChevronRight size={40} />
        </button>

        {/* IMAGEM — MOSTRAR INTEIRA */}
        <div className="flex items-center justify-center bg-black rounded-xl overflow-hidden max-h-[80vh]">
          <img
            src={photo.src}
            alt={photo.caption}
            className="max-w-full max-h-[80vh] object-contain"
          />
        </div>

        {/* LEGENDA */}
        <p className="text-center text-white mt-4 text-lg">
          {photo.caption}
        </p>
      </div>
    </div>
  );
};

export default ImageModal;
