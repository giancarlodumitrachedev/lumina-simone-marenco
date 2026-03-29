"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const studioImages = [
  { src: "/Assets/studio-1.webp", alt: "Sala d'attesa Lumnia" },
  { src: "/Assets/studio-2.webp", alt: "Studio principale Lumnia" },
  { src: "/Assets/studio-3.webp", alt: "Dettaglio ambiente Lumnia" },
];

export function StudioSection() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold mb-6">
            Lo Studio
          </h2>
          <p className="text-lg text-foreground/80">
            Un ambiente pensato per accoglierti. Ho curato ogni dettaglio per offrirti uno spazio calmo, 
            sicuro e rilassante in cui sentirti a tuo agio dal primo momento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studioImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
