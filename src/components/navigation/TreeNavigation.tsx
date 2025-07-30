'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const galleryOrder = [
  { name: "CameraEye", path: "/CameraEye" },
  { name: "Comcast", path: "/Comcast" },
  //{ name: "Crypto app", path: "/Crypto app" },
  { name: "EL_Burrito", path: "/EL_Burrito" },
  { name: "Icons", path: "/Icons" },
 // { name: "NB TEXTILES OG", path: "/NB TEXTILES OG" },
  { name: "Symposium", path: "/Symposium" },
  { name: "Trope", path: "/Trope" },
  { name: "Valiant", path: "/Valiant" },
];

export function TreeNavigation() {
  const pathname = usePathname();

  return (
        <nav className="w-full py-4 border-b border-[var(--primary)] bg-background">
      <ul className="flex justify-center items-center space-x-2 md:space-x-4 overflow-x-auto">
        {galleryOrder.map((gallery) => (
          <li key={gallery.path}>
            <Link
              href={gallery.path}
              className={cn(
                "py-2 px-3 text-sm font-medium whitespace-nowrap",
                pathname === gallery.path
                  ? "text-foreground border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {gallery.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}