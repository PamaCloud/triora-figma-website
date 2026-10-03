"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageWithLoadingProps {
  src: string;
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
}

export function ImageWithLoading({
  src,
  alt,
  className = "",
  sizes,
  priority = false,
}: ImageWithLoadingProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div aria-busy={!loaded} className={`media-frame ${className}`}>
      {!loaded && (
        <span aria-hidden="true" className="media-skeleton" />
      )}
      <Image
        alt={alt}
        className={loaded ? "media-image is-loaded" : "media-image"}
        fill
        onLoad={() => setLoaded(true)}
        priority={priority}
        sizes={sizes}
        src={src}
      />
    </div>
  );
}
