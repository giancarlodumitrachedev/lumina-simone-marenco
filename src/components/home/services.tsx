"use client";

import { motion } from "framer-motion";
import { SmartLink } from "@/components/smart-link";
import { ArrowRight, UserCircle, Users, Activity } from "lucide-react";

const services = [
  {
    title: "Psicoterapia Individuale",
    description: "Un percorso vis-à-vis per affrontare nodi emotivi profondi e ritrovare il proprio benessere psicologico in un ambiente sicuro e non giudicante.",
    icon: <UserCircle className="w-8 h-8" />
  },
  {
    title: "Terapia di Coppia",
    description: "Sostegno per superare crisi, tradimenti o incomprensioni, ripristinando una comunicazione efficace e un legame affettivo stabile.",
    icon: <Users className="w-8 h-8" />
  },
  {
    title: "Sostegno Psicologico",
    description: "Interventi mirati e a breve termine per affrontare specifiche fasi critiche della vita, come lutti, separazioni o cambiamenti lavorativi.",
    icon: <Activity className="w-8 h-8" />
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-primary/80 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Aree di Intervento
            </span>
            <h2 className="text-secondary-foreground font-heading text-4xl md:text-5xl font-semibold">
              Come posso aiutarti
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SmartLink
              href="/servizi"
              className="group inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
            >
              Scopri tutti i servizi
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </SmartLink>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-background rounded-3xl p-10 shadow-sm border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-8 text-primary/80 group-hover:text-primary transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-secondary-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
