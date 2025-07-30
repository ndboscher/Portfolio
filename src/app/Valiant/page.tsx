'use client';

import { Separator } from "@/components/ui/separator";
import { TreeNavigation } from "@/components/navigation/TreeNavigation";
import { GALLERY } from "@/data/Gallery";
import { MasonryGallery } from "@/components/masonry-gallery";

export default function ValiantPage() {
  const valiantImages = GALLERY.Valiant;

  return (
    <div>
      <TreeNavigation />

      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">Valiant Project</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A sleek and captivating description of the Valiant project goes here.
            Highlight its key features, design principles, and impact.
          </p>
        </header>

        <Separator className="my-8 bg-[var(--primary)]" />

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">Image Gallery</h2>
          <MasonryGallery images={valiantImages.map(i => ({...i}))} />
        </section>
      </div>
    </div>
  );
}