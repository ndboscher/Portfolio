'use client';

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
        <DialogContent className="sm:max-w-[800px] p-4 bg-background">
          {selectedImageIndex !== null && (
            <div className="flex items-center justify-between w-full h-full">
              {/* Left Arrow Container */}
              <div className="flex items-center justify-center w-12 h-full">
                <button
                  onClick={handlePrevious}
                  className="text-accent p-2 rounded-full"
                >
                  <ArrowLeft size={24} />
                </button>
              </div>

              {/* Image Container */}
              <div className="flex-grow flex items-center justify-center">
                <Image
                  src={images[selectedImageIndex].image}
                  alt="Enlarged Image"
                  width={1200}
                  height={1200}
                  className="w-full h-auto max-h-[90vh] object-contain"
                />
              </div>

              {/* Right Arrow Container */}
              <div className="flex items-center justify-center w-12 h-full">
                <button
                  onClick={handleNext}
                  className="text-accent p-2 rounded-full"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}