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
    <nav className="w-64 p-4 border-r bg-background shrink-0">
      <h3 className="text-lg font-semibold mb-4">Artwork Galleries</h3>
      <ul className="space-y-2">
        {galleryOrder.map((gallery) => (
          <li key={gallery.path}>
            <Link
              href={gallery.path}
              className={cn(
                "block py-2 px-3 rounded-md text-sm font-medium",
                pathname === gallery.path
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
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
