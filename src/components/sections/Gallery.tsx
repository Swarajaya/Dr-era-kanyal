"use client";

import { motion } from "framer-motion";
import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { ImagePlus } from "lucide-react";

// Gallery items — replace src with actual images in /public/images/gallery/
const galleryItems = [
  { id: 1, alt: "Birth education class", aspect: "aspect-square", bg: "from-primary-200 to-primary-300" },
  { id: 2, alt: "Mother and newborn", aspect: "aspect-[4/5]", bg: "from-secondary-200 to-primary-200" },
  { id: 3, alt: "Breastfeeding support", aspect: "aspect-[3/4]", bg: "from-accent-200 to-secondary-200" },
  { id: 4, alt: "Prenatal consultation", aspect: "aspect-square", bg: "from-primary-300 to-accent-300" },
  { id: 5, alt: "Partner birth class", aspect: "aspect-[4/3]", bg: "from-secondary-100 to-primary-200" },
  { id: 6, alt: "Newborn care class", aspect: "aspect-[3/4]", bg: "from-primary-200 to-secondary-300" },
  { id: 7, alt: "Postnatal support", aspect: "aspect-square", bg: "from-accent-100 to-primary-200" },
  { id: 8, alt: "Online consultation", aspect: "aspect-[4/5]", bg: "from-primary-100 to-accent-200" },
  { id: 9, alt: "Birth planning session", aspect: "aspect-[3/4]", bg: "from-secondary-200 to-accent-200" },
];

function GalleryPlaceholder({
  item,
  index,
}: {
  item: (typeof galleryItems)[0];
  index: number;
}) {
  const { ref, inView } = useAnimateOnScroll(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className={`masonry-item rounded-2xl overflow-hidden ${item.aspect} relative group cursor-pointer`}
    >
      {/* Placeholder gradient — replace with <Image> component */}
      <div
        className={`w-full h-full bg-gradient-to-br ${item.bg} flex flex-col items-center justify-center gap-3 min-h-[180px]`}
      >
        <ImagePlus size={28} className="text-white/70" />
        <p className="font-body text-xs text-white/60 text-center px-4">
          {/* REPLACE: /public/images/gallery/gallery-{item.id}.jpg */}
          {item.alt}
        </p>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-accent-800/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="font-body text-white text-sm font-500">{item.alt}</span>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const { ref, inView } = useAnimateOnScroll(0.1);

  return (
    <section className="section-padding gradient-bg dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="font-body text-xs text-accent-500 uppercase tracking-[0.2em] font-600 mb-4 block">
            Gallery
          </span>
          <h2 className="section-heading mb-4 text-text dark:text-text-dark">
            Moments of{" "}
            <span className="text-gradient italic">Care & Connection</span>
          </h2>
          <p className="section-subheading max-w-xl mx-auto">
            A glimpse into the warm, supportive environment we create for every
            family.
          </p>

          {/* Upload instruction note */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 border border-secondary-200 text-sm text-text-muted">
            <ImagePlus size={14} />
            <span>
              Add real photos to{" "}
              <code className="font-mono text-xs bg-secondary-200 px-1.5 py-0.5 rounded">
                /public/images/gallery/
              </code>
            </span>
          </div>
        </motion.div>

        {/* Masonry grid */}
        <div className="masonry-grid">
          {galleryItems.map((item, i) => (
            <GalleryPlaceholder key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
