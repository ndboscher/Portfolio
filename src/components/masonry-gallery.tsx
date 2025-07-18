'use client';

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type GalleryProps = {
  images: {
    image: string;
    title: string;
    description: string;
  }[];
  className?: string;
};

export function MasonryGallery({ images, className }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  return (
    <>
      <div
        className={cn(
          "columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4",
          className
        )}
      >
        {images.map((item, idx) => (
          <div key={idx} className="break-inside-avoid cursor-pointer" onClick={() => handleImageClick(item.image)}>
            <Image
              src={item.image}
              alt={item.description || item.title}
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[800px] p-0">
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Enlarged Image"
              width={1200}
              height={1200}
              className="w-full h-auto max-h-[90vh]"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}