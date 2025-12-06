// src/components/GalleryItem.jsx
import { Image } from "lucide-react";

const GalleryItem = ({ photo, onClick }) => {
  return (
    <div
      onClick={photo.src ? () => onClick(photo) : null}
      className="group aspect-square rounded-xl overflow-hidden border border-border bg-card hover-lift cursor-pointer"
    >
      {photo.src ? (
        <div className="relative w-full h-full">
          <img 
            src={photo.src} 
            alt={photo.caption} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <p className="text-background text-sm">{photo.caption}</p>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
          <Image className="w-10 h-10 mb-2" />
          <p className="text-xs text-center px-2">{photo.caption}</p>
        </div>
      )}
    </div>
  );
};

export default GalleryItem;
