'use client';

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryProps = {
  images: {
    image: string;
    title: string;
    description: string;
  }[];
  className?: string;
};

export function MasonryGallery({ images, className }: GalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % images.length);
    }
  };

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + images.length) % images.length
      );
    }
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
          <div key={idx} className="break-inside-avoid cursor-pointer" onClick={() => handleImageClick(idx)}>
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
          {selectedImageIndex !== null && (
            <div className="relative">
              <Image
                src={images[selectedImageIndex].image}
                alt="Enlarged Image"
                width={1200}
                height={1200}
                className="w-full h-auto max-h-[90vh]"
              />
              <button
                onClick={handlePrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}